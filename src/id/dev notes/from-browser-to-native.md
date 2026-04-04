---
description: PWA vs Capacitor vs Electron vs Tauri vs Flutter — panduan lengkap yang membandingkan arsitektur, performa, ukuran aplikasi, kemampuan native, dan berbagai use case untuk membantu memilih framework terbaik untuk aplikasi web, mobile, maupun desktop.
cover: https://cdn.ekopedia.id/images/dev note/frontend-frameworks.webp
icon: code
date: 2026-03-04
star: true
category: Dev Note
tags: [Web Development, Frontend]
---

# Dari Browser ke Native: Menjelajahi Dunia Modern App Framework

Dulu, membangun aplikasi itu seperti memilih kubu.

Web atau Native.
Ringan atau Powerful.
Cepat rilis atau Terintegrasi penuh.

Tapi sekarang?

Batasnya semakin kabur.

Kalau kamu sedang membangun produk seperti ExpirEkopedia, atau proyek di dalam ekosistem Ekopedia, pertanyaannya bukan lagi:

> “Framework mana yang paling bagus?”

Melainkan:

> “Pengalaman seperti apa yang ingin aku berikan ke user?”

Mari kita jelajahi satu per satu. Bukan sebagai programmer yang mengejar tools. Tapi sebagai builder yang merancang pengalaman.

---

## :globe_with_meridians: Bab 1 — Ilusi Native: PWA

Progressive Web App (PWA) adalah pendekatan paling minimalis.

Ia hidup di browser.
Bisa di-install.
Bisa offline (sebagian).
Terlihat seperti aplikasi.

Saat user membuka PWA, sebenarnya mereka membuka browser tanpa address bar.

Rasanya seperti native.

Tapi di balik layar?

Masih browser.

**Kenapa banyak yang suka:**
- :white_check_mark: Tidak perlu App Store
- :white_check_mark: Ukuran sangat kecil
- :white_check_mark: Deployment cepat
- :white_check_mark: Satu codebase untuk semua

**Konsekuensinya:**
- :x: Akses sistem terbatas
- :x: Bergantung pada browser user
- :x: Fitur native kompleks sulit diakses

PWA cocok untuk filosofi web-first.

---

## :iphone: Web yang Dipakaikan Baju Native: Capacitor

Capacitor melangkah lebih jauh.

Alih-alih berjalan di browser user, aplikasi web kamu dibungkus menjadi aplikasi Android atau iOS sungguhan.

Vue kamu?
Tetap Vue.

Tapi jadi APK atau IPA.

Yang menarik:

Dengan Capacitor, kamu tidak perlu domain live.
File hasil build langsung dibundle ke dalam aplikasi.

Itulah kenapa rasanya lebih “native” dibanding PWA.

**Kelebihannya:**
✅ Tetap pakai stack web (Vue, React, dll)
✅ Bisa akses kamera, storage, push notification
✅ Tidak perlu website live
✅ Bisa publish ke Play Store / App Store

**Kekurangannya:**
❌ Tetap berbasis WebView
❌ Performa sedikit di bawah native murni
❌ Perlu Android Studio / Xcode untuk build

Capacitor cocok untuk builder web yang ingin masuk ke dunia mobile tanpa pindah ekosistem.

---

## :desktop_computer: Si Berat yang Powerful: Electron

Electron punya filosofi berbeda.

Ia tidak memakai browser milik user.

Ia membawa browser sendiri.

Setiap aplikasi Electron mengandung:

Chromium

Node.js

Aplikasi kamu

Artinya, saat user membuka aplikasi:

Mereka menjalankan browser tersembunyi di dalam aplikasi.

Inilah kenapa Electron terasa stabil dan konsisten di semua device.

Tapi ada harga yang dibayar.

Ukuran.

**Kelebihannya:**
✅ Akses sistem penuh
✅ Konsisten di semua OS
✅ Ekosistem matang
✅ Cocok untuk aplikasi desktop kompleks

**Kekurangannya:**
❌ Ukuran besar
❌ Konsumsi RAM tinggi
❌ Startup lebih lambat

Electron itu kuat. Tapi berat.

---

## :zap: Versi Ringan dari Electron: Tauri

Kalau Electron seperti truk besar…

Tauri seperti motor sport.

Tauri tidak membawa Chromium sendiri.
Ia memakai WebView bawaan sistem operasi.

Windows → WebView2
macOS → WebKit
Linux → WebKitGTK

Hasilnya?

Aplikasi jauh lebih kecil dan ringan.

Kelebihannya:
✅ Ukuran sangat kecil
✅ Performa lebih ringan
✅ Arsitektur aman
✅ Tidak perlu website live

Kekurangannya:
❌ Ekosistem lebih muda
❌ Perlu Rust untuk fitur advanced
❌ Bergantung pada WebView OS

Tauri adalah jawaban modern untuk masalah “Electron terlalu berat”.

---

## :art: Jalur Native Sebenarnya: Flutter

Flutter berbeda dari semuanya.

Ia tidak membungkus web.
Ia tidak menggunakan WebView.
Ia tidak bergantung pada browser.

Flutter menggambar UI langsung menggunakan engine grafisnya sendiri.

Itulah kenapa tampilan Flutter konsisten di semua platform.

**Kelebihannya:**
✅ Performa native murni
✅ UI konsisten
✅ Animasi halus
✅ Tidak tergantung browser

**Kekurangannya:**
❌ Bahasa berbeda (Dart)
❌ Tidak web-first
❌ Butuh ekosistem berbeda

Flutter bukan wrapper.

Ia adalah framework UI native yang lengkap.

---

## :bar_chart: Perbandingan Besar

| Fitur                       | PWA | Capacitor | Electron	| Tauri |	Flutter |
|-----------------------------|-----|-----------|----------|-------|---------|
| Butuh Website Live          | :white_check_mark: Yes | :x: No	| :x: No | :x: No	| :x: No |
| Berjalan di Browser User    | :white_check_mark: Yes | :x: No	| :x: No | :x: No |	:x: No	|
| Menggunakan WebView         | :white_check_mark: Yes | :white_check_mark: Yes	|	:x: (bundled Chromium) | :white_check_mark: Yes	|	:x: No	|
| Terintegrasi Dengan Browser | :x: | :x: | :white_check_mark: | :x: | :x: |
| Ukuran Aplikasi Kecil       | :white_check_mark: | :balance_scale: Medium	|	:x:	|	:white_check_mark:	|	:balance_scale: Medium	|
| Akses Native Penuh          | :x: Terbatas | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Siap App Store              | :warning: Terbatas	|	:white_check_mark:	|	:white_check_mark:	|	:white_check_mark:	|	:white_check_mark:	|
| Performa                    | :balance_scale: |	:balance_scale: | :balance_scale: |	:white_check_mark:	|	:white_check_mark:	|

Legenda:
- :white_check_mark: Ya / Kuat
- :x: Tidak
- :balance_scale: Tergantung / Menengah
- :warning: Bisa, tapi terbatas

---

## :brain: Jadi, Pilih yang Mana?

Kalau kamu percaya:

> “Aplikasiku hidup di web.”

Pilih PWA.

Kalau kamu berpikir:

> “Web app-ku harus bisa jadi mobile.”

Pilih Capacitor.

Kalau kamu ingin:

> “Desktop power dengan skill web.”

Pilih Electron atau Tauri.

Kalau kamu ingin:

> “Kontrol penuh seperti native sejati.”

Pilih Flutter.

---

## :jigsaw: Penutup

Framework bukan tentang siapa yang paling canggih.

Ia tentang lapisan abstraksi mana yang ingin kamu gunakan:

Browser.
WebView.
Bundled Engine.
Native Renderer.

Semua hanyalah cara berbeda untuk mencapai satu tujuan:

Memberikan pengalaman.

Dan pada akhirnya, itulah yang dibangun di Ekopedia —
bukan sekadar aplikasi, tapi pemahaman di balik keputusan arsitektur.