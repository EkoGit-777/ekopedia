---
description: While decoupling an API, a simple question came up -- should this validation throw an exception or return an error response? This article breaks down that decision using real-world reasoning, not theory, and offers a clear guideline that scales with growing systems.
cover: /assets/images/dev note/exception-response.webp
icon: code
date: 2026-02-05
star: true
category:
- Dev Note
tag: [Web Development]
---

# Exceptions vs Error Responses: A Practical Guide for Clean API Design

When designing an API, one question keeps coming back:

> Should this validation throw an exception, or should it return an error response?

At first glance, this sounds trivial. But once your codebase grows, this decision starts affecting:
- decoupling
- testability
- consistency
- and how painful future refactors will be

I ran into this question again while discussing API decoupling, and I realized the answer is less about frameworks and more about how we think about failure.

This article summarizes a practical way to decide.

---

## The core misunderstanding

A common rule people use is:

> “If the user can’t fix it, throw an exception.
> If the user can fix it, return an error response.”

This sounds reasonable, but it’s not accurate enough — and it leads to subtle design issues.

For example:
- A user not having permission cannot fix it
- But returning 403 Forbidden is still a normal, expected API response

So clearly, “user can fix it or not” is not the right boundary.

---

## A better mental model

The real distinction is this:
> Exceptions represent broken flow.
> Error responses represent rejected decisions.

Or in simpler terms:
- Exception → “The system cannot continue normally.”
- Error response → “The system handled your request correctly, but the answer is no.”

Once you see it this way, the decision becomes much clearer.

---

## When you should use exceptions

Use exceptions when the operation cannot proceed safely or meaningfully.

These are not “answers” — they are failures.

Typical cases:
- External service is unavailable
- Database connection fails
- Required dependency is missing
- Domain invariants are broken
- The system enters an impossible state

Example:
```php
throw new PaymentGatewayUnavailableException();
```

This tells the system:
> “Something is wrong beyond business logic. Abort the flow.”

Exceptions work best in Domain or Service layers, where HTTP does not exist and should not be known.

---

## When you should return error responses

Use error responses when the request is:
- valid
- understood
- processed normally

…but the result is rejected by rules.

Typical cases:
- Validation errors
- Business rule violations
- Permission checks
- Resource conflicts

Example:
```json
{
  "message": "Email already exists"
}
```

This tells the client:
> “Your request makes sense. Adjust something and try again.”

These are expected outcomes, not failures.

---

## The clean separation that scales

A common mistake is mixing these two responsibilities.

### ❌ What to avoid
- Throwing exceptions for every validation error
- Returning HTTP responses from deep service layers
- Encoding HTTP status or response structure inside domain logic

This tightly couples your domain to delivery details.

---

## The recommended pattern

Domain / Service layer
- Throw semantic exceptions
- Do not format responses
- Do not care about HTTP

```php
if ($user->isBlocked()) {
    throw new UserBlockedException();
}
```

---

## Controller or global handler
- Catch exceptions
- Translate them into HTTP responses

```php
catch (UserBlockedException $e) {
    return response()->json([
        'message' => 'User is blocked'
    ], 403);
}
```

Now:
- Domain logic stays clean
- API responses stay predictable
- Changes in response format don’t leak into business logic

---

## “Can I use exceptions for predictable errors?”

Yes — if you do it correctly.

Using a typed, meaningful exception for predictable business errors is perfectly fine as a signal.

What matters is this rule:
> Exceptions signal what went wrong.
> Responses describe what the client receives.

You’re not returning an exception.
You’re mapping an exception to a response.

### ✅ Good
```php
throw new EmailAlreadyTakenException();
```

### ❌ Bad
```php
throw new Exception("Email already exists");
```

String-based exceptions don’t scale, don’t refactor well, and destroy consistency.

---

## A simple decision table
|Situation |	Use |
|User input validation |	Error response |
|Business rule violation |	Error response |
|Permission denied |	Error response |
|External service failure |	Exception |
|Broken invariant / impossible state |	Exception |
|Predictable business error |	Domain exception → mapped to response |

---

## Final takeaway

A good API does not treat every “no” as a failure.
- Exceptions are for broken flows.
- Error responses are for rejected decisions.

Once you keep that boundary clear, your API becomes:
- easier to reason about
- easier to test
- and much easier to evolve

That’s the kind of foundation Ekopedia aims to promote.