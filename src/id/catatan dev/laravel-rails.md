---
description: Mental map guide for Laravel developer who starts to learn Ruby on Rails.
cover: /assets/images/dev note/laravel-rails.webp
icon: code
date: 2025-07-03
star: true
category:
- Dev Note
tag:
- Laravel
- Rails
---

# Laravel ↔ Rails Mental Map for Developers

Jika kamu seorang pengembang Laravel yang mulai bekerja dengan Ruby on Rails, panduan ini memberi kamu referensi berdampingan untuk menjembatani kesenjangan dengan cepat — terutama di sekitar pabrik, hubungan, migrasi, dan pengujian.

---

## :jigsaw: 1. Models & Relationships

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Model             | `User extends Model`                   | `class User < ApplicationRecord`   |
| Table naming      | `users`, maps to `User::class`         | `User` auto maps to `users` table  |
| Relationships     | `$this->hasMany(Post::class)`          | `has_many :posts`                  |
| Foreign keys      | `user_id` (convention)                 | `user_id` (convention)             |
| Timestamps        | `created_at`, `updated_at`             | `created_at`, `updated_at`         |
| Soft Deletes      | `use SoftDeletes`                      | `acts_as_paranoid` gem or manual   |

---

## :jigsaw: 2. Factories & Seeders

| Concept           | Laravel                                | Rails (FactoryBot + Faker)        |
|------------------|-----------------------------------------|------------------------------------|
| Factory location  | `database/factories`                   | `spec/factories`                   |
| Faker usage       | `$this->faker->name`                   | `Faker::Name.name`                 |
| Unique email      | `$this->faker->unique()->safeEmail`    | `Faker::Internet.unique.email`     |
| Relationships     | `'user_id' => User::factory()`         | `user { create(:user) }`           |
| Creating data     | `User::factory()->create()`            | `create(:user)`                    |

---

## :jigsaw: 3. Migrations

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Create table      | `Schema::create(...)`                  | `create_table`                     |
| Column types      | `$table->string()`                     | `t.string`                         |
| Foreign keys      | `$table->foreignId('user_id')`         | `t.references :user, foreign_key: true` |
| Indexes           | `$table->index(...)`                   | `add_index(...)` or `t.index(...)` |

---

## :jigsaw: 4. Routing

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Route file        | `routes/web.php`                       | `config/routes.rb`                 |
| Define route      | `Route::get('/users', ...)`            | `get '/users' => 'users#index'`    |
| Resource route    | `Route::resource('users', ...)`        | `resources :users`                 |
| Route helper      | `route('users.index')`                 | `users_path`, `user_path(@user)`   |

---

## :jigsaw: 5. Controllers

| Concept           | Laravel                                | Rails                              |
|------------------|-----------------------------------------|------------------------------------|
| Base class        | `extends Controller`                   | `< ApplicationController`          |
| Method            | `public function index()`              | `def index; end`                   |
| Request validation| `$request->validate(...)`              | `params.require(...).permit(...)`  |
| Dependency injection | Via type hints                     | `before_action` or manual init     |

---

## :jigsaw: 6. Testing

| Concept           | Laravel                                | Rails (RSpec + FactoryBot)        |
|------------------|-----------------------------------------|------------------------------------|
| Test folder       | `tests/Feature` / `tests/Unit`         | `spec/models`, `spec/requests`, etc |
| Test runner       | `php artisan test`                     | `bundle exec rspec`               |
| Assertions        | `$this->assertEquals(...)`             | `expect(value).to eq(...)`        |
| Factories         | `User::factory()`                      | `create(:user)`                   |

---

## :jigsaw: 7. CLI Tools

| Action             | Laravel CLI               | Rails CLI                   |
|--------------------|---------------------------|-----------------------------|
| New project        | `laravel new app`         | `rails new app`             |
| Start server       | `php artisan serve`       | `rails server`              |
| Create migration   | `make:migration`          | `rails generate migration`  |
| Run migration      | `php artisan migrate`     | `rails db:migrate`          |
| Rollback           | `migrate:rollback`        | `rails db:rollback`         |
| Console            | `php artisan tinker`      | `rails console`             |

---

## :jigsaw: 8. Querying & ActiveRecord

| Concept           | Laravel (Eloquent)                   | Rails (ActiveRecord)              |
|------------------|----------------------------------------|----------------------------------|
| All users         | `User::all()`                         | `User.all`                        |
| Find user         | `User::find(1)`                       | `User.find(1)`                    |
| Where clause      | `User::where('email', $email)`       | `User.where(email: email)`       |
| Create record     | `User::create([...])`                | `User.create(...)`               |
| Access relation   | `$user->posts()`                      | `user.posts`                     |

---

## :test_tube: Bonus: Tip Pengujian dalam Rails

- Gunakan `Faker` untuk menghindari polusi pengujian (terutama untuk email dan nama pengguna)
- Gunakan `create_list(:factory, count)` untuk membuat beberapa rekaman terkait
- Gunakan `trait` untuk menentukan variasi pengguna yang spesifik peran:
  ```ruby
  factory :user do
    trait :support do
      role { 'support' }
    end
  end
  ```