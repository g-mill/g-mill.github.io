#!/bin/sh
# The homepage must be easy for AI agents to find, read and quote:
# llms.txt at the root, a Markdown twin advertised from the HTML with a Q&A
# of question headings and direct answers, and Accept: text/markdown
# negotiation in the Pages Function. The Q&A lives only in the Markdown twin;
# the HTML page stays as designed.
set -eu

python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
import json
import re

SITE = "https://griffinmiller.com"


def local_file_for(url):
    """Map a griffinmiller.com URL to the file Cloudflare Pages serves for it."""
    assert url.startswith(SITE), f"{url} is not on {SITE}"
    path = url[len(SITE):].split("#")[0].lstrip("/")
    if path == "":
        return Path("index.html")
    candidates = [Path(path), Path(path + ".html"), Path(path) / "index.html"]
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    raise AssertionError(f"{url} does not resolve to a file in the repo")


class HomeParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.alternates = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "link" and attrs.get("rel") == "alternate":
            self.alternates.append((attrs.get("type"), attrs.get("href")))


home = HomeParser()
home.feed(Path("index.html").read_text())

# 1. The HTML head points agents at the Markdown twin.
markdown_links = [href for kind, href in home.alternates if kind == "text/markdown"]
assert markdown_links == [f"{SITE}/index.md"], (
    'index.html needs exactly one <link rel="alternate" type="text/markdown" '
    f'href="{SITE}/index.md">, found {markdown_links}'
)

# 2. The Markdown twin exists and reads as a standalone page.
markdown = Path("index.md").read_text()
assert markdown.startswith("# Griffin Miller\n"), "index.md must open with '# Griffin Miller'"
assert "<" not in re.sub(r"<https?://[^>]+>", "", markdown), "index.md must not contain HTML"

# 3. The Markdown twin has a Q&A: question headings, each answered right below.
faq_block = markdown.split("\n## Frequently asked questions\n", 1)
assert len(faq_block) == 2, "index.md needs a '## Frequently asked questions' section"
entries = re.split(r"^### ", faq_block[1].split("\n## ", 1)[0], flags=re.M)[1:]
assert len(entries) >= 4, "index.md needs at least four Q&A entries"
for entry in entries:
    question, _, answer = entry.partition("\n")
    assert question.endswith("?"), f"Q&A heading is not a question: {question!r}"
    first_line = answer.strip().split("\n", 1)[0]
    assert first_line and not first_line.startswith("#"), (
        f"Q&A question has no answer directly below it: {question!r}"
    )

# 4. llms.txt follows the llms.txt format and every link resolves.
llms = Path("llms.txt").read_text()
assert llms.startswith("# Griffin Miller\n"), "llms.txt must open with '# Griffin Miller'"
assert re.search(r"^> \S", llms, re.M), "llms.txt needs a '> ' summary line"
assert re.search(r"^## ", llms, re.M), "llms.txt needs '## ' sections of links"
llms_links = re.findall(r"\]\((https?://[^)]+)\)", llms)
assert f"{SITE}/index.md" in llms_links, "llms.txt must link to the Markdown homepage"
for url in llms_links:
    if url.startswith(SITE):
        local_file_for(url)

# 5. Every griffinmiller.com link in index.md resolves too.
for url in re.findall(r"\]\((https://griffinmiller\.com[^)]*)\)", markdown):
    local_file_for(url)

# 6. The Function only runs where a Markdown twin exists.
routes = json.loads(Path("_routes.json").read_text())
assert routes["version"] == 1
assert routes["include"] == ["/"], "_routes.json must limit the Function to the homepage"
PY

node --input-type=module - <<'JS'
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { onRequest } from "./functions/_middleware.js";

const MARKDOWN = readFileSync("index.md", "utf8");
const HTML = "<!doctype html><title>Griffin Miller</title>";
const BROWSER = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";

function context(accept, { method = "GET", assets } = {}) {
  const headers = accept ? { Accept: accept } : {};
  const request = new Request("https://griffinmiller.com/", { method, headers });
  const env = {
    ASSETS: {
      fetch: assets ?? (async (url) => {
        const { pathname } = new URL(url);
        if (pathname === "/index.md") {
          return new Response(MARKDOWN, { headers: { "Content-Type": "text/markdown" } });
        }
        return new Response("not found", { status: 404, headers: { "Content-Type": "text/html" } });
      }),
    },
  };
  const next = async () =>
    new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  return { request, env, next };
}

// Agents that ask for Markdown get the Markdown twin.
for (const accept of ["text/markdown", "text/markdown, text/html", "text/markdown, */*;q=0.8"]) {
  const res = await onRequest(context(accept));
  assert.equal(res.status, 200, accept);
  assert.equal(res.headers.get("Content-Type"), "text/markdown; charset=utf-8", accept);
  assert.match(res.headers.get("Vary"), /Accept/, accept);
  assert.equal(res.headers.get("Link"), '<https://griffinmiller.com/>; rel="canonical"', accept);
  assert.equal(res.headers.get("X-Content-Type-Options"), "nosniff", accept);
  assert.equal(await res.text(), MARKDOWN, accept);
}

// HEAD gets the Markdown headers and no body.
{
  const res = await onRequest(context("text/markdown", { method: "HEAD" }));
  assert.equal(res.headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.equal(await res.text(), "");
}

// Browsers, clients that prefer HTML, and clients with no Accept header get the page.
for (const accept of [BROWSER, "text/markdown;q=0.5, text/html", "*/*", undefined]) {
  const res = await onRequest(context(accept));
  assert.equal(res.headers.get("Content-Type"), "text/html; charset=utf-8", String(accept));
  assert.equal(await res.text(), HTML, String(accept));
  assert.match(res.headers.get("Vary"), /Accept/, String(accept));
  assert.equal(
    res.headers.get("Link"),
    '</index.md>; rel="alternate"; type="text/markdown"',
    String(accept),
  );
  // _headers does not apply to Function responses, so the Function sets these.
  assert.equal(res.headers.get("X-Content-Type-Options"), "nosniff", String(accept));
  assert.equal(res.headers.get("Referrer-Policy"), "strict-origin-when-cross-origin", String(accept));
}

// If the Markdown twin is missing (or Pages falls back to an HTML page), serve the page.
for (const fallback of [
  async () => new Response("nope", { status: 404, headers: { "Content-Type": "text/html" } }),
  async () => new Response(HTML, { status: 200, headers: { "Content-Type": "text/html" } }),
]) {
  const res = await onRequest(context("text/markdown", { assets: fallback }));
  assert.equal(await res.text(), HTML);
  assert.equal(res.headers.get("Link"), null);
}

// Other methods pass straight through.
{
  const res = await onRequest(context("text/markdown", { method: "POST" }));
  assert.equal(await res.text(), HTML);
}
JS

echo "agent-readable markup: ok"
