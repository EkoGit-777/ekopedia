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

# :wrench: Apa yang &: lakukan?
Dalam Ruby, sintak &:method_name adalah bentuk singkat dari mengirimkan sebuah method sebagai blok kepada method dengan urutan yang lebih tinggi seperti map, select, each, dll.

## :book: Sintak Umum:

```ruby
collection.map(&:method_name)
```

Itu setara dengan:

```ruby
collection.map { |item| item.method_name }
```

## :bulb: Bagaimana dia bekerja?

Ruby melakukan dua hal dengan &: :

- :method_name adalah sebuah Symbol.
- &:method_name memberitahu Ruby untuk mengkonvesi Symbol menjadi Proc menggunakan Symbol#to_proc.

Jadi baris ini:

```ruby
collection.map(&:title)
```

Ruby melakukan ini di dalam prosesnya:

```ruby
proc = :title.to_proc       # Converts the symbol to a proc
collection.map(&proc)       # Passes it as a block
```

Dan Proc tersebut bertindak sebagai berikut:

```ruby
->(x) { x.title }
```

## :books: Studi Kasus Umum

### :white_check_mark: map — Mengubah setiap elemen

```ruby
users.map(&:email)
# Same as: users.map { |user| user.email }
```

### :white_check_mark: select — Filter elemen

```ruby
records.select(&:active?)
# Same as: records.select { |record| record.active? }
```

### :white_check_mark: reject — Menghapus elemen

```ruby
numbers.reject(&:even?)
# Same as: numbers.select { |record| record.odd? }
records.reject(&:nil?)
# Same as: records.compact
```

### :white_check_mark: each — Melakukan sebuah aksi pada setiap item

```ruby
items.each(&:save)
# Same as: items.each { |item| item.save }

```

## :warning: Kapan untuk tidak menggunakan &:

### :x: Jika method memerlukan argumen:

```ruby
users.map(&:send) # WRONG if you want to do user.send(:name)
```

### :x: Jika kamu memerlukan lebih dari satu baris atau logika kondisional:

```ruby
users.map do |user|
  if user.admin?
    user.name.upcase
  else
    user.name
  end
end
```

### :x: Jika penerimanya kemungkinan bernilai nil:

```ruby
users.map(&:profile_name) # will raise if any user is nil
```

## :brain: Symbol#to_proc Contoh Kustom

Kamu bahkan bisa menggunakan Symbol#to_proc untuk variable itu sendiri:

```ruby
p = :upcase.to_proc
p.call("hello") # => "HELLO"
```

Ini yang Ruby lakukan di belakang layar ketika melihat &:upcase.

## :pushpin: Rangkuman


| Sintak                   | Catatan Persamaan Kode             |
|--------------------------|------------------------------------|
| arr.map(&:name)          | `arr.map {	x.name } `              |
| users.select(&:active?)  | `users.select {	user.active? } `  |
| items.each(&:save)       | `items.each {	item.save }`        |
	
	
	