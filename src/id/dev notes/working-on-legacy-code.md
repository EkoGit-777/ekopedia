---
description: Pelajaran dari debugging legacy code, memahami perubahan di masa lalu, menelusuri penyebab masalah, dan mengapa Git history sama pentingnya dengan kode itu sendiri.
cover: https://cdn.ekopedia.id/images/dev note/working-on-legacy-code.webp
icon: code
date: 2026-08-27
star: true
category:
- Dev Note
tag: [Web Development]
---

# Bekerja dengan Legacy Code: Kode Punya Sejarah

Bekerja dengan legacy project terkadang terasa seperti sedang melakukan arkeologi.

Kita menemukan potongan kode yang terlihat aneh.

Kita bertanya-tanya kenapa kode tersebut dibuat seperti itu.

Kita mencoba memahami apa yang sebenarnya dilakukan.

Dan terkadang, setelah berjam-jam melakukan investigasi, kita menemukan sesuatu yang tidak terduga:

**Ternyata kita sendiri yang menulis kode tersebut.**

Hal itu baru saja terjadi pada saya.

## Masalahnya

Saya sedang mengerjakan sebuah ticket yang berkaitan dengan nama student.

Requirement-nya sebenarnya cukup sederhana:

> Nama student yang memiliki special character, seperti accented character, harus bisa disimpan dengan benar.

Awalnya, saya mengira masalahnya berada di proses data cleaning atau validation yang sudah ada.

Jadi saya mulai menelusuri kodenya.

Semakin dalam saya melihatnya, semakin membingungkan masalahnya. Ada proses cleanup yang berjalan ketika student di-update, tetapi proses tersebut tidak berjalan seperti yang saya harapkan.

Akhirnya, saya menemukan sesuatu yang menjelaskan perilaku tersebut.

Proses cleanup ternyata dimatikan.

Itu terasa aneh.

Kenapa ada yang sengaja mematikannya?

Kemudian saya melihat history-nya.

Dan di situlah saya menyadari:

**Saya sendiri yang mematikannya.**

Bukan baru-baru ini.

Perubahan tersebut saya buat sekitar delapan bulan yang lalu.

## Bagian yang Memalukan

Jujur saja.

Saya merasa malu.

Saya sudah menghabiskan waktu untuk mencari tahu penyebab sebuah masalah di legacy system, dan ternyata masalah tersebut disebabkan oleh perubahan yang saya buat sendiri beberapa bulan sebelumnya.

Reaksi pertama saya kurang lebih:

> "Kenapa dulu saya melakukan itu?"

Tetapi setelah memikirkannya lagi, saya sadar bahwa ini justru menjadi pelajaran yang bagus tentang bekerja dengan legacy code.

Masalahnya bukan sekadar karena saya pernah membuat kesalahan.

Masalah yang lebih besar adalah **delapan bulan sudah berlalu**.

Saya sudah tidak memiliki context yang sama dengan ketika saya membuat perubahan tersebut.

Kodenya masih ada.

Alasan di balik perubahan tersebut sudah tidak saya ingat lagi.

## Kode Tidak Menceritakan Semuanya

Salah satu hal yang sulit dari legacy code adalah kita biasanya hanya melihat kondisi akhirnya, bukan perjalanan yang membuat kode tersebut menjadi seperti sekarang.

Bayangkan kita menemukan sesuatu seperti ini:

```php id="0a7x7h"
$cleanup = false;
```

Tanpa context, akan muncul banyak pertanyaan:

* Kenapa cleanup dimatikan?
* Apakah ini memang disengaja?
* Apakah ini workaround?
* Apakah ada bagian lain dari system yang bergantung padanya?
* Apakah ini bug?
* Apakah aman untuk menyalakannya kembali?

Hanya dengan melihat kode saat ini, belum tentu kita bisa mendapatkan jawabannya.

Tetapi Git history mungkin bisa membantu.

Commit yang memperkenalkan kode tersebut mungkin menunjukkan:

```text id="6w6mwy"
Fix student name handling
Disable cleanup during student update
```

Tiba-tiba, kode yang sebelumnya terlihat aneh menjadi lebih masuk akal.

Ada alasannya.

Mungkin alasan tersebut masih valid.

Mungkin juga sudah tidak relevan.

Tetapi setidaknya sekarang kita memiliki context yang dibutuhkan untuk melakukan investigasi dengan benar.

## Legacy Code Penuh dengan Context

Karena itu, saya mencoba untuk lebih berhati-hati ketika mengubah kode lama.

Kode yang terlihat aneh tidak otomatis berarti kode tersebut buruk.

Bisa saja kode tersebut merupakan:

* workaround untuk bug lama
* compatibility fix
* temporary solution yang akhirnya menjadi permanent
* requirement yang sekarang sudah tidak terlihat jelas
* workaround untuk system lain
* atau keputusan yang dibuat berdasarkan kondisi yang sudah berbeda

Yang penting adalah **kita tidak tahu mana yang benar hanya dengan melihat kodenya**.

Hal ini semakin terasa ketika bekerja dengan system yang sudah dikembangkan selama bertahun-tahun.

Kode tersebut sudah mengumpulkan berbagai keputusan yang dibuat oleh developer, team, dan terkadang bahkan oleh diri kita sendiri.

## Git History Adalah Bagian dari Dokumentasi

Salah satu tool yang sangat berguna ketika bekerja dengan legacy code adalah Git history.

Ketika menemukan sesuatu yang tidak masuk akal, jangan langsung berasumsi:

> "Kode ini salah."

Pertanyaan yang lebih baik adalah:

> "Kenapa kode ini dibuat seperti ini?"

Git dapat membantu menjawab pertanyaan tersebut.

Melihat commit yang memperkenalkan sebuah kode dapat membantu kita memahami:

* masalah apa yang sedang diselesaikan oleh developer saat itu
* requirement awalnya seperti apa
* perubahan lain apa yang dilakukan bersamaan
* apakah kode tersebut awalnya hanya temporary workaround
* dan terkadang bahkan diskusi yang melatarbelakangi keputusan tersebut

Command seperti:

```bash id="d3phoj"
git log
git log -p
git blame
```

bisa sangat berguna ketika melakukan investigasi terhadap kode lama.

`git blame` bahkan dapat menunjukkan **commit mana yang memperkenalkan sebuah baris kode tertentu**.

Tetapi tujuannya bukan untuk mencari siapa yang harus disalahkan.

Pengalaman saya sendiri justru menjadi contoh yang bagus.

Terkadang `git blame` memberi tahu kita:

> "Selamat. Ternyata kamu sendiri."

## Jangan Terlalu Cepat Mengubah Kode yang Aneh

Salah satu kesalahan yang mudah dilakukan ketika bekerja dengan legacy code adalah mengubah sesuatu hanya karena terlihat salah.

Misalnya kita menemukan:

```php id="c1ngq0"
if ($something) {
    // strange-looking logic
}
```

Kita mungkin berpikir:

> "Ini bisa dibuat lebih sederhana."

Lalu kita refactor.

Kodenya terlihat lebih bersih.

Test masih berjalan dengan baik.

Tetapi kemudian kita menemukan bahwa logic yang terlihat aneh tersebut ternyata ada karena bagian lain dari system bergantung padanya.

Ini bukan berarti kita tidak boleh melakukan refactoring pada legacy code.

Artinya, kita perlu memahami behavior-nya **sebelum** mengubahnya.

Implementasi yang aneh belum tentu merupakan implementasi yang tidak sengaja.

## Reproduce Sebelum Memperbaiki

Pelajaran lain yang saya dapat dari pengalaman ini adalah pentingnya melakukan reproduce terhadap masalah yang sebenarnya.

Ketika melakukan investigasi terhadap system lama, kita mudah tergoda untuk langsung masuk ke kode dan mulai melakukan perubahan.

Sebaliknya, saya mencoba memastikan tiga hal terlebih dahulu.

### 1. Apa behavior yang diharapkan?

Untuk ticket ini, behavior yang diharapkan cukup jelas:

> Nama student yang memiliki special character harus bisa disimpan dengan benar.

### 2. Apa behavior yang terjadi sekarang?

Misalnya:

```text id="l8i0up"
Input:
José

Expected:
José

Actual:
Jose
```

Behavior yang spesifik memberi kita sesuatu yang konkret untuk diinvestigasi.

### 3. Di mana behavior tersebut berubah?

Setelah itu kita bisa mengikuti perjalanan data di dalam system:

```text id="3k8a4w"
Input
  ↓
Validation
  ↓
Cleanup
  ↓
Processing
  ↓
Database
```

Daripada menebak-nebak di mana masalahnya berada, kita bisa mencari tahu dengan tepat di mana data tersebut berubah.

Dengan begitu, proses debugging menjadi jauh lebih sistematis.

## Dan Terkadang Bug-nya Adalah Buatan Kita Sendiri

Mungkin ini adalah pelajaran terpenting dari pengalaman saya:

> **Jangan berasumsi bahwa legacy code dibuat oleh orang lain.**

Walaupun project tersebut sudah lama.

Walaupun kita belum pernah menyentuh bagian kode tersebut selama bertahun-tahun.

Walaupun kodenya terlihat sangat asing.

Bisa saja kita yang membuatnya.

Atau kita yang pernah mengubahnya.

Dan kita mungkin sudah lupa kenapa.

Itu sebenarnya bukan sesuatu yang buruk. Hal tersebut merupakan konsekuensi yang cukup alami ketika kita bekerja dengan software dalam waktu yang lama.

Delapan bulan yang lalu, saya tahu kenapa saya membuat perubahan tersebut.

Hari ini, saya tidak ingat lagi.

Kodenya tetap sama.

**Context saya yang berubah.**

## Pelajarannya

Bekerja dengan legacy code bukan hanya tentang memahami apa yang dilakukan oleh sebuah kode.

Kita juga perlu memahami **kenapa kode tersebut menjadi seperti sekarang**.

Ketika menemukan sesuatu yang terlihat aneh, jangan langsung menulis ulang.

Lakukan investigasi.

Reproduce behavior-nya.

Trace data-nya.

Periksa test-nya.

Lihat Git history.

Cari commit yang memperkenalkan behavior tersebut.

Dan yang paling penting, coba pahami masalah yang sedang diselesaikan oleh developer sebelumnya.

Karena terkadang potongan legacy code yang misterius bukanlah kesalahan orang lain.

Terkadang kita membuka `git blame` dan menemukan:

> **Ternyata saya sendiri.**

Dan jujur saja, mungkin itu adalah salah satu pengingat paling berguna yang pernah saya dapatkan selama bekerja dengan legacy code.