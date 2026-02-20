---
description: Bagaimana Aku Membangun Chatbotku Sendiri (dan Apa yang Aku Pelajari Sepanjang Prosesnya).
title: Membangun Chatbotku Sendiri
cover: /assets/images/project/aideekopedia.webp
layout: DiaryLayout
icon: book-bookmark
date: 2025-10-07
category:
- Diary
tag:
- Career
---

## Alasan Aku Memulai

Aku selalu ingin membuat asisten AI yang sesuai dengan Ekosistem Ekopedia milikku — sesuatu yang terasa personal, bermanfaat, dan sedikit rumit. Jadi aku mulai mengerjakan [AideEkopedia](https://aide.ekopedia.id/), chatbot AI milikku sendiri, yang didukung oleh API Gemini Google. Mengapa Gemini? Aku belum pernah mencoba API AI lainnya. Tapi aku sering menggunakannya di ponsel. Jadi, aku ingin membuatnya sendiri.

## Awal Mula

Aku sudah pernah bilang ingin membuat chatbot AI sendiri. Tapi alasan sebenarnya aku memulainya adalah karena aku diminta membuatnya sebagai uji coba saat melamar pekerjaan. Syaratnya adalah aku harus menggunakan Nuxt 3, yang merupakan pertama kalinya aku menggunakannya. "Halo!" pertama dari chatbotku sungguh ajaib — meskipun aku menghabiskan setengah hari hanya untuk memperbaiki skripnya karena panduan ChatGPT sudah ketinggalan zaman. Dan aku menyadarinya agak terlambat. Tapi ketika akhirnya merespons, aku tak bisa berhenti tersenyum. :star_struck:

## Tantangan

Sebagai pengembang web, jika Anda membayangkan cara membuat AI Chatbot, sepertinya sangat mudah. ​​Anda hanya perlu 1 halaman untuk mengirimkan perintah ke API, lalu menampilkan responsnya. Salah satu bagian tersulit adalah membuat respons tersebut tampak seperti diketik secara langsung dan juga menampilkannya dalam format yang baik. Rasanya seperti memberi bot sebuah kepribadian — bukan hanya menampilkan teks di layar. Untungnya, pada proyek yang kukerjakan saat bekerja di Gradin, aku telah membuat komponen untuk menampilkan teks berformat markdown. Aku tinggal mengambil komponen tersebut dan menerapkannya pada proyek Chatbot AI milikku, sehingga dapat menampilkan teks yang mudah dibaca.

<ArtPlayer
  src="assets/videos/chatbot-demo.webm"
  poster="assets/images/project/aideekopedia.webp"
/>

## Kemenangan Kecil

Ada banyak bug yang perlu kuperbaiki sebelum aku bisa memuaskan teman-teman yang menjadi penguji Chatbot AI milikku. Seperti kotak input yang dinonaktifkan ketika teks yang dialirkan selesai, respons pertama yang gagal dialirkan, dll. Aku juga melakukan beberapa perbaikan seperti menyembunyikan bilah gulir yang buruk, dan membuat markdown ditampilkan dengan benar. Setiap kali aku memperbaiki masalah UI kecil — seperti bilah gulir yang merusak tata letak — rasanya seperti chatbot itu belajar untuk berdiri sendiri. :satisfied:

## Apa yang Aku Pelajari

Pengalaman ini mengingatkanku bahwa AI terasa lebih pintar ketika terlihat lebih halus. Bahkan cara kata-kata muncul di layar mengubah cara kita memandang kecerdasannya. AI bukanlah sihir — melainkan lapisan logika dan panggilan API. Ketika Anda menampilkannya dengan benar, Anda dapat membuatnya terlihat lebih pintar dan lebih mumpuni.

## Selanjutnya

Perjalanan ini masih jauh dari selesai — selanjutnya, aku ingin [AideEkopedia](https://aide.ekopedia.id/) mengingat obrolan sebelumnya dan terasa benar-benar komunikatif. Ada juga opsi untuk memilih model AI yang akan digunakan. Selain itu, untuk saat ini [AideEkopedia](https://aide.ekopedia.id/) hanya bisa menampilkan respons dengan format teks. Sebenarnya, AideEkopedia bisa menerima respons seperti gambar atau bahkan kode, tetapi tetap hanya bisa memproses respons dengan format teks. Tapi untuk saat ini, aku senang akhirnya AideEkopedia bisa merespons. :grin: