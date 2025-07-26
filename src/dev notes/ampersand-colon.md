---
title:  How to use ampersand-colon in Ruby?
description: The usage guide of &:method in Ruby.
icon: code
date: 2025-07-25
star: true
category:
- Dev Note
tag:
- Rails
---

# :wrench: What does &: do?
In Ruby, the &:method_name syntax is a shorthand for passing a method as a block to higher-order methods like map, select, each, etc.

## :book: General syntax:

```ruby
collection.map(&:method_name)
```

Is equivalent to:

```ruby
collection.map { |item| item.method_name }
```

## :bulb: How does it work under the hood?

Ruby does two things with &: :

- :method_name is a Symbol.
- &:method_name tells Ruby to convert the Symbol into a Proc using Symbol#to_proc.

So this line:

```ruby
collection.map(&:title)
```

Ruby internally does:

```ruby
proc = :title.to_proc       # Converts the symbol to a proc
collection.map(&proc)       # Passes it as a block
```

And that Proc behaves like:

```ruby
->(x) { x.title }
```

## :books: Common Use Cases

### :white_check_mark: map — Transform each element

```ruby
users.map(&:email)
# Same as: users.map { |user| user.email }
```

### :white_check_mark: select — Filter elements

```ruby
records.select(&:active?)
# Same as: records.select { |record| record.active? }
```

### :white_check_mark: reject — Remove elements

```ruby
numbers.reject(&:even?)
# Same as: numbers.select { |record| record.odd? }
records.reject(&:nil?)
# Same as: records.compact
```

### :white_check_mark: each — Perform an action on each item

```ruby
items.each(&:save)
# Same as: items.each { |item| item.save }

```

## :warning: When not to use &:

### :x: If the method takes arguments:

```ruby
users.map(&:send) # WRONG if you want to do user.send(:name)
```

### :x: If you need multiple lines or conditional logic:

```ruby
users.map do |user|
  if user.admin?
    user.name.upcase
  else
    user.name
  end
end
```

### :x: If the receiver might be nil:

```ruby
users.map(&:profile_name) # will raise if any user is nil
```

## :brain: Symbol#to_proc Custom Example

You can even use Symbol#to_proc yourself:

```ruby
p = :upcase.to_proc
p.call("hello") # => "HELLO"
```

This is what Ruby does behind the scenes when it sees &:upcase.

## :pushpin: Summary


| Syntax                   | Equivalent Code	Notes             |
|--------------------------|------------------------------------|
| arr.map(&:name)          | `arr.map {	x.name } `              |
| users.select(&:active?)  | `users.select {	user.active? } `  |
| items.each(&:save)       | `items.each {	item.save }`        |
	
	
	