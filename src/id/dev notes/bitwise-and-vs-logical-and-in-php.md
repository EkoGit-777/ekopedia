---
description: Memahami perbedaan antara bitwise & dan logical && di PHP, dengan contoh nyata penggunaan bitmask untuk sistem permission pada legacy project.
cover: https://cdn.ekopedia.id/images/dev note/bitwise-and-vs-logical-and-in-php.webp
icon: code
date: 2026-08-27
star: true
category:
- Dev Note
tag: [Web Development, PHP]
---

# `&` vs `&&`: Bitwise AND vs Logical AND di PHP

Saat mengerjakan sebuah legacy project PHP, saya menemukan baris kode seperti ini:

```php
return ((int)$this->permission & (int)$permissions[$tocheck] ? true : false);
```

Sekilas, penggunaan satu `&` di sini terlihat mencurigakan.

Kebanyakan dari kita lebih familiar dengan `&&` ketika bekerja dengan kondisi di PHP, jadi wajar kalau muncul pertanyaan:

> "Apakah penggunaan satu `&` di sini memang benar?"

Jawabannya: **benar**.

Tetapi `&` dan `&&` sebenarnya melakukan dua hal yang sangat berbeda.

## `&&` — Logical AND

Double ampersand `&&` adalah **logical AND operator**.

Operator ini digunakan ketika kita ingin memastikan bahwa dua kondisi sama-sama bernilai true.

Contohnya:

```php
if ($isLoggedIn && $hasPermission) {
    // Allow access
}
```

Kondisi tersebut hanya akan bernilai true jika `$isLoggedIn` dan `$hasPermission` sama-sama bernilai `true`.

Sederhananya:

```text
true  && true  = true
true  && false = false
false && true  = false
false && false = false
```

Inilah operator yang biasanya kita gunakan ketika menggabungkan beberapa kondisi.

## `&` — Bitwise AND

Single ampersand `&` adalah **bitwise AND operator**.

Berbeda dengan `&&`, operator ini tidak membandingkan apakah dua nilai merupakan kondisi `true` atau `false`.

Sebaliknya, `&` membandingkan **setiap bit** dari kedua angka.

Contohnya:

```text
6  = 110
3  = 011
     ---
&    010
```

Hasilnya adalah `2`.

Setiap bit dibandingkan dengan bit pada posisi yang sama:

```text
1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
```

Sekilas, operasi seperti ini mungkin terasa tidak terlalu berguna untuk kondisi biasa.

Namun, operasi bitwise menjadi sangat berguna ketika sebuah angka digunakan untuk menyimpan beberapa **flag** sekaligus.

## Kenapa Permission Sering Menggunakan `&`?

Ini adalah hal yang terjadi pada legacy code yang saya temukan tadi.

Bayangkan kita memiliki beberapa permission:

```php
$READ   = 1; // 001
$WRITE  = 2; // 010
$DELETE = 4; // 100
```

Masing-masing permission menggunakan bit yang berbeda.

Seorang user bisa memiliki beberapa permission sekaligus dengan menggabungkannya:

```php
$userPermission = $READ | $WRITE;
```

Hasilnya:

```text
001
010
---
011
```

Jadi `$userPermission` memiliki nilai `3`.

Sekarang, bagaimana kita mengecek apakah user memiliki permission `WRITE`?

Kita bisa menggunakan:

```php
$userPermission & $WRITE
```

Hasilnya:

```text
011  // READ + WRITE
010  // WRITE
---
010
```

Hasilnya adalah `2`.

Karena `2` merupakan nilai yang bukan `0`, kita tahu bahwa user memiliki permission tersebut.

Bagaimana jika kita mengecek `DELETE`?

```text
011  // READ + WRITE
100  // DELETE
---
000
```

Hasilnya `0`, yang berarti user tidak memiliki permission `DELETE`.

Pendekatan seperti ini biasanya disebut **bitmask** atau **bit flags**.

## Kembali ke Legacy Code

Sekarang baris kode yang tadi kita temukan menjadi lebih masuk akal:

```php
return ((int)$this->permission & (int)$permissions[$tocheck] ? true : false);
```

Misalnya:

```php
$this->permission = 3;
$permissions[$tocheck] = 2;
```

Operasinya menjadi:

```text
3 & 2
```

atau dalam bentuk binary:

```text
011
010
---
010
```

Hasilnya adalah `2`.

Karena `2` merupakan nilai truthy di PHP, ternary expression tersebut akan menghasilkan:

```php
true
```

Sebaliknya, jika:

```php
$this->permission = 3;
$permissions[$tocheck] = 4;
```

maka:

```text
011
100
---
000
```

Hasilnya adalah `0`, sehingga expression tersebut menghasilkan:

```php
false
```

Dengan kata lain, kode tersebut sedang melakukan pengecekan:

> "Apakah permission yang sedang saya cari terdapat di dalam permission mask user?"

## Kenapa Ada `(int)`?

Kode tersebut juga melakukan explicit cast ke integer:

```php
(int)$this->permission
(int)$permissions[$tocheck]
```

Ini penting karena bitwise operation bekerja dengan nilai integer.

Dengan melakukan casting terlebih dahulu, kode tersebut memastikan kedua nilai diperlakukan sebagai integer sebelum operasi bitwise dilakukan.

Jadi:

```php
(int)$this->permission & (int)$permissions[$tocheck]
```

sangat berbeda dengan:

```php
(int)$this->permission && (int)$permissions[$tocheck]
```

Yang pertama membandingkan **bit**.

Yang kedua memeriksa apakah **kedua nilai merupakan truthy value**.

## Perbandingan Sederhana

Cara mudah untuk mengingat perbedaannya:

| Operator | Nama        | Kegunaan                      |
| -------- | ----------- | ----------------------------- |
| `&&`     | Logical AND | Menggabungkan kondisi boolean |
| `&`      | Bitwise AND | Membandingkan setiap bit      |

Misalnya:

```php
$a = 3;
$b = 2;
```

Dengan logical AND:

```php
$a && $b
```

Kedua nilai bukan `0`, sehingga hasilnya:

```php
true
```

Sedangkan dengan bitwise AND:

```php
$a & $b
```

PHP akan melakukan operasi terhadap representasi binary kedua angka tersebut:

```text
011
010
---
010
```

Hasilnya:

```php
2
```

Keduanya mungkin sama-sama dianggap "true" ketika digunakan dalam kondisi tertentu, tetapi proses yang menghasilkan nilai tersebut benar-benar berbeda.

## Pelajarannya

Saat pertama kali melihat single `&` pada permission check tersebut, saya sempat mengira itu mungkin typo atau penulisan yang tidak biasa.

Ternyata bukan.

Pelajaran pentingnya adalah **`&` dan `&&` tidak bisa dianggap sebagai operator yang sama**.

`&&` digunakan untuk logical condition:

> "Apakah kedua kondisi ini bernilai true?"

Sedangkan `&` digunakan untuk bitwise operation:

> "Bit mana yang terdapat pada kedua nilai?"

Ketika bekerja dengan permission system, feature flags, status flags, atau nilai lain yang menggunakan bitmask, `&` justru sering menjadi operator yang memang kita butuhkan.

Jadi, ketika menemukan single `&` di dalam kode PHP, jangan langsung menganggapnya sebagai typo.

Bisa jadi operator tersebut sedang melakukan sesuatu yang sangat berbeda dari `&&`—dan dalam permission system, justru itulah bagian terpenting dari logic-nya.