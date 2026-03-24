---
description: Error "invalid operation" saat pakai closure di public property? Ternyata masalahnya bukan di PHP, tapi di proses serialisasi framework.
cover: /assets/images/dev note/closure-in-public-property.webp
icon: code
date: 2026-03-24
star: true
category: Dev Note
tags: [PHP, Laravel, Livewire]
---

# Momen Saat Saya Sadar Closure Tidak Cocok di Public Property

Saya sedang mendefinisikan kolom tabel sebagai public property:

```php
public $columns = [
    ['key' => 'name', 'label' => 'Name'],
    ['key' => 'email', 'label' => 'Email'],
    ['key' => 'roles', 'label' => fn ($row) => $row->roles],
];
```
Kelihatannya rapi. Daripada menaruh logic di tempat lain, saya bisa langsung pakai closure di dalam konfigurasi.

---

## Bagian yang Membingungkan

Tiba-tiba… error.

Pesannya?

> "Invalid operation"

Tidak jelas.
Tidak ada penjelasan yang membantu.
Cuma… invalid.

---

## Yang Saya Kira Awalnya

Saya tidak terlalu curiga di awal.

Closure di array? Valid.
Public property? Valid.

Harusnya kalau digabung juga tidak masalah… kan?

---

## Yang Sebenarnya Terjadi

Setelah ditelusuri, ternyata masalahnya bukan di PHP.

Masalahnya ada di cara framework bekerja.

Public property di sistem reaktif itu bukan sekadar variabel biasa.
Mereka:
- diserialisasi
- dikirim ke client
- dibangun ulang di setiap request

Sedangkan closure?

Tidak bisa diserialisasi.

Jadi saat framework mencoba memproses property tersebut, langsung gagal — dan muncul error yang tidak jelas tadi.

---

## Pelajaran yang Didapat

**Kalau sebuah property akan diserialisasi, jangan pernah menyimpan closure di dalamnya.**

Solusinya sederhana:
Pindahkan definisi variable column tersebut ke method.
```php
#[Computed]
public function columns()
{
    return [
        ['key' => 'name', 'label' => 'Name'],
        ['key' => 'email', 'label' => 'Email'],
        ['key' => 'roles', 'label' => fn ($row) => $row->roles],
    ];
}
```

---

## Penutup

Ini salah satu momen yang mengingatkan saya:

> Tidak semua yang valid di PHP, valid juga di dalam framework.

Kadang batasannya bukan di bahasanya —
tapi di sistem yang menggunakannya.