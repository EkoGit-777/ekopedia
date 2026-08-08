---
description: Memahami mengapa CSS vw dan % bisa menghasilkan lebar yang sama, tetapi berperilaku berbeda dalam layout dan horizontal scrolling.
cover: https://cdn.ekopedia.id/images/dev note/different-behaviour-between-vw-and-percent.webp
icon: code
date: 2026-08-08
star: true
category:
- Dev Note
tag: [Web Development, CSS]
---

# Ketika `vw` dan `%` Ternyata Tidak Sama

Saat mengerjakan lightbox untuk website saya, saya menemukan perilaku CSS yang cukup menarik ketika menggunakan `vw` dan `%`.

Awalnya, saya mengira kedua unit ini bisa digunakan secara bergantian selama hasil akhirnya memiliki lebar yang sama.

Ternyata, tidak selalu begitu.

## Masalahnya

Saya sedang mengerjakan fitur zoom pada gambar di dalam lightbox.

Gambar tersebut perlu diperbesar melebihi ukuran normalnya, sekaligus tetap memungkinkan pengguna melakukan horizontal scrolling ketika gambar melebihi area yang tersedia.

Saat mengimplementasikannya, saya mencoba menggunakan viewport unit dan percentage.

Misalnya:

```css
.lightbox-content img.zoomed {
    width: 150vw;
}
```

atau:

```css
.lightbox-content img.zoomed {
    width: 150%;
}
```

Tergantung ukuran container dan viewport, saya bisa memilih nilai yang menghasilkan lebar gambar yang terlihat sama.

Hal itu kemudian membuat saya bertanya:

> Kalau keduanya menghasilkan lebar yang sama, bukankah seharusnya perilakunya juga sama?

Jawabannya: tidak.

## `vw` dan `%` Memiliki Acuan yang Berbeda

Perbedaan pentingnya adalah **terhadap apa masing-masing unit tersebut dihitung**.

`vw` berarti **viewport width**.

Jadi:

```css
width: 100vw;
```

berarti elemen tersebut memiliki ukuran yang mengacu pada lebar viewport browser.

Sementara itu, `%` umumnya dihitung berdasarkan **containing block** dari elemen tersebut.

Jadi:

```css
width: 100%;
```

berarti elemen tersebut memiliki lebar sebesar 100% dari lebar containing block-nya.

Kedua nilai tersebut memang bisa menghasilkan ukuran dalam pixel yang sama, tetapi keduanya tetap menggunakan acuan yang berbeda.

Perbedaan ini menjadi penting ketika elemen berada di dalam layout yang memiliki ukuran dan perilaku overflow-nya sendiri.

## Bagian yang Menarik: Scrolling

Hal ini menjadi jauh lebih jelas ketika saya mencoba horizontal scrolling.

Dengan width menggunakan percentage, saya menemukan bahwa horizontal scrollbar berhenti tepat di ujung kanan gambar.

Sementara ketika menggunakan viewport unit, gambar terlihat memiliki lebar yang sama, tetapi area yang bisa di-scroll masih menyisakan sedikit ruang setelah gambar.

Awalnya, ini terasa aneh.

Kalau lebar gambarnya sama, kenapa area scrolling-nya berbeda?

Hal penting yang perlu diingat adalah bahwa **ukuran sebuah elemen dan ukuran area yang bisa di-scroll bukanlah hal yang sama**.

Browser menghitung layout berdasarkan keseluruhan geometry dari elemen dan containing element-nya. Setelah itu, overflow ditentukan berdasarkan hasil layout tersebut.

Karena itu, mengganti unit yang digunakan dapat mengubah hubungan antara gambar dan containing block-nya, meskipun lebar gambar yang terlihat di layar tampak sama.

## Cara Sederhana untuk Memahaminya

Misalnya viewport memiliki lebar 1000px.

Jika containing block dari sebuah elemen juga memiliki lebar 1000px, kedua deklarasi berikut bisa menghasilkan gambar dengan lebar yang sama:

```css
width: 100vw;
```

dan:

```css
width: 100%;
```

Dalam kondisi tersebut, hasil akhirnya memang sama-sama 1000px.

Tetapi secara konsep, keduanya tetap mengatakan hal yang berbeda.

`100vw` berarti:

> "Buat saya selebar viewport."

Sedangkan `100%` berarti:

> "Buat saya selebar containing block saya."

Kalau ukuran containing block berubah, kedua deklarasi tersebut belum tentu lagi menghasilkan ukuran yang sama.

Hal ini menjadi semakin penting pada component seperti lightbox, modal, gallery, carousel, dan layout lain yang ukuran viewport-nya tidak selalu sama dengan ukuran component-nya.

## Kenapa Ini Penting untuk Lightbox?

Lightbox merupakan contoh yang bagus karena biasanya memiliki beberapa lapisan layout:

```text
Viewport
└── Lightbox
    └── Scroll container
        └── Image
```

Gambar tersebut tidak berada langsung di dalam viewport.

Width dalam percentage dipengaruhi oleh elemen yang menjadi containing block-nya, sementara `vw` secara langsung mengacu pada viewport.

Ketika overflow dan scrolling ikut terlibat, perbedaan hubungan tersebut akhirnya bisa terlihat.

Itulah sebabnya hanya melihat ukuran akhir sebuah elemen terkadang belum cukup ketika melakukan debugging CSS.

Dua elemen bisa terlihat memiliki ukuran yang sama di layar, tetapi tetap memiliki hubungan yang berbeda dengan layout di sekitarnya.

## Pelajarannya

Pelajaran terbesar yang saya dapat dari kasus ini adalah:

> **Nilai yang terlihat sama belum tentu menghasilkan perilaku layout yang sama.**

Ketika memilih antara `%` dan `vw`, lebih baik memikirkan **terhadap apa ukuran tersebut seharusnya mengacu**, daripada mencari dua unit yang kebetulan menghasilkan ukuran pixel yang sama.

Gunakan `%` ketika ukuran elemen seharusnya mengikuti containing element.

Gunakan `vw` ketika ukuran elemen seharusnya mengikuti viewport.

Dan ketika melakukan debugging terhadap masalah overflow atau scrolling, jangan hanya membandingkan ukuran visual elemennya. Perhatikan juga hubungan antara elemen tersebut, containing block-nya, dan scroll container yang membungkusnya.

Ini adalah salah satu masalah CSS di mana asumsi awal saya adalah:

> "Lebarnya sama, jadi seharusnya perilakunya juga sama."

Tapi CSS kembali mengingatkan saya bahwa **konteks layout sama pentingnya dengan angka akhirnya.**