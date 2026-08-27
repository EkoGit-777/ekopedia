---
description: Understanding the difference between PHP's bitwise & and logical &&, with a real-world example using permission flags in a legacy project.
cover: https://cdn.ekopedia.id/images/dev note/bitwise-and-vs-logical-and-in-php.webp
icon: code
date: 2026-08-27
star: true
category:
- Dev Note
tag: [Web Development, PHP]
---

# `&` vs `&&`: Bitwise AND vs Logical AND in PHP

While working on a legacy PHP project, another developer found this line of code:

```php
return ((int)$this->permission & (int)$permissions[$tocheck] ? true : false);
```

At first glance, the single `&` looked suspicious.

Most of us are more familiar with `&&` when dealing with conditions in PHP, so it was natural to wonder:

> "Is using a single `&` here actually valid PHP?"

It is.

But `&` and `&&` are doing two completely different things.

## `&&` — Logical AND

The double ampersand `&&` is the **logical AND operator**.

It is used when we want to check whether two conditions are both true.

For example:

```php
if ($isLoggedIn && $hasPermission) {
    // Allow access
}
```

The condition is true only when both `$isLoggedIn` and `$hasPermission` evaluate to `true`.

In other words:

```text
true  && true  = true
true  && false = false
false && true  = false
false && false = false
```

This is what we normally use when combining conditions.

## `&` — Bitwise AND

The single ampersand `&` is the **bitwise AND operator**.

Instead of treating its operands as boolean conditions, PHP compares their individual bits.

For example:

```text
6  = 110
3  = 011
     ---
&    010
```

The result is `2`.

Each bit is compared with the corresponding bit from the other number:

```text
1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
```

This might seem unnecessary for ordinary conditions, but it becomes very useful when a number represents multiple flags.

## Why Permissions Often Use `&`

This is exactly what was happening in the legacy code.

Imagine we define permissions using individual bits:

```php
$READ    = 1; // 001
$WRITE   = 2; // 010
$DELETE  = 4; // 100
```

A user can have multiple permissions at the same time by combining them:

```php
$userPermission = $READ | $WRITE;
```

The result is:

```text
001
010
---
011
```

So `$userPermission` is `3`.

Now, if we want to check whether the user has the `WRITE` permission:

```php
$userPermission & $WRITE
```

we get:

```text
011  // READ + WRITE
010  // WRITE
---
010
```

The result is `2`, which is non-zero, so the user has the permission.

If we check `DELETE` instead:

```text
011  // READ + WRITE
100  // DELETE
---
000
```

The result is `0`, meaning the user does not have that permission.

This is called a **bitmask** or **bit flags** approach.

## Back to the Legacy Code

Now the original code makes more sense:

```php
return ((int)$this->permission & (int)$permissions[$tocheck] ? true : false);
```

Suppose:

```php
$this->permission = 3;
$permissions[$tocheck] = 2;
```

The operation becomes:

```text
3 & 2
```

or:

```text
011
010
---
010
```

The result is `2`.

Since `2` is a truthy value in PHP, the ternary expression returns:

```php
true
```

But if:

```php
$this->permission = 3;
$permissions[$tocheck] = 4;
```

then:

```text
011
100
---
000
```

The result is `0`, which is falsy, so the expression returns:

```php
false
```

So the code is effectively asking:

> "Does the permission bit I'm checking exist inside the user's permission mask?"

## Why the Cast to `int`?

The original code also explicitly casts both values to integers:

```php
(int)$this->permission
(int)$permissions[$tocheck]
```

That's important because bitwise operations are intended to work with integer values.

The cast makes the developer's intention explicit and ensures that the values are treated as integers before performing the bitwise operation.

So this:

```php
(int)$this->permission & (int)$permissions[$tocheck]
```

is fundamentally different from:

```php
(int)$this->permission && (int)$permissions[$tocheck]
```

The first checks **bits**.

The second checks whether **both values are truthy**.

## A Simple Comparison

It's useful to remember the difference like this:

| Operator | Name        | Purpose                     |
| -------- | ----------- | --------------------------- |
| `&&`     | Logical AND | Combines boolean conditions |
| `&`      | Bitwise AND | Compares individual bits    |

For example:

```php
$a = 3;
$b = 2;
```

With logical AND:

```php
$a && $b
```

both values are non-zero, so the result is:

```php
true
```

With bitwise AND:

```php
$a & $b
```

PHP performs the operation on their binary representation:

```text
011
010
---
010
```

The result is:

```php
2
```

They may both be interpreted as "true" in some contexts, but they got there through completely different operations.

## The Lesson

The first time I saw the single `&` in the permission check, I thought it might be an unusual or incorrect syntax.

It wasn't.

The important lesson is that **`&` and `&&` are not interchangeable**.

`&&` is for logical conditions:

> "Are both of these conditions true?"

`&` is for bitwise operations:

> "Which bits are present in both values?"

When working with permission systems, feature flags, status flags, or other values represented as bitmasks, `&` is often exactly the operator we need.

So when you encounter a single `&` in PHP code, don't immediately assume it's a typo.

It might be doing something completely different from `&&`—and in a permission system, it may be the most important part of the logic.