---
description: Learn about WordPress reserved query variables and how to safely pass data via URLs without breaking your site.
cover: /assets/images/dev note/wordpress-404.webp
icon: code
date: 2026-01-30
star: true
category: Dev Note
tags: [WordPress, Web Development, PHP]
---

# Why Your WordPress URL Parameters are Causing 404 Errors

You’ve built a perfect redirection or a custom form. You test the URL: 
`https://your-site.com/contact?name=eko` 

...and instead of your contact page, you see a **404 Not Found** error. 

If the page exists without the parameters but "disappears" when you add them, you’ve likely bumped into one of WordPress's oldest quirks: **Reserved Query Variables.**

---

## The Root Cause: Reserved Terms

WordPress uses a system called the `WP_Query` to decide what content to show. When it sees a parameter like `name` or `author` in the URL, it assumes you are trying to query the database for a specific post or author.

If you use `?name=eko`, WordPress stops looking for your "Contact" page and starts looking for a **post** with the slug "eko." When it can't find that post, it assumes the link is broken and serves a 404.

## Common "Forbidden" Parameters

While there are many, these are the most common terms that trigger errors:

| Parameter | What WordPress thinks you want |
| :--- | :--- |
| `name` | A specific post slug |
| `p` | A specific post ID |
| `page` | A pagination number |
| `s` | A search query |
| `author` | An author archive page |
| `cat` | A category ID |
| `year` / `monthnum` | A date-based archive |

## How to Fix It

### Option 1: The Prefix Method (Recommended)
The simplest and most robust way to fix this is to **prefix** your keys. By adding a unique identifier to your parameters, you ensure WordPress won't try to "claim" them.

Instead of:
`?name=eko&email=eko@gmail.com`

Use:
`?acc_name=eko&acc_email=eko@gmail.com`

This is the cleanest solution because it requires zero changes to your WordPress configuration.

### Option 2: Registering Query Vars
If you absolutely must use the original names (for example, if you are integrating with a third-party tool you can't control), you need to tell WordPress to "allow" these variables in your `functions.php` file:

```php
function register_custom_query_vars( $vars ) {
    $vars[] = 'name';
    $vars[] = 'email';
    return $vars;
}
add_filter( 'query_vars', 'register_custom_query_vars' );
```