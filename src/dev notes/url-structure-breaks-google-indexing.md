---
description: I discovered a Google indexing issue caused by inconsistent URL structures. The fix wasn't SEO tricks—it was better information architecture.
cover: https://cdn.ekopedia.id/images/dev note/url-structure-breaks-google-indexing.webp
icon: code
date: 2026-06-21
star: true
category: Dev Note
tags: [Architecture, SEO]
---

# When a URL Structure Breaks Google Indexing

While reviewing the Alexandria website, I noticed something strange.

Google had indexed some pages, but not others. The sitemap looked fine. Internal links were working. The pages were publicly accessible.

At first, I assumed it was a content quality issue.

It wasn't.

After digging deeper, I realized the problem came from how the project was structured.

My original route structure mixed page-style URLs and folder-style URLs inconsistently. Some content lived directly as files, while others behaved like directories with nested routes. Technically everything worked, but Google's crawler appeared to have difficulty understanding the relationship between those pages.

The fix was surprisingly simple:

* Restructure the project around a cleaner folder hierarchy
* Use folder-based routes for major content sections
* Keep blog-like content (Dev Notes and Diary entries) using the framework's default route generation
* Ensure URLs follow a predictable pattern

After reorganizing the content structure, indexing behavior became much more consistent.

## Lesson Learned

Just because a route works in the browser doesn't mean it is ideal for search engines.

When building a content-heavy website, URL consistency matters. A clear and predictable structure helps both humans and search engines understand how pages relate to each other.

Before blaming SEO, check whether the site's architecture is sending mixed signals.