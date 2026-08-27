---
description: Lessons from debugging legacy code, understanding past changes, tracing unexpected behavior, and why Git history can be as important as the code itself.
cover: https://cdn.ekopedia.id/images/dev note/working-on-legacy-code.webp
icon: code
date: 2026-08-27
star: true
category:
- Dev Note
tag: [Web Development]
---

# Working on Legacy Code: The Code Has a History

Working on a legacy project can sometimes feel like archaeology.

You find a piece of code that looks strange.

You wonder why it was written that way.

You try to understand what it does.

And sometimes, after hours of investigation, you discover something unexpected:

**You were the one who wrote it.**

That happened to me recently.

## The Problem

I was working on a ticket related to student names.

The requirement was simple:

> Student names containing special characters, such as accented characters, should be saved correctly.

At first, it looked like a problem somewhere in the existing data-cleaning or validation process.

So I started tracing the code.

The deeper I went, the more confusing it became. There was an existing cleanup process involved in student updates, but it wasn't behaving the way I expected.

Eventually, I found something that explained the behavior.

The cleanup process had been turned off.

That was strange.

Why would anyone intentionally disable it?

Then I looked at the history.

And that's when I realized:

**I was the one who turned it off.**

Not recently, either.

It was a change I had made around eight months earlier.

## The Embarrassing Part

I'll admit it.

I was embarrassed.

I had spent time investigating a behavior in the legacy system, only to discover that the behavior was caused by a change I had made myself months ago.

At first, my reaction was basically:

> "Why did I even do that?"

But after thinking about it again, I realized that this was actually a good lesson about working with legacy code.

The problem wasn't simply that I had made a mistake.

The bigger problem was that **eight months had passed**.

I no longer had the context that I had when I made that change.

The code remained.

The reason behind the change didn't.

## Code Doesn't Tell the Whole Story

One of the difficult things about legacy code is that we usually see the final state, not the journey that created it.

Imagine finding something like this:

```php id="h2j7wq"
$cleanup = false;
```

Without any context, several questions immediately appear:

* Why is cleanup disabled?
* Is this intentional?
* Is it a workaround?
* Is it required by another part of the system?
* Is it a bug?
* Can we safely turn it back on?

Looking only at the current code doesn't necessarily give us the answer.

But the Git history might.

A previous commit may tell us:

```text id="9e6s3r"
Fix student name handling
Disable cleanup during student update
```

Suddenly, the strange line makes more sense.

There was a reason.

Maybe that reason is still valid.

Maybe it isn't.

But at least we now have the context needed to investigate it properly.

## Legacy Code Is Full of Context

This is why I try to be more careful when changing old code.

A strange piece of code isn't automatically bad code.

It might be:

* a workaround for an old bug
* a compatibility fix
* a temporary solution that became permanent
* a requirement that is no longer obvious
* a workaround for another system
* or simply a decision made under circumstances that no longer exist

The important thing is that **we don't know which one it is just by looking at the code**.

This is especially true when working on systems that have been developed for years.

The code has accumulated decisions made by different developers, different teams, and sometimes even by ourselves.

## Git History Is Part of the Documentation

One of the most useful tools when working with legacy code is Git history.

When I encounter something that doesn't make sense, I shouldn't immediately assume:

> "This code is wrong."

A better question is:

> "Why was this code written this way?"

Git can help answer that question.

Looking at the commit that introduced a piece of code can reveal:

* what problem the developer was solving
* what the original requirement was
* what other changes were made at the same time
* whether the code was intended as a temporary workaround
* and sometimes even the discussion behind the decision

Commands such as:

```bash
git log
git log -p
git blame
```

can be surprisingly useful when investigating old behavior.

`git blame` is particularly interesting because it can tell us **which commit introduced a specific line**.

But the goal isn't to find someone to blame.

Ironically, my own experience is a good example of that.

Sometimes `git blame` tells you:

> "Congratulations. It was you."

## Don't Change Strange Code Too Quickly

One of the easiest mistakes to make when working on legacy code is changing something simply because it looks wrong.

For example:

```php id="74n6sr"
if ($something) {
    // strange-looking logic
}
```

You might think:

> "This could be simplified."

So you refactor it.

The code looks cleaner.

The tests still pass.

But later, you discover that the strange logic existed because another part of the system depended on it.

This doesn't mean we should never refactor legacy code.

It means we should understand the behavior **before** changing it.

A strange implementation is not necessarily an accidental implementation.

## Reproduce Before Fixing

Another lesson I took from this experience is the importance of reproducing the actual problem.

When investigating an old system, it's tempting to jump directly into the code and start making changes.

Instead, I try to establish three things first:

### 1. What is the expected behavior?

For this ticket, the expected behavior was clear:

> A student name containing special characters should be saved correctly.

### 2. What is the current behavior?

For example:

```text
Input:
José

Expected:
José

Actual:
Jose
```

The exact behavior gives us something concrete to investigate.

### 3. Where does the behavior change?

Then we can trace the data through the system:

```text
Input
  ↓
Validation
  ↓
Cleanup
  ↓
Processing
  ↓
Database
```

Instead of guessing where the problem is, we can identify exactly where the data changes.

This makes debugging much more systematic.

## And Sometimes the Bug Is Yours

Perhaps the most important lesson from my experience is this:

> **Don't assume the legacy code was written by someone else.**

Even if a project is old.

Even if you haven't touched that particular part of the code for years.

Even if the code looks completely unfamiliar.

You might have written it.

Or you might have changed it.

And you might have forgotten why.

That's not necessarily a bad thing. It's a natural consequence of working on software for a long time.

Eight months ago, I knew why I made that change.

Today, I didn't.

The code stayed the same.

**My context didn't.**

## The Lesson

Working on legacy code isn't just about understanding what the code does.

It's about understanding **why the code became what it is today**.

When something looks strange, don't immediately rewrite it.

Investigate it.

Reproduce the behavior.

Trace the data.

Check the tests.

Look at the Git history.

Find the commit that introduced the behavior.

And most importantly, try to understand the problem that the original developer was solving.

Because sometimes the mysterious piece of legacy code isn't somebody else's mistake.

Sometimes you open `git blame` and discover:

> **It was me.**

And honestly, that's probably one of the most useful reminders I've had while working with legacy code.