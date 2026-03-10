---
description: Merancang pipeline import dan alasan mengapa temporary table menjadi solusi yang lebih scalable dibandingkan memproses data langsung di variabel aplikasi.
cover: /assets/images/dev note/temporary-table-for-import.webp
icon: code
date: 2026-03-10
star: true
category: Dev Note
tags: [Database, Architecture]
---

# Mengapa Menggunakan *Temporary Table* untuk Import, Bukan Variabel

Saat mengembangkan sistem import, muncul sebuah pertanyaan sederhana selama proses development:

> Mengapa kita menggunakan ***temporary table*** saat proses import, bukan menyimpan datanya di variabel saja?

Sekilas, menggunakan variabel terlihat sebagai solusi paling sederhana.  
Cukup load file, loop datanya, lalu proses.

Namun dalam praktiknya, ketika dataset mulai besar dan logika import semakin kompleks, pendekatan tersebut mulai menunjukkan keterbatasannya.

---

## Ide Awal: Cukup Gunakan Variabel

Pendekatan paling sederhana untuk melakukan import biasanya terlihat seperti ini:

```php
$data = read_csv($file);

foreach ($data as $row) {
    process($row);
}
```

Pendekatan ini bekerja dengan baik jika:
- Dataset kecil
- Logika transformasi sederhana
- Operasinya hanya insert langsung

Untuk script kecil atau tool internal, cara ini sering kali sudah cukup.

Namun ketika fitur import menjadi bagian dari production system, kompleksitasnya biasanya mulai bertambah.

---

## Ketika Import Mulai Menjadi Kompleks

Dalam sistem nyata, proses import jarang tetap sederhana.

Seiring waktu, pipeline import biasanya berkembang menjadi seperti ini:

```
Upload file
    ↓
Validasi struktur file
    ↓
Validasi business rule
    ↓
Transformasi field
    ↓
Cek duplikasi
    ↓
Merge ke tabel utama
```

Pada tahap ini, memproses semua data hanya dengan variabel di aplikasi menjadi semakin sulit untuk dikelola.

Di sinilah *temporary table* mulai terasa manfaatnya.

---

## *Temporary Table* sebagai Staging Layer

Di project yang sedang kukerjakan saat ini, alur import kurang lebih seperti ini:

```
CSV File
   ↓
Temporary Table (staging)
   ↓
Query Validasi
   ↓
Query Transformasi
   ↓
Insert / Update ke Main Table
```

Alih-alih langsung memasukkan data ke tabel produksi, kita menyimpannya terlebih dahulu di *temporary table*.

Layer staging ini memberikan beberapa keuntungan penting.

---

## 1. Bisa Memanfaatkan Kekuatan SQL Sepenuhnya

Ketika data berada di dalam tabel, kita bisa menggunakan SQL untuk melakukan banyak hal yang akan sulit (atau sangat berantakan) jika dilakukan dengan variabel.

Contohnya:

```SQL
SELECT *
FROM temp_import t
LEFT JOIN products p ON p.sku = t.sku
WHERE p.id IS NULL;
```

Query seperti ini memudahkan kita untuk mendeteksi:
- referensi yang tidak ada
- data duplikat
- relasi yang tidak valid

Jika dilakukan hanya dengan loop di aplikasi, logikanya bisa menjadi sangat kompleks.

---

## 2. Database Lebih Efisien Menangani Data Besar

Jika kita memuat ribuan atau jutaan baris data ke dalam memory aplikasi, beberapa risiko yang bisa terjadi adalah:
- penggunaan memory yang tinggi
- proses menjadi lebih lambat
- bahkan bisa mencapai batas memory limit

Database engine memang dirancang untuk memproses dataset besar secara efisien.

Dengan menyimpan data import di *temporary table*, kita membiarkan database melakukan pekerjaan yang memang menjadi kekuatannya.

---

## 3. Debugging Menjadi Jauh Lebih Mudah

Ini salah satu keuntungan yang sering diremehkan.

Ketika terjadi masalah pada proses import, kita bisa langsung memeriksa data staging:

```SQL
SELECT * FROM temp_import;
```

Kita bisa melihat secara jelas data apa yang sebenarnya diterima sistem sebelum menyentuh tabel produksi.

Jika menggunakan variabel, data tersebut biasanya hilang setelah eksekusi selesai, sehingga debugging menjadi jauh lebih sulit.

---

## 4. Pipeline Proses Menjadi Lebih Bersih

Pipeline import biasanya membutuhkan beberapa tahap pemrosesan.

Misalnya:

```
Raw Data
   ↓
Normalisasi format
   ↓
Validasi referensi
   ↓
Menghapus duplikasi
   ↓
Transformasi data
```

Dengan *temporary table*, setiap tahap bisa dijalankan sebagai query SQL yang terpisah dan jelas.

Ini membuat struktur pipeline lebih mudah dipahami dan lebih mudah dikembangkan di masa depan.

---

## 5. Integrasi Data Lebih Aman

Keuntungan lain dari pendekatan staging ini adalah dari sisi keamanan data.

Tabel produksi tidak langsung tersentuh oleh data mentah dari file import.

Data hanya akan dimasukkan ke tabel utama setelah semua proses validasi selesai.

Pendekatan ini mengurangi risiko data produksi menjadi rusak karena import yang gagal.

---

## Kapan Variabel Masih Cocok Digunakan?

Variabel tentu masih sangat berguna dalam banyak kasus.

Misalnya untuk:
- dataset kecil
- nilai konfigurasi
- iterasi sederhana
- counter sementara

Namun untuk proses import data terstruktur, terutama dalam sistem yang akan terus berkembang, *temporary table* biasanya menjadi pilihan yang lebih scalable.

---

## Penutup

Menggunakan *temporary table* memang terlihat seperti menambah satu langkah ekstra.

Namun setelah bekerja dengan pipeline import yang lebih kompleks, manfaatnya menjadi sangat jelas:
- arsitektur lebih rapi
- debugging lebih mudah
- performa lebih baik untuk dataset besar
- proses validasi lebih fleksibel

*Temporary table* berperan sebagai staging layer yang membuat proses import lebih terkontrol dan lebih mudah dirawat.

Terkadang solusi yang terlihat sedikit lebih kompleks di awal justru menjadi solusi yang paling scalable dalam jangka panjang.

Dan sistem import adalah salah satu tempat di mana pelajaran itu sering muncul kembali.