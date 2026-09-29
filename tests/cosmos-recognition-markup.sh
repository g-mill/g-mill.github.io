#!/bin/sh
set -eu

python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path


APPLE_STORY = "https://apps.apple.com/au/story/id1854932676"
APPLE_IMAGE = "../media/cosmos/apple-app-of-the-day.png"
DETAIL_PAGE = "cosmos-app-of-the-day.html"


class OverviewParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.event = 0
        self.band_position = None
        self.visit_position = None
        self.demos_position = None
        self.features_position = None
        self.recognition_position = None
        self.band_div_depth = 0
        self.features_div_depth = 0
        self.recognition_div_depth = 0
        self.band_links = []
        self.images = []
        self.vogue_in_features = False
        self.apple_quote_in_recognition = False

    def handle_starttag(self, tag, attrs):
        self.event += 1
        attrs = dict(attrs)
        classes = attrs.get("class", "").split()

        if tag == "div" and "cosmos-recognition-band" in classes:
            self.band_position = self.event
            self.band_div_depth = 1
        elif self.band_div_depth and tag == "div":
            self.band_div_depth += 1

        if tag == "div" and "cosmos-coverage-column" in classes:
            self.features_position = self.event
            self.features_div_depth = 1
        elif self.features_div_depth and tag == "div":
            self.features_div_depth += 1

        if tag == "div" and "cosmos-recognition-column" in classes:
            self.recognition_position = self.event
            self.recognition_div_depth = 1
        elif self.recognition_div_depth and tag == "div":
            self.recognition_div_depth += 1

        if tag == "aside" and ({"vogue-note", "feature-quote"} & set(classes)) and self.features_div_depth:
            self.vogue_in_features = True
        if tag == "aside" and "feature-quote" in classes and self.recognition_div_depth:
            self.apple_quote_in_recognition = True

        if tag == "div" and "cosmos-videos" in classes:
            self.demos_position = self.event
        if tag == "p" and "cosmos-visit" in classes:
            self.visit_position = self.event
        if tag == "a" and self.band_div_depth:
            self.band_links.append(attrs.get("href", ""))
        if tag == "img":
            self.images.append(attrs.get("src", ""))

    def handle_endtag(self, tag):
        if tag == "div" and self.band_div_depth:
            self.band_div_depth -= 1
        if tag == "div" and self.features_div_depth:
            self.features_div_depth -= 1
        if tag == "div" and self.recognition_div_depth:
            self.recognition_div_depth -= 1


class DetailParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.images = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "a":
            self.links.append(attrs.get("href", ""))
        if tag == "img":
            self.images.append((attrs.get("src", ""), attrs.get("alt", "")))


overview = OverviewParser()
overview.feed(Path("work/cosmos.html").read_text())

assert overview.band_position is not None, "Cosmos page needs a recognition band"
assert overview.demos_position is not None, "Cosmos page needs its demos"
assert overview.band_position < overview.demos_position, (
    "Recognition must introduce the work before the demos"
)
assert overview.visit_position is not None, (
    "Visit Cosmos needs its own line immediately before the work demos"
)
assert overview.band_position < overview.visit_position < overview.demos_position, (
    "Visit Cosmos must sit between recognition and the work demos"
)
assert overview.features_position is not None and overview.recognition_position is not None, (
    "Cosmos page needs both Features and Recognition sections"
)
assert overview.features_position < overview.recognition_position, (
    "Features must appear before Recognition"
)
assert overview.vogue_in_features, "Vogue Business must live inside Features"
assert overview.apple_quote_in_recognition, (
    "Apple App of the Day must use the same quote treatment as Vogue Business"
)
assert DETAIL_PAGE in overview.band_links, (
    "Apple App of the Day must link to its local image page from recognition"
)
assert APPLE_IMAGE not in overview.images, (
    "Apple screenshot belongs on its detail page, not inline with demos"
)

detail_path = Path("work") / DETAIL_PAGE
assert detail_path.exists(), "Apple App of the Day detail page is missing"

detail = DetailParser()
detail.feed(detail_path.read_text())

assert any(src == APPLE_IMAGE and alt.strip() for src, alt in detail.images), (
    "Apple detail page must show the screenshot with useful alternative text"
)
assert APPLE_STORY in detail.links, "Apple detail page must link to the original story"
assert "cosmos.html" in detail.links, "Apple detail page must link back to Cosmos"
PY
