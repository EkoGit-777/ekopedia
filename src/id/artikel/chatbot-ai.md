---
description: Bagaimana Saya Membangun Chatbot Saya Sendiri (dan Apa yang Saya Pelajari Sepanjang Prosesnya).
title: Membangun Chatbot Saya Sendiri
cover: /assets/images/project/aideekopedia.webp
layout: DiaryLayout
icon: book-bookmark
date: 2025-10-07
category:
- Diary
- Career
---

## Alasan Saya Memulai

Saya selalu ingin membuat asisten AI yang sesuai dengan Ekosistem Ekopedia saya — sesuatu yang terasa personal, bermanfaat, dan sedikit rumit. Jadi saya mulai mengerjakan [AideEkopedia](https://aide.ekopedia.id/), chatbot AI saya sendiri, yang didukung oleh API Gemini Google. Mengapa Gemini? Saya belum pernah mencoba API AI lainnya. Tapi saya sering menggunakannya di ponsel. Jadi, saya ingin membuatnya sendiri.

## Awal Mula

Saya sudah pernah bilang ingin membuat chatbot AI sendiri. Tapi alasan sebenarnya saya memulainya adalah karena saya diminta membuatnya sebagai uji coba saat melamar pekerjaan. Syaratnya adalah saya harus menggunakan Nuxt 3, yang merupakan pertama kalinya saya menggunakannya. "Halo!" pertama dari chatbot saya sungguh ajaib — meskipun saya menghabiskan setengah hari hanya untuk memperbaiki skripnya karena panduan ChatGPT saya sudah ketinggalan zaman. Dan saya menyadarinya agak terlambat. Tapi ketika akhirnya merespons, saya tak bisa berhenti tersenyum. :star_struck:

## Tantangan

Sebagai pengembang web, jika Anda membayangkan cara membuat AI Chatbot, sepertinya sangat mudah. ​​Anda hanya perlu 1 halaman untuk mengirimkan perintah ke API, lalu menampilkan responsnya. Salah satu bagian tersulit adalah membuat respons tersebut tampak seperti diketik secara langsung dan juga menampilkannya dalam format yang baik. Rasanya seperti memberi bot sebuah kepribadian — bukan hanya menampilkan teks di layar. Untungnya, pada proyek yang saya kerjakan saat bekerja di Gradin, saya telah membuat komponen untuk menampilkan teks berformat markdown. Saya tinggal mengambil komponen tersebut dan menerapkannya pada proyek AI Chatbot saya, sehingga dapat menampilkan teks yang mudah dibaca.

<ArtPlayer
  src="assets/videos/chatbot-demo.webm"
  poster="assets/images/project/aideekopedia.webp"
/>

## Kemenangan Kecil

Ada banyak bug yang perlu saya perbaiki sebelum saya bisa memuaskan teman-teman yang menjadi penguji Chatbot AI saya. Seperti kotak input yang dinonaktifkan ketika teks yang dialirkan selesai, respons pertama yang gagal dialirkan, dll. Saya juga melakukan beberapa perbaikan seperti menyembunyikan bilah gulir yang buruk, dan membuat markdown ditampilkan dengan benar. Setiap kali saya memperbaiki masalah UI kecil — seperti bilah gulir yang merusak tata letak — rasanya seperti chatbot itu belajar untuk berdiri sendiri. :satisfied:

## Apa yang Saya Pelajari

Pengalaman ini mengingatkan saya bahwa AI terasa lebih pintar ketika terlihat lebih halus. Bahkan cara kata-kata muncul di layar mengubah cara kita memandang kecerdasannya. AI bukanlah sihir — melainkan lapisan logika dan panggilan API. Ketika Anda menampilkannya dengan benar, Anda dapat membuatnya terlihat lebih pintar dan lebih mumpuni.

## Selanjutnya

Perjalanan ini masih jauh dari selesai — selanjutnya, saya ingin [AideEkopedia](https://aide.ekopedia.id/) mengingat obrolan sebelumnya dan terasa benar-benar komunikatif. Ada juga opsi untuk memilih model AI yang akan digunakan. Selain itu, untuk saat ini [AideEkopedia](https://aide.ekopedia.id/) hanya bisa menampilkan respons dengan format teks. Sebenarnya, AideEkopedia bisa menerima respons seperti gambar atau bahkan kode, tetapi tetap hanya bisa memproses respons dengan format teks. Tapi untuk saat ini, saya senang akhirnya AideEkopedia bisa merespons. :grin: