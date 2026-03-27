---
description: Kesulitan debug tampilan print di browser? Gunakan fitur emulate print di Chrome DevTools agar bisa inspect layout seperti biasa.
cover: /assets/images/dev note/inspect-print.webp
icon: code
date: 2026-03-28
star: true
category: Dev Note
tags: [CSS]
---

# Cara Saya Menemukan Cara Inspect Print Layout di Chrome

Saya sedang mencoba memperbaiki layout halaman saat di-print.

Di tampilan normal, semuanya terlihat baik-baik saja.  
Tapi begitu masuk ke print preview, layout-nya berantakan.

Masalahnya, saya tidak bisa inspect element di print preview.  
Jadi cukup sulit untuk tahu apa yang sebenarnya terjadi.

---

## Bagian yang Membingungkan
Saya sudah coba:
- menambahkan `width: 100%`
- mengatur `max-width`
- mengecek container

Tapi hasil print tetap tidak berubah.

Karena tidak bisa di-inspect, saya hanya menebak-nebak.

---

## Yang Saya Kira Awalnya
Saya sempat berpikir:
mungkin ini karena global CSS, atau ada style lain yang override saat print.

Tapi tanpa cara untuk melihat langsung, semuanya terasa seperti trial and error.

---

## Yang Sebenarnya Terjadi
Ternyata Chrome punya fitur untuk **emulate print media** di DevTools.

Begini caranya :
- Klik kanan pada area kosong halaman yang ditampilkan browser, lalu klik inspect. (atau tekan tombol F12)
- Ketika inspect element muncul, tekan CRTL+SHIFT+P. Akan ada input kecil muncul di atasnya.
- Ketik "render", lalu klik "Show Rendering". Window kecil lain akan muncul.
- Scroll ke bawah pada tab Rendering sampai kamu menemukan "Emulate CSS media type"
- Klik dropdown, pilih "print"

Dengan mengaktifkan mode ini, halaman akan dirender seolah-olah sedang di-print —  
dan yang paling penting, **bisa di-inspect seperti biasa**.

Jadi saya bisa:
- melihat style yang aktif saat print
- menemukan elemen yang menyebabkan masalah
- debug dengan lebih pasti, bukan menebak

---

## Pelajaran yang Didapat
**Gunakan fitur "Emulate CSS Media: print" di Chrome DevTools untuk debug print layout.**

Karena:
> Print preview tidak bisa di-inspect, tapi emulation bisa.

---

## Penutup
Kadang masalahnya bukan di CSS-nya —  
tapi di cara kita melihatnya.

Begitu tahu cara inspect-nya, debugging jadi jauh lebih mudah.