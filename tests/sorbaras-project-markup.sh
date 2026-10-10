#!/bin/sh
set -eu

python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET


DETAIL_PAGE = "work/sorbaras.html"
PROJECT_LINK = "work/sorbaras.html"
SOURCE_PAGE = "https://sorbarasnewyork.com/pages/source"
COSMOS_SOURCE = "https://www.cosmos.so/sorbaras/source"
PRESS_LINKS = {
    "https://www.vogue.com/article/what-5-nyc-vintage-stores-name-the-seasons-top-trends",
    "https://www.nytimes.com/2024/10/17/style/sorbara-vintage-shoppping-williamsburg.html",
    "https://www.cosmos.so/sequence/kathleen-sorbara",
}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.images = []
        self.headings = []
        self._heading = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "a":
            self.links.append((attrs.get("href", ""), ""))
        if tag == "img":
            self.images.append((attrs.get("src", ""), attrs.get("alt", "")))
        if tag in {"h1", "h2"}:
            self._heading = [tag, ""]

    def handle_data(self, data):
        if self.links:
            href, text = self.links[-1]
            self.links[-1] = (href, text + data)
        if self._heading is not None:
            self._heading[1] += data

    def handle_endtag(self, tag):
        if self._heading is not None and self._heading[0] == tag:
            self.headings.append(tuple(self._heading))
            self._heading = None


def parse(path):
    parser = PageParser()
    parser.feed(Path(path).read_text())
    return parser


for index_path in ("index.html", "work.html"):
    index = parse(index_path)
    hrefs = [href for href, _ in index.links]
    assert PROJECT_LINK in hrefs, f"{index_path} must link to the Sorbara's project"
    assert hrefs.index("work/cosmos.html") < hrefs.index(PROJECT_LINK), (
        f"{index_path} must place Sorbara's after Cosmos"
    )

detail_path = Path(DETAIL_PAGE)
assert detail_path.exists(), "Sorbara's detail page is missing"

detail = parse(detail_path)
hrefs = {href for href, _ in detail.links}
assert ("h1", "Sorbara’s") in detail.headings, "Detail page needs a Sorbara’s heading"
assert {SOURCE_PAGE, COSMOS_SOURCE}.issubset(hrefs), (
    "Detail page must link to both live Source pages"
)
assert PRESS_LINKS.issubset(hrefs), "Detail page must link to Vogue, NYT, and Sequence"

local_images = [(src, alt) for src, alt in detail.images if src.startswith("../media/")]
assert local_images, "Detail page needs a local preview of the live Source page"
for src, alt in local_images:
    assert alt.strip(), f"{src} needs useful alternative text"
    assert (detail_path.parent / src).resolve().exists(), f"Missing image asset: {src}"

sitemap = ET.parse("sitemap.xml")
namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
sitemap_urls = {node.text for node in sitemap.findall(".//sm:loc", namespace)}
assert "https://griffinmiller.com/work/sorbaras" in sitemap_urls, (
    "Sorbara's detail page must be discoverable in the sitemap"
)
PY
