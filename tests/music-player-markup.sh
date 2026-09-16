#!/bin/sh
set -eu

files="index.html music/buttonwood.html music/stravinsky.html music/bach.html music/gordon.html"

if rg -q '▶' $files; then
  echo "Music players still contain an emoji-capable Unicode play glyph."
  exit 1
fi

count=$(rg -o 'class="play-glyph"' $files | wc -l | tr -d ' ')
if [ "$count" -ne 8 ]; then
  echo "Expected 8 CSS play glyphs, found $count."
  exit 1
fi

rg -q '^\.play-glyph \{' styles.css
