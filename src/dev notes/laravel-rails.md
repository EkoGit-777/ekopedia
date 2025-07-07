---
cover: /assets/images/post/laravel-rails.webp
icon: code
date: 2025-07-03
category:
- Dev Note
tag:
- Laravel
- Rails
---

# Laravel ↔ Rails Mental Map for Developers

If you're a Laravel developer starting to work with Ruby on Rails, this guide gives you a side-by-side reference to bridge the gap quickly — especially around factories, relationships, migrations, and testing.

---

## 🧩 1. Models & Relationships

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Model             | `User extends Model`                   | `class User < ApplicationRecord`   |
| Table naming      | `users`, maps to `User::class`         | `User` auto maps to `users` table  |
| Relationships     | `$this->hasMany(Post::class)`          | `has_many :posts`                  |
| Foreign keys      | `user_id` (convention)                 | `user_id` (convention)             |
| Timestamps        | `created_at`, `updated_at`             | `created_at`, `updated_at`         |
| Soft Deletes      | `use SoftDeletes`                      | `acts_as_paranoid` gem or manual   |

---

## 🧩 2. Factories & Seeders

| Concept           | Laravel                                | Rails (FactoryBot + Faker)        |
|------------------|-----------------------------------------|------------------------------------|
| Factory location  | `database/factories`                   | `spec/factories`                   |
| Faker usage       | `$this->faker->name`                   | `Faker::Name.name`                 |
| Unique email      | `$this->faker->unique()->safeEmail`    | `Faker::Internet.unique.email`     |
| Relationships     | `'user_id' => User::factory()`         | `user { create(:user) }`           |
| Creating data     | `User::factory()->create()`            | `create(:user)`                    |

---

## 🧩 3. Migrations

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Create table      | `Schema::create(...)`                  | `create_table`                     |
| Column types      | `$table->string()`                     | `t.string`                         |
| Foreign keys      | `$table->foreignId('user_id')`         | `t.references :user, foreign_key: true` |
| Indexes           | `$table->index(...)`                   | `add_index(...)` or `t.index(...)` |

---

## 🧩 4. Routing

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Route file        | `routes/web.php`                       | `config/routes.rb`                 |
| Define route      | `Route::get('/users', ...)`            | `get '/users' => 'users#index'`    |
| Resource route    | `Route::resource('users', ...)`        | `resources :users`                 |
| Route helper      | `route('users.index')`                 | `users_path`, `user_path(@user)`   |

---

## 🧩 5. Controllers

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Base class        | `extends Controller`                   | `< ApplicationController`          |
| Method            | `public function index()`              | `def index; end`                   |
| Request validation| `$request->validate(...)`              | `params.require(...).permit(...)`  |
| Dependency injection | Via type hints                     | `before_action` or manual init     |

---

## 🧩 6. Testing

| Concept           | Laravel                                | Rails (RSpec + FactoryBot)        |
|------------------|-----------------------------------------|------------------------------------|
| Test folder       | `tests/Feature` / `tests/Unit`         | `spec/models`, `spec/requests`, etc |
| Test runner       | `php artisan test`                     | `bundle exec rspec`               |
| Assertions        | `$this->assertEquals(...)`             | `expect(value).to eq(...)`        |
| Factories         | `User::factory()`                      | `create(:user)`                   |

---

## 🧩 7. CLI Tools

| Action             | Laravel CLI               | Rails CLI                   |
|--------------------|---------------------------|-----------------------------|
| New project        | `laravel new app`         | `rails new app`             |
| Start server       | `php artisan serve`       | `rails server`              |
| Create migration   | `make:migration`          | `rails generate migration`  |
| Run migration      | `php artisan migrate`     | `rails db:migrate`          |
| Rollback           | `migrate:rollback`        | `rails db:rollback`         |
| Console            | `php artisan tinker`      | `rails console`             |

---

## 🧩 8. Querying & ActiveRecord

| Concept           | Laravel (Eloquent)                   | Rails (ActiveRecord)              |
|------------------|----------------------------------------|----------------------------------|
| All users         | `User::all()`                         | `User.all`                        |
| Find user         | `User::find(1)`                       | `User.find(1)`                    |
| Where clause      | `User::where('email', $email)`       | `User.where(email: email)`       |
| Create record     | `User::create([...])`                | `User.create(...)`               |
| Access relation   | `$user->posts()`                      | `user.posts`                     |

---

## 🧪 Bonus: Testing Tips in Rails

- Use `Faker` to avoid test pollution (especially for emails and usernames)
- Use `create_list(:factory, count)` to create multiple associated records
- Use `trait` to define role-specific user variations:
  ```ruby
  factory :user do
    trait :support do
      role { 'support' }
    end
  end