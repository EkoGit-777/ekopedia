---
description: A small mismatch like SIGNED vs UNSIGNED can break foreign keys in legacy projects. Always verify the basics before assuming complex issues.
cover: https://cdn.ekopedia.id/images/dev note/basic-mistake-reminder.webp
icon: code
date: 2026-04-13
star: true
category: Dev Note
tags: [Database, Migration]
---

# The Subtle Mistake That Broke My Foreign Key in a Legacy Project

I was updating a foreign key from `user` to `staff`.

Everything looked correct:
- the column name made sense  
- the relationship was valid  
- the query syntax was fine  

So I expected it to work without issues.

---

## The Confusing Part
But instead, I got this error:
> errno: 150 "Foreign key constraint is incorrectly formed"
Which didn’t help much.

---

## What I Thought at First
Since this was a legacy project, I assumed something complex was going on:
- inconsistent schema  
- hidden constraints  
- or some edge-case behavior  

So I started checking deeper things first.

---

## The Realization
After checking more carefully, the issue turned out to be very simple:

> The column `created_by_user_id` was **SIGNED**, while `staff.id` was **UNSIGNED**.

That small mismatch was enough to break the foreign key.

---

## The Lesson
**Foreign key columns must match exactly — including SIGNED vs UNSIGNED.**

And more importantly:

> Don’t assume consistency in legacy systems.

Even if:
- naming looks correct  
- structure seems clean  
- the system has been running for years  

---

## Final Thought
This was a reminder:

> The more experienced you are, the easier it is to overlook basic things.

Not because you don’t know —  
but because you assume they’re already correct.

Before going deep into debugging:

> Check the basics first.