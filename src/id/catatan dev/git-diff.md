---
description: Perjalanan belajar sebagai developer tentang memahami git diff lebih dari sekadar baris merah dan hijau.
cover: /assets/images/dev note/git-diff.webp
icon: code
date: 2026-02-15
star: true
category: Dev Note
tags: [Web Development, Git]
---

# Hari di Mana Saya Sadar Bahwa Saya Belum Benar-Benar Memahami 'git diff'

Selama bertahun-tahun, saya menggunakan:

```bash
git diff
```

Hampir setiap hari.

Sebelum commit.
Sebelum push.
Sebelum review pull request orang lain.

Tapi kalau jujur — saya sebenarnya belum benar-benar memahami apa yang ditampilkan oleh `git diff`.

Saya hanya melihat baris merah dan hijau, lalu berpikir:

> Oke, sepertinya sudah benar.”

Sampai suatu hari, ketika saya mulai melakukan refactor pada code lama — terutama di project Laravel yang sudah berjalan cukup lama — saya menyadari sesuatu:

Kadang Git menampilkan seolah-olah *seluruh method dihapus lalu ditambahkan kembali*.

Dan itu membuat saya bingung.

---

## Pertama Kali Saya Panik

Saya melakukan refactor pada sebuah method sederhana.

**Sebelumnya**
```php
public function getFullName()
{
    return $this->first_name . ' ' . $this->last_name;
}
```

**Setelahnya**
```php
public function getFullName(): string
{
    $fullName = $this->first_name . ' ' . $this->last_name;

    return $fullName;
}
```

Tidak ada perubahan besar. Saya hanya ingin:
- Menambahkan *return type*
- Memecah *expression* agar lebih *readable*

Lalu saya menjalankan:
```bash
git diff
```

Dan Git menampilkan:
```diff
-public function getFullName()
-{
-    return $this->first_name . ' ' . $this->last_name;
-}
+public function getFullName(): string
+{
+    $fullName = $this->first_name . ' ' . $this->last_name;
+
+    return $fullName;
+}
```

Saya langsung berpikir:

> “Loh? Kok seolah-olah seluruh method dihapus?”

Padahal saya tidak menghapusnya.
Saya hanya memperbaikinya.

Di situlah saya sadar:

Saya belum benar-benar paham bagaimana Git “melihat” kode saya.

---

## Git Tidak Memahami PHP

Ini adalah perubahan mindset terbesar saya.

Git tidak memahami:
- PHP
- Laravel
- Method
- Refactor
- Clean Code

Git hanya memahami:
> Teks.

Git membandingkan baris demi baris. Itu saja.

Secara internal, Git mencoba mencari urutan baris yang paling mirip antara dua versi file.

Jika terlalu banyak baris berubah dalam satu blok, Git bisa memutuskan bahwa:

> Lebih sederhana untuk menghapus blok lama dan menambahkan blok baru.

Walaupun dari sudut pandang manusia, perubahan logikanya sangat kecil.

---

## Ketika Insert Tidak Terlihat Sebagai Insert

Contoh lain yang membuat saya berpikir ulang tentang cara saya refactor.

**Sebelumnya**
```php
if ($user) {
    processUser($user);
}
```

Saya ingin menggunakan *early return* agar lebih *clean*.

**Setelahnya**
```php
if (!$user) {
    return;
}

processUser($user);
```

Secara logika:
- Perilaku sama
- Struktur lebih rapi
- Mengurangi nesting

Tapi Git menampilkan:
```diff
-if ($user) {
-    processUser($user);
-}
+if (!$user) {
+    return;
+}
+
+processUser($user);
```

Lagi-lagi:
> Hapus semua.
> Tambah semua.

Karena secara struktur, hampir semua baris berubah.

Git tidak berpikir dalam konteks “refactor lebih clean”.
Git berpikir dalam konteks “kemiripan baris”.

---

## Masalah Sebenarnya Bukan di Git

Masalah muncul ketika kita mencampur terlalu banyak perubahan dalam satu commit.

Saya pernah melihat commit yang isinya:
- Menambahkan return type
- Mengubah indentation
- Mengganti nama variabel
- Mengubah logika
- Menghapus kode lama

Semua dalam satu commit.

Hasilnya?

Diff jadi sangat besar.

Ketika Git menampilkan delete + add, reviewer bisa panik:

> “Ini kenapa semuanya berubah?”

Padahal kenyataannya:
- 70% hanya formatting
- 20% perubahan struktur
- 10% perubahan perilaku

Dan justru 10% itulah yang paling berbahaya jika tidak diperhatikan.

---

## Apa yang Saya Lakukan Sekarang

Sejak memahami cara kerja `git diff`, saya mengubah kebiasaan saya.

### 1. Pisahkan Formatting dan Logic
Jika saya menjalankan formatter, saya *commit* terpisah.
*Commit* itu murni formatting.
Tidak boleh ada perubahan logika.

### 2. Refactor Secara Kecil dan Bertahap
Daripada mengubah 10 method sekaligus, saya lakukan:
- Satu method
- Satu tujuan
- Satu alasan perubahan

Diff menjadi jauh lebih mudah dibaca.

### 3. Selalu Review Diff Sendiri
Sekarang, `git diff` bukan sekadar tool.
Ia seperti cermin.

Sebelum commit, saya bertanya pada diri sendiri:
- Apakah perubahan ini sesuai dengan yang saya niatkan?
- Apakah ada perubahan tidak sengaja?
- Apakah saya mengubah terlalu banyak hal?
- Jika orang lain melihat diff ini, apakah mereka akan mengerti?

Kalau diff terlihat berantakan, biasanya cara berpikir saya juga berantakan.

---

## Pelajaran yang Saya Dapat

Ketika Git menampilkan:
> Hapus semua
> Tambah semua

Itu tidak selalu berarti:
> Semua logika berubah.

Itu berarti:
> Struktur berubah cukup signifikan sehingga algoritma pencocokan baris tidak menemukan kemiripan yang cukup.

Dan itu bukan kesalahan Git.

Sebagai developer, kita perlu sadar bahwa:
Clean code bukan hanya tentang bagaimana file terlihat sekarang.
Tapi juga tentang bagaimana perubahan itu terlihat dalam history.

---

## Git Diff Sebagai Kerangka Berpikir
Developer junior biasanya bertanya:
> “Apakah kodenya berjalan?”

Developer yang lebih berpengalaman bertanya:
> “Apa saja yang berubah?”

Dan developer yang lebih senior bertanya:
> “Kenapa perubahan ini dilakukan, dan apakah aman?”

`git diff` melatih kita untuk berpikir tentang dampak perubahan.

Sebagian besar bug production yang pernah saya temui bukan berasal dari fitur baru.
Tapi dari perubahan kecil pada kode lama.

Dan cara paling jujur untuk memahami perubahan adalah:
```bash
git diff
```

Bukan hanya melihat warna merah dan hijau.
Tapi memahami niat di balik perubahan.

---

## Refleksi Akhir

Hari ketika saya benar-benar memahami bagaimana Git melihat kode saya, adalah hari ketika saya mulai lebih berhati-hati dalam melakukan commit.
- Perubahan lebih kecil.
- History lebih bersih.
- Refactor lebih terarah.

Sekarang, ketika melihat delete + add dalam jumlah besar, saya tidak lagi panik.
Saya bertanya:
> “Apakah saya benar-benar menulis ulang ini — atau hanya menggeser strukturnya?”

Dan kesadaran kecil itu sudah menyelamatkan saya lebih dari sekali.