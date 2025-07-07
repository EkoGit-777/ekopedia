---
# cover: /assets/images/post/laravel-rails.webp
icon: code
date: 2025-07-04
category:
- Dev Note
tag:
- Rails
---

# 🔍 What Is Searchkick and How It's Used in Rails Projects

## What Is Searchkick?

[Searchkick](https://github.com/ankane/searchkick) is a Ruby gem that integrates Rails models with **Elasticsearch**, giving your application fast and flexible **full-text search** capabilities.

Think of it as a powerful search engine built into your Rails app — much more advanced than SQL `LIKE` queries.

---

## What Can Searchkick Do?

### ✅ 1. Full-Text Search

Search across models easily:

```ruby
Product.search("apple")
```

It can match against multiple fields (like name, description, tags), and rank results by relevance — just like Google.

### ✅ 2. Autocomplete / Suggestions
You can build autocomplete features:

```ruby
Product.search("app", suggest: true)
```
Searchkick indexes data in a way that supports fast, intelligent completion.

### ✅ 3. Filtering, Facets, Pagination
You can filter search results:

```ruby
Product.search("apple", where: { brand: "Apple", in_stock: true }, page: 2)
```
And even get breakdowns for categories, tags, etc. (called facets).

## ⚙️ How It Works Under the Hood
When you define searchkick in a model:

```ruby
class Product < ApplicationRecord
  searchkick
end
```
That model’s data is indexed into Elasticsearch.

When you call .reindex, Searchkick pushes that data into the ES server.

Later, calling .search(...) doesn’t query the database — it queries Elasticsearch.

## 🧪 Why It's a Problem in Tests
Because indexing data during every test slows things down and requires Elasticsearch to be running.

That’s why we often use:

``` ruby
Searchkick.disable_callbacks
```
→ to skip automatic indexing

Or:

```ruby
allow(Model).to receive(:reindex).and_return(true)
```
→ to stub manual indexing

## 🔧 In Your Project
From your test error, we saw this code:

```ruby
Dictionary::Field.where(id: saved_changes[:dictionary_field_id]).reindex
```
This tells us:

Your project uses Searchkick to index dictionary fields

When a related model (like Form::AutofillRule) updates, it triggers a manual reindex

The reindex pushes the updated data to Elasticsearch so that search results stay fresh

## ✅ Summary

| Feature                     | Description                                           |
|-----------------------------|-------------------------------------------------------|
| 🔍 Full-text search         | Fast and relevant keyword-based searches              |
| ⚡ Autocomplete & fuzzy     | Great for UX with suggestive matching                 |
| 🛠 Backed by Elasticsearch  | Fast, scalable, modern search engine                  |
| 🔁 Reindexing               | Keeps the search index synced with the database       |
| 🧪 Easily stubbed in tests  | Prevent test crashes with `disable_callbacks` or mocks |