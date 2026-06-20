---
description: Saya menemukan masalah indexing Google yang ternyata disebabkan oleh struktur URL yang tidak konsisten. Solusinya bukan SEO, melainkan perbaikan arsitektur website.
cover: https://cdn.ekopedia.id/images/dev note/url-structure-breaks-google-indexing.webp
icon: code
date: 2026-06-21
star: true
category: Dev Note
tags: [Architecture, SEO]
---

# Ketika Struktur URL Mengganggu Indexing Google

Saat mengecek website Alexandria, saya menemukan sesuatu yang cukup aneh.

Beberapa halaman berhasil terindeks oleh Google, sementara halaman lainnya tidak. Sitemap sudah tersedia. Internal link berfungsi dengan baik. Semua halaman juga dapat diakses secara publik.

Awalnya saya mengira masalahnya ada pada kualitas konten.

Ternyata bukan.

Setelah melakukan investigasi lebih lanjut, saya menemukan bahwa penyebabnya berasal dari struktur proyek yang saya gunakan.

Struktur URL yang saya buat mencampurkan beberapa pola routing yang berbeda. Sebagian halaman menggunakan pendekatan berbasis file, sementara sebagian lainnya menggunakan pendekatan berbasis folder. Secara teknis semuanya berjalan normal dan tidak menimbulkan error.

Namun ternyata URL yang tidak konsisten dapat menyulitkan mesin pencari dalam memahami hubungan antar halaman.

Solusi yang saya lakukan cukup sederhana:

* Merapikan struktur folder proyek
* Menggunakan pola folder-based route untuk halaman utama
* Tetap menggunakan route bawaan framework untuk artikel blog seperti Dev Note dan Diary
* Menjaga pola URL agar lebih konsisten dan mudah diprediksi

Setelah struktur proyek diperbaiki, proses indexing menjadi lebih konsisten dibanding sebelumnya.

## Pelajaran yang Didapat

Hanya karena sebuah URL dapat diakses dengan baik oleh browser, bukan berarti struktur tersebut ideal untuk mesin pencari.

Saat membangun website yang berisi banyak konten, konsistensi struktur URL sangat penting. Struktur yang jelas membantu pengguna maupun mesin pencari memahami hubungan antar halaman di dalam website.

Sebelum menyalahkan SEO, ada baiknya memeriksa kembali apakah arsitektur website sudah memberikan sinyal yang jelas kepada mesin pencari.