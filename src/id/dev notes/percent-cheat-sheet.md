---
title: Ruby % Literal Cheat Sheet
description: A concise guide to Ruby's percent literals like %w, %i, %q, and more.
icon: code
date: 2025-07-17
star: true
category:
- Dev Note
tag:
- Rails
---

# Ruby `%` Literal Cheat Sheet :brain:

Ruby provides a set of **percent literals** (like `%w`, `%i`, `%q`, etc.) that make your code cleaner, more expressive, and easier to maintain. This guide walks you through them with clear examples and use cases.

## :package: Array and Symbol Literals

### `%w` – Array of Strings _(no interpolation)_

```ruby
%w[apple banana cherry]
# => ["apple", "banana", "cherry"]
```
Shorthand for: ["apple", "banana", "cherry"]

Saves you from writing repeated quotes and commas.

### %W – Array of Strings (with interpolation and escapes)
```ruby
fruit = "apple"
%W[#{fruit} banana cherry]
# => ["apple", "banana", "cherry"]
```
Interpolates Ruby expressions (like "#{...}").

Also supports escape sequences.

### %i – Array of Symbols (no interpolation)
```ruby
%i[foo bar baz]
# => [:foo, :bar, :baz]
```
Equivalent to [:foo, :bar, :baz]

### %I – Array of Symbols (with interpolation)
```ruby
status = "success"
%I[#{status} failed]
# => [:success, :failed]
```

## :writing_hand: String Literals

### %q – Single-Quoted String (no interpolation)
```ruby
%q[He said 'hello']
# => "He said 'hello'"
```
Equivalent to 'He said \'hello\''

No interpolation or escape sequences.

### %Q – Double-Quoted String (with interpolation)
```ruby
name = "Eko"
%Q[Hello, #{name}]
# => "Hello, Eko"
```
Behaves like "Hello, #{name}"

## :test_tube: Regex and Shell

### %r – Regular Expression
```ruby
%r[hello]
# => /hello/
```
Handy when using / inside the regex (e.g., %r[http://])

### %x – Shell Command
```ruby
%x[echo Hello]
# => "Hello\n"
```
Executes the command in your system shell.

## :bulb: Alternate Delimiters

### Ruby allows flexible delimiters. These are all valid and equivalent:

```ruby
%w(foo bar) == %w{foo bar} == %w<foo bar> == %w|foo bar|
```
Choose whichever improves readability in your context.

## :white_check_mark: Use Cases

### Avoid escaping quotes in strings:

```ruby
%q[She said "Hello"] # cleaner than "She said \"Hello\""
```

### Clean enums or constant arrays:

```ruby
STATUSES = %w[active archived deleted]
```

## :brain: Summary Table

| Literal | Description           | Interpolation | Example                 |
|---------|-----------------------|---------------|-------------------------|
| %w      |	Array of strings	    |      :x:     	| %w[one two three]       |
| %W      |	Array of strings	    |      :white_check_mark:     	| %W[#{x} y z]            |
| %i      |	Array of symbols	    |      :x:     	| %i[alpha beta gamma]    |
| %I      |	Array of symbols	    |      :white_check_mark:     	| %I[#{key} value]        |
| %q      |	Single-quoted string	|      :x:     	| %q[No #{interpolation}] |
| %Q      |	Double-quoted string  |      :white_check_mark:     	| %Q[Hello #{name}]       |
| %r      |	Regular expression	  |      :white_check_mark:     	| %r[http://]             |
| %x      |	Shell command	        |      :white_check_mark:     	| %x[date]                |

Now you’re ready to wield Ruby's percent literals like a pro! 💎✨

Need a quick reference? Bookmark this guide and boost your Ruby fluency.