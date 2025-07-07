---
cover: /assets/images/post/delegation.webp
icon: code
date: 2025-07-07
category:
- Dev Note
tag:
- Rails
---

# Understanding `delegate` in Ruby on Rails

In Ruby on Rails, the `delegate` method is a powerful tool that lets one object pass responsibility for a method call to another associated object. This helps keep your code clean, expressive, and DRY (Don't Repeat Yourself).

In this article, we’ll explore how `delegate` works, when to use it, and how the `prefix` option can save you from naming conflicts.

---

## 🧠 What is `delegate`?

The `delegate` method is provided by Rails and is used to forward method calls to an associated object.

### 🔧 Basic Syntax

```ruby
delegate :method_name, to: :target_object
```
This creates a method in the current class that internally calls the given method on the associated object.

### 📘 Simple Example
Let’s say we have two classes: Author and Book.

```ruby
class Author
  def name
    "Haruki Murakami"
  end
end

class Book
  attr_reader :author

  def initialize(author)
    @author = author
  end

  delegate :name, to: :author
end

book = Book.new(Author.new)
book.name  # => "Haruki Murakami"
```
The book object doesn’t have its own name method. Instead, it delegates the name call to its author.

## 🛡️ Avoiding Naming Conflicts with prefix
What if Book also had its own name method for the title? That would conflict with delegate :name, to: :author.

That’s where the prefix: option comes in.

```ruby
class Book
  delegate :name, to: :author, prefix: true
end

book.author_name  # => "Haruki Murakami"
```
By setting prefix: true, Rails creates a method called author_name, avoiding any naming conflicts.

You can also use a custom prefix:

```ruby
delegate :name, to: :author, prefix: :writer

book.writer_name  # => "Haruki Murakami"
```
### ❗ Handling Nil Associations with allow_nil
If your association might be nil, you can prevent Rails from raising an error:

```ruby
delegate :name, to: :author, prefix: true, allow_nil: true
```
Now, if book.author is nil, calling book.author_name will simply return nil instead of crashing.

### ✅ Real-World Example: A Field with a Dictionary
Here’s a practical example you might see in a Rails model:

```ruby
class Field < ApplicationRecord
  belongs_to :dictionary_field

  delegate :label, to: :dictionary_field, prefix: true, allow_nil: true
end
```
This lets you call:
```ruby
field.dictionary_field_label
```
Instead of:
```ruby
field.dictionary_field&.label
```
Much cleaner, right?

## 📌 Summary
Here’s a quick reference table for delegate options:

| Option        | Purpose                                             |
|---------------|-----------------------------------------------------|
| to:           | Target object to delegate to                        |
| prefix: true  | Adds the target object’s name as prefix             |
| prefix: :x    | Uses a custom prefix                                |
| allow_nil     | Prevents error if the target is nil (returns nil)   |

🏁 Conclusion
The delegate method in Rails helps you write concise, maintainable code by letting one object pass method calls to another. Combined with prefix and allow_nil, it's a flexible tool that can eliminate clutter and improve readability in your models.

Keep your objects focused, and let delegation do the heavy lifting!