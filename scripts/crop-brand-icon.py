#!/usr/bin/env python3
"""Crop great-lane-icon.png to a tight transparent circular mark."""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/great-lane-icon.png"
OUT = ROOT / "public/images/great-lane-icon-cropped.png"
PADDING_RATIO = 0.06


def is_background(r: int, g: int, b: int, a: int) -> bool:
    if a < 10:
        return True
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    sat = max(r, g, b) - min(r, g, b)
    return lum > 200 and sat < 40


def flood_fill_background(img: Image.Image) -> Image.Image:
    w, h = img.size
    px = img.load()
    bg = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            if is_background(*px[x, y]):
                bg[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if bg[y][x]:
                continue
            if is_background(*px[x, y]):
                bg[y][x] = True
                q.append((x, y))

    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and not bg[ny][nx]:
                if is_background(*px[nx, ny]):
                    bg[ny][nx] = True
                    q.append((nx, ny))

    result = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    rp = result.load()
    for y in range(h):
        for x in range(w):
            if not bg[y][x]:
                rp[x, y] = px[x, y]
    return result


def crop_with_padding(cutout: Image.Image) -> Image.Image:
    bbox = cutout.getbbox()
    if not bbox:
        raise RuntimeError("No logo content found after background removal")

    x0, y0, x1, y1 = bbox
    side = max(x1 - x0 + 1, y1 - y0 + 1)
    pad = int(round(side * PADDING_RATIO))
    final_side = side + 2 * pad

    crop = cutout.crop(bbox)
    cw, ch = crop.size
    inner = max(cw, ch)
    inner_img = Image.new("RGBA", (inner, inner), (0, 0, 0, 0))
    inner_img.paste(crop, ((inner - cw) // 2, (inner - ch) // 2), crop)

    square = Image.new("RGBA", (final_side, final_side), (0, 0, 0, 0))
    square.paste(inner_img, (pad, pad), inner_img)
    return square


def write_app_icons(square: Image.Image) -> None:
    for name in ("icon.png", "apple-icon.png"):
        square.resize((512, 512), Image.Resampling.LANCZOS).save(
            ROOT / "app" / name,
            optimize=True,
        )
    square.resize((48, 48), Image.Resampling.LANCZOS).save(
        ROOT / "app/favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )


def main() -> None:
    if not SRC.exists():
        raise FileNotFoundError(SRC)

    source = Image.open(SRC).convert("RGBA")
    cutout = flood_fill_background(source)
    square = crop_with_padding(cutout)
    square.save(OUT, optimize=True)
    write_app_icons(square)
    print(f"Wrote {OUT} ({square.size[0]}x{square.size[1]})")


if __name__ == "__main__":
    main()
