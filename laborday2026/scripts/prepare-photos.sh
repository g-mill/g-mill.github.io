#!/usr/bin/env bash
#
# Prepare a year's photos for the gallery.
#
#   ./scripts/prepare-photos.sh 2025
#
# Reads laborday2026/photos/<year>/raw/ (drop your originals here),
# resizes + compresses each to 1800px-wide JPGs in laborday2026/photos/<year>/,
# and prints a ready-to-paste JS array snippet.

set -euo pipefail

YEAR="${1:-}"
if [[ -z "$YEAR" ]]; then
  echo "usage: $0 <year>"
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RAW_DIR="$ROOT/photos/$YEAR/raw"
OUT_DIR="$ROOT/photos/$YEAR"
THUMB_DIR="$OUT_DIR/thumb"

if [[ ! -d "$RAW_DIR" ]]; then
  echo "No raw/ folder for $YEAR. Drop originals in:"
  echo "  $RAW_DIR"
  mkdir -p "$RAW_DIR"
  exit 1
fi

mkdir -p "$THUMB_DIR"

shopt -s nullglob nocaseglob
RAW_FILES=( "$RAW_DIR"/*.{jpg,jpeg,png,heic} )
shopt -u nocaseglob
if [[ ${#RAW_FILES[@]} -eq 0 ]]; then
  echo "No images found in $RAW_DIR"
  exit 1
fi

echo "Processing ${#RAW_FILES[@]} images → $OUT_DIR"

i=0
for src in "${RAW_FILES[@]}"; do
  i=$((i + 1))
  num=$(printf "%03d" "$i")
  out="$OUT_DIR/${num}.jpg"

  thumb="$THUMB_DIR/${num}.jpg"

  # Full-res: longest edge 1800px, JPEG quality ~78 (used in lightbox)
  sips \
    --resampleHeightWidthMax 1800 \
    --setProperty format jpeg \
    --setProperty formatOptions 78 \
    "$src" \
    --out "$out" \
    >/dev/null

  # Thumb: longest edge 800px, JPEG quality ~72 (used in gallery grid)
  sips \
    --resampleHeightWidthMax 800 \
    --setProperty format jpeg \
    --setProperty formatOptions 72 \
    "$out" \
    --out "$thumb" \
    >/dev/null

  # Strip metadata (smaller file, no GPS leak)
  sips --deleteProperty exif "$out" >/dev/null 2>&1 || true
  sips --deleteProperty exif "$thumb" >/dev/null 2>&1 || true

  size_kb=$(($(stat -f%z "$out") / 1024))
  thumb_kb=$(($(stat -f%z "$thumb") / 1024))
  printf "  %s → %s (%dKB, thumb %dKB)\n" "$(basename "$src")" "$(basename "$out")" "$size_kb" "$thumb_kb"
done

echo
echo "Paste this into laborday2026/index.html (replace the $YEAR photos: [] array):"
echo
echo "      {"
echo "        year: \"$YEAR\","
echo "        photos: ["
for ((j = 1; j <= i; j++)); do
  num=$(printf "%03d" "$j")
  if [[ $j -lt $i ]]; then
    echo "          \"photos/$YEAR/${num}.jpg\","
  else
    echo "          \"photos/$YEAR/${num}.jpg\""
  fi
done
echo "        ]"
echo "      },"
