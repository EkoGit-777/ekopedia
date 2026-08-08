---
description: Discover why CSS vw and % can produce the same width but behave differently in layout and horizontal scrolling.
cover: https://cdn.ekopedia.id/images/dev note/different-behaviour-between-vw-and-percent.webp
icon: code
date: 2026-08-08
star: true
category:
- Dev Note
tag: [Web Development, CSS]
---

# When `vw` and `%` Aren't Actually the Same

While working on the lightbox for my website, I ran into an interesting CSS behavior involving `vw` and `%`.

At first, I thought these two units could be used interchangeably as long as they resulted in the same width.

It turns out, that's not always true.

## The Problem

I was working on the zoomed state of an image inside a lightbox.

The image needed to become larger than its normal size, while still allowing the user to scroll horizontally when the image exceeded the available area.

During the implementation, I experimented with both viewport units and percentages.

For example, I could use something like:

```css
.lightbox-content img.zoomed {
    width: 150vw;
}
```

or:

```css
.lightbox-content img.zoomed {
    width: 150%;
}
```

Depending on the size of the containing element and the viewport, I could choose values that resulted in what appeared to be the same image width.

That made me wonder:

> If both values produce the same width, shouldn't they behave exactly the same?

The answer is no.

## `vw` and `%` Have Different Reference Points

The important difference is what each unit is relative to.

`vw` means **viewport width**.

So:

```css
width: 100vw;
```

means the element is sized relative to the browser's viewport.

Meanwhile, `%` is generally calculated relative to the **containing block**.

So:

```css
width: 100%;
```

means the element takes 100% of the width available from its containing block.

These values can happen to produce the same number of pixels, but they are not based on the same reference.

That distinction becomes important when the element is inside a layout with its own width and overflow behavior.

## The Interesting Part: Scrolling

This became much more obvious when I tested horizontal scrolling.

With the percentage-based width, I noticed that the horizontal scrollbar stopped exactly at the right edge of the image.

With the viewport-based width, the image could appear to have the same visual width, but the scrollable area still contained some additional space beyond the image.

At first, this seemed strange.

If the image is the same width, why isn't the scrollable area also the same?

The important thing to remember is that **the size of an element and the size of its scrollable area are related, but they are not simply the same measurement**.

The browser calculates the layout based on the entire box geometry and its containing elements. Overflow is then determined from that resulting layout.

Changing the unit can therefore change the relationship between the image and its containing block, even when the resulting image width looks identical.

## A Simple Way to Think About It

Imagine the viewport is 1000px wide.

If an element's containing block is also 1000px wide, then these two values can both result in a 1000px-wide image:

```css
width: 100vw;
```

and:

```css
width: 100%;
```

In that particular situation, the resulting width is the same.

But conceptually, they are still saying two different things.

`100vw` says:

> "Make me as wide as the viewport."

`100%` says:

> "Make me as wide as my containing block."

If the containing block changes, those two declarations no longer necessarily produce the same result.

This is especially important in components such as lightboxes, modals, galleries, carousels, and other layouts where the viewport and the component's own dimensions don't necessarily match.

## Why This Matters for a Lightbox

A lightbox is a good example because it usually has several layers involved:

```text
Viewport
└── Lightbox
    └── Scroll container
        └── Image
```

The image isn't living directly inside the viewport.

Its percentage width is influenced by the element that establishes its containing block, while `vw` refers directly to the viewport.

Once overflow and scrolling are introduced, those different relationships can become visible.

This is why simply looking at the final rendered width isn't always enough when debugging CSS.

Two elements can look identical on screen while participating in the layout differently.

## The Lesson

The biggest lesson I took from this is:

> **Equivalent values don't necessarily mean equivalent layout behavior.**

When choosing between `%` and `vw`, it's better to think about **what the value should be relative to**, rather than trying to find two units that happen to produce the same pixel value.

Use `%` when the size should follow the containing element.

Use `vw` when the size should follow the viewport.

And when debugging an overflow or scrolling problem, don't only compare the visual size of the element. Check the relationship between the element, its containing block, and the scroll container as well.

This was one of those CSS problems where the initial assumption was:

> "They're the same width, so they should behave the same."

But CSS reminded me once again that **layout context matters just as much as the final number.**