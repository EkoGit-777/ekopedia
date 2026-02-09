---
description: Status code bukan cuma angka. Di balik 404 dan 502, ada perbedaan tanggung jawab antar layer. Artikel ini membedah bagaimana Nginx dan aplikasi bereaksi berbeda terhadap request yang sama.
cover: /assets/images/dev note/same-bug-different-status.webp
icon: code
date: 2026-02-09
star: true
category: Dev Note
tags: [Web Development, PHP, Nginx]
---

# Kenapa Bug yang Sama Bisa Menghasilkan 404 di Staging tapi 502 di Local?

Saat debugging sebuah issue baru-baru ini, saya menemui hal yang cukup membingungkan:

- Di <span class="text-info">**staging**</span>, request mengembalikan **404**
- Di <span class="text-info">**local**</span>, request yang *sama persis* mengembalikan **502**

Endpoint sama. Kode sama. Bug sama.

Lalu pertanyaannya: **kenapa status code-nya berbeda?**

Jawabannya ternyata bukan di bug-nya, tapi **di layer mana request tersebut gagal**.

---

## Inti Masalahnya

Perbedaan ini **bukan karena environment “aneh”**, melainkan karena:

> **Request dihentikan di layer yang berbeda**

Secara sederhana:
- **404** → request ditolak <span class="text-warning">**sebelum masuk ke aplikasi**</span>
- **502** → request <span class="text-warning">**masuk ke aplikasi**</span>, tapi aplikasinya gagal

Bug yang sama, tapi *guardrail*-nya beda.

---

## Alur Request (Versi Sederhana)

Setiap HTTP request biasanya melewati beberapa layer:
Client
↓
Nginx (Web Server / Reverse Proxy)
↓
Application Runtime (PHP / Node / dll)
↓
Router / Controller


Request bisa gagal di **layer mana saja**, tergantung konfigurasi.

---

## Apa yang Terjadi di Kasus Ini

### Akar Masalah

Masalah utamanya adalah **header request yang rusak / format-nya salah**.

Satu kesalahan kecil ini menghasilkan perilaku berbeda di tiap environment.

---

## Kenapa di Staging Menghasilkan 404

Di **staging**:

- Nginx dikonfigurasi **lebih ketat**
- Request divalidasi lebih awal
- Header yang rusak langsung ditolak
- Request **tidak pernah diteruskan ke aplikasi**

Alurnya kira-kira seperti ini:
Request
→ Nginx menolak
→ 404 Not Found

Catatan penting:  
Aplikasi **tidak pernah menerima request**, jadi tidak mungkin crash.

---

## Kenapa di Local Menghasilkan 502

Di **local**:

- Nginx lebih **permisif**
- Hampir semua request diteruskan ke aplikasi
- Aplikasi mencoba membaca header yang rusak
- Terjadi **fatal error**
- Aplikasi gagal mengembalikan response HTTP yang valid

Lalu Nginx melihat:
Request
→ Nginx meneruskan
→ Aplikasi crash :boom:
→ Nginx mendeteksi backend error
→ 502 Bad Gateway

Hal penting di sini:
> **502 bukan dikembalikan oleh aplikasi, tapi oleh Nginx**

---

## Bug yang Sama, Guardrail yang Berbeda

| Environment | Siapa yang menghentikan request | Status |
|------------|--------------------------------|--------|
| Staging | Nginx (ketat) | 404 |
| Local | Runtime aplikasi | 502 |

Bug-nya sama.  
Layer yang gagal berbeda.  
Status code pun berbeda.

---

## Kenapa Ini Justru Hal yang Baik

- Staging berperilaku lebih mendekati production
- Aplikasi terlindungi dari input yang tidak valid
- Local membantu menemukan asumsi yang rapuh di kode
- Bug terdeteksi **sebelum** masuk production

Ini contoh bagus dari sistem yang berlapis dengan baik.

---

## Aturan Mental yang Bisa Dipakai Terus

> **404** → “Request ditolak sebelum masuk aplikasi”  
> **502** → “Aplikasi gagal setelah menerima request”

Dengan pola pikir ini, debugging jadi jauh lebih jelas.

---

## Kondisi Ideal yang Diinginkan

Solusi jangka panjang yang paling sehat:

- Request tetap masuk ke aplikasi
- Header divalidasi secara eksplisit
- Aplikasi mengembalikan **400 / 415**
- Input buruk **tidak boleh menyebabkan crash**

Hasilnya:
- Local = 400  
- Staging = 400  
- Production = 400  

Perilaku konsisten, error jelas, tidak membingungkan.

---

## Penutup

Environment yang berbeda bukan hanya soal kode yang berbeda,  
tapi juga **tanggung jawab layer yang berbeda**.

Kalau kamu melihat status code berbeda untuk bug yang sama,  
jangan panik.

Tanyakan satu hal ini:

> *Request-nya gagal di layer mana?*

Biasanya jawabannya langsung ketemu.