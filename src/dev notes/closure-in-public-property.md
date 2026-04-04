---
description: Getting an "invalid operation" error when using closures in public properties? The issue isn’t PHP—it’s how the framework handles serialization.
cover: https://cdn.ekopedia.id/images/dev note/closure-in-public-property.webp
icon: code
date: 2026-03-24
star: true
category: Dev Note
tags: [PHP, Laravel, Livewire]
---

# The Moment I Learned Closures Don’t Belong in Public Properties

I was defining table columns as a public property:

```php
public $columns = [
    ['key' => 'name', 'label' => 'Name'],
    ['key' => 'email', 'label' => 'Email'],
    ['key' => 'roles', 'label' => fn ($row) => $row->roles],
];
```
It felt clean. Instead of scattering logic elsewhere, I could just drop a small closure directly into the config.

---

## The Confusing Part

Then suddenly… it broke.

The error?

> "Invalid operation"

No clear explanation.
No helpful stack trace.
Just… invalid.

---

## What I Thought at First

I didn’t question it much initially.

Closures in arrays? Valid.
Public properties? Valid.

So combining them should be fine… right?

---

## The Realization

After digging a bit deeper, I realized the problem wasn’t PHP.

It was the framework.

Public properties in reactive systems aren’t just “variables”.
They are:
- serialized
- sent over the network
- rebuilt on every request

And closures?

They can’t be serialized.

So the moment the framework tried to process that property, everything fell apart — resulting in that vague “invalid operation”.

---

## The Lesson

**If a property is meant to be serialized, never put a closure inside it.**

What felt like a clean shortcut was actually breaking the system behind the scenes.

The fix was simple
Move the column definition into a method or computed property.
```php
#[Computed]
public function columns()
{
    return [
        ['key' => 'name', 'label' => 'Name'],
        ['key' => 'email', 'label' => 'Email'],
        ['key' => 'roles', 'label' => fn ($row) => $row->roles],
    ];
}
```

---

## Final Thought

This was one of those moments where I had to remind myself:

> Not everything that works in PHP works inside a framework.

Sometimes the limitation isn’t the language —
it’s the system around it.