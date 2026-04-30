---
description: Perbedaan kecil seperti SIGNED vs UNSIGNED bisa menyebabkan error foreign key di project legacy. Selalu cek hal dasar sebelum mencari masalah kompleks.
cover: https://cdn.ekopedia.id/images/dev note/basic-mistake-reminder.webp
icon: code
date: 2026-04-13
star: true
category: Dev Note
tags: [Database, Migration]
---

# Kesalahan Kecil yang Merusak Foreign Key di Project Legacy

Saya sedang mengubah foreign key dari `user` ke `staff`.

Secara logika, semuanya terlihat benar:
- nama kolom sesuai  
- relasi masuk akal  
- query tidak ada masalah  

Harusnya berjalan tanpa kendala.

---

## Bagian yang Membingungkan
Tapi yang muncul justru error:
> errno: 150 "Foreign key constraint is incorrectly formed"

Tidak terlalu membantu.

---

## Yang Saya Kira Awalnya
Karena ini project legacy, saya langsung berpikir ke arah yang kompleks:
- schema yang tidak konsisten  
- constraint yang tersembunyi  
- atau edge case yang aneh  

Saya fokus ke hal-hal yang dalam.

---

## Yang Sebenarnya Terjadi
Setelah dicek lebih teliti, ternyata masalahnya sangat sederhana:

> Kolom `created_by_user_id` masih **SIGNED**, sedangkan `staff.id` adalah **UNSIGNED**.

Perbedaan kecil ini saja sudah cukup untuk membuat foreign key gagal.

---

## Pelajaran yang Didapat
**Kolom foreign key harus benar-benar sama, termasuk SIGNED vs UNSIGNED.**

Dan yang lebih penting:

> Jangan pernah asumsi schema di legacy system itu konsisten.

Walaupun:
- naming terlihat benar  
- struktur terlihat rapi  
- sistem sudah lama berjalan  

---

## Penutup
Ini jadi pengingat:

> Semakin berpengalaman, semakin mudah kita melewatkan hal yang basic.

Bukan karena tidak tahu —  
tapi karena terlalu yakin semuanya sudah benar.

Sebelum debug terlalu jauh:

> Selalu cek hal paling dasar dulu.