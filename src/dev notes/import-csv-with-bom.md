---
description: I exported data from my own app and tried to re-import it — and it failed. This article explains how a hidden UTF-8 BOM in CSV files caused the issue and how to fix it properly.
cover: /assets/images/dev note/import-csv.webp
icon: code
date: 2026-02-03
star: true
category: Dev Note
tags: [Web Development, PHP]
---

# When Your Own CSV Export Breaks Your Import (Hello, BOM :wave:)

I recently hit a weird bug while working on a CSV import feature.

The flow was simple:

1. Export data from the app  
2. Re-import the same file  
3. Expect everything to work  

Except… it didn’t.

The importer refused the file with a message saying the **header column didn’t match the expected column name**.  
Which made zero sense — the file came from the same system. How could it be wrong?

---

## First suspicion: broken data

My first thought was:

> “Maybe the export feature messed up the data?”

So I checked:

- Column count :white_check_mark:
- Delimiter :white_check_mark:
- Header text looks correct :white_check_mark:

Everything *looked* fine.

But the importer still insisted the first column name didn’t match.

---

## The invisible culprit: UTF-8 BOM

The real issue turned out to be something you **can’t see** in most editors:  
**UTF-8 BOM (Byte Order Mark)**.

Some tools (Excel is a usual suspect) add a hidden BOM character at the very beginning of a UTF-8 file. When that happens, the first header column is no longer:
name
but actually:
[BOM]name

Visually identical. Programmatically different.

So when the importer compared:

```php
$firstHeader === 'name'
```
It failed — because there was a hidden character sitting in front of it.

---

## Why only the first column breaks

This is an important detail:
- BOM is added once
- It always appears at the very start of the file
- That means only the first header column is affected

Every other column is perfectly fine.

That explains why:
- Header count looked correct
- Data rows looked correct
- Only the first column check failed

---

## The fix: normalize input, don’t trust it

Instead of manually splitting the line, the safer approach is to:
- Use CSV-aware functions
- Clean the first header
- Normalize whitespace and quotes

Example (simplified):
```php
$handle = fopen($file, 'r');
$headers = fgetcsv($handle);

// remove UTF-8 BOM from first column
$headers[0] = preg_replace('/^\xEF\xBB\xBF/', '', $headers[0]);

// normalize header
$headers[0] = trim($headers[0]);
```
Now the importer compares clean data, not raw input.

---

## A small lesson I relearned

This bug reminded me of something easy to forget:
> If data comes from outside your code — even from your own export — never assume it’s clean.

Files can pass through:
- Excel
- Google Sheets
- Different OS encodings
- Different editors

All of them can quietly change things.

---

## Takeaway

If you’re building a CSV importer:
- Always normalize headers
- Always expect invisible characters
- Always distrust “it looks correct”

And yes — sometimes your own export can still break your import :sweat_smile: