// Content negotiation for AI agents (Cloudflare Pages Functions).
//
// A page with a Markdown twin (/ -> /index.md, /work/cosmos -> /work/cosmos.md)
// is served as Markdown to clients that prefer text/markdown over text/html.
// Everyone else gets the normal HTML page, with a Link header pointing at the
// twin.
//
// _routes.json limits this Function to routes that have a twin, so every other
// request stays a free static asset. To give another page a twin, add the .md
// file and add its route to _routes.json.
//
// Pages does not apply _headers to responses that pass through a Function, so
// the headers those routes need are set here.

const PAGE_HEADERS = {
  "Cache-Control": "public, max-age=0, must-revalidate",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

export async function onRequest({ request, next, env }) {
  if (request.method !== "GET" && request.method !== "HEAD") return next();

  const url = new URL(request.url);
  const markdownPath = markdownPathFor(url.pathname);
  const markdown = markdownPath ? await fetchMarkdown(env, url, markdownPath) : null;

  if (markdown && prefersMarkdown(request.headers.get("Accept"))) {
    const headers = new Headers(PAGE_HEADERS);
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    headers.set("Vary", "Accept");
    headers.set("Link", `<${url.origin}${url.pathname}>; rel="canonical"`);
    const body = request.method === "HEAD" ? null : markdown.body;
    if (!body) await markdown.body?.cancel();
    return new Response(body, { status: 200, headers });
  }
  await markdown?.body?.cancel();

  const page = await next();
  const response = new Response(page.body, page);
  for (const [name, value] of Object.entries(PAGE_HEADERS)) {
    if (!response.headers.has(name)) response.headers.set(name, value);
  }
  if (markdown) {
    response.headers.append("Vary", "Accept");
    response.headers.append("Link", `<${markdownPath}>; rel="alternate"; type="text/markdown"`);
  }
  return response;
}

function markdownPathFor(pathname) {
  if (pathname.endsWith("/")) return `${pathname}index.md`;
  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  if (lastSegment.includes(".")) return null; // a file such as styles.css
  return `${pathname}.md`;
}

async function fetchMarkdown(env, url, path) {
  const response = await env.ASSETS.fetch(new URL(path, url.origin));
  // A missing asset comes back as 404.html (or index.html on sites without a
  // 404 page), so anything that is not a successful non-HTML file is a miss.
  const type = response.headers.get("Content-Type") || "";
  if (response.ok && !type.includes("text/html")) return response;
  await response.body?.cancel();
  return null;
}

// True when the client lists text/markdown and ranks it at least as high as HTML.
function prefersMarkdown(accept) {
  if (!accept) return false;
  const weights = new Map();
  for (const range of accept.toLowerCase().split(",")) {
    const [type, ...params] = range.split(";").map((part) => part.trim());
    if (!type) continue;
    const qParam = params.find((param) => param.startsWith("q="));
    const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
    weights.set(type, Number.isFinite(q) ? q : 0);
  }
  const markdown = weights.get("text/markdown") ?? 0;
  const html = weights.get("text/html") ?? weights.get("text/*") ?? weights.get("*/*") ?? 0;
  return markdown > 0 && markdown >= html;
}
