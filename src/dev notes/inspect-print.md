---
description: Struggling to debug print layouts? Use Chrome DevTools print emulation to inspect elements and see exactly what happens in print mode.
cover: https://cdn.ekopedia.id/images/dev note/inspect-print.webp
icon: code
date: 2026-03-28
star: true
category: Dev Note
tags: [CSS]
---

# How I Discovered You Can Inspect Print Layout in Chrome

I was trying to fix a page layout for printing.

Everything looked fine in normal view.  
But once I opened print preview, the layout was completely broken.

The problem?  
I couldn’t inspect anything in print preview.

---

## The Confusing Part
I tried a few things:
- adding `width: 100%`
- adjusting `max-width`
- checking container sizes

But nothing changed in the print result.

Since I couldn’t inspect it, I was basically guessing.

---

## What I Thought at First
I assumed:
maybe some global CSS was overriding styles during print.

But without visibility, it all turned into trial and error.

---

## The Realization
Turns out, Chrome has a feature to **emulate print media** in DevTools.

Here is how you do it:
- Right click on empty area in browser interface, then click inspect. (or press F12)
- Once the inspect elements shows up, press CTRL+SHIFT+P. There will be small input appear on top of it.
- Type "render", then click "Show Rendering". Another small window appear.
- Scroll down on Rendering tab until you find "Emulate CSS media type"
- Click the dropdown, select "print"

When enabled, the page renders as if it's being printed —  
and more importantly, **you can inspect it like normal**.

This means I could:
- see which styles are applied in print mode
- identify the problematic elements
- debug with confidence instead of guessing

---

## The Lesson
**Use "Emulate CSS Media: print" in Chrome DevTools to debug print layouts.**

Because:
> You can’t inspect print preview, but you can inspect the emulation.

---

## Final Thought
Sometimes the problem isn’t the CSS —  
it’s how you’re trying to see it.

Once I could inspect it, everything became much easier.