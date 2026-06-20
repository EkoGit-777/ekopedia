---
title: Proyek
description: Ini adalah daftar proyek yang telah saya kerjakan
icon: briefcase
index: false
timeline: false
article: false
category:
  - Project

works:
  - name: ERP Ringan Untuk Ritel
    desc: ERP ringan untuk retail dengan banyak cabang di Surabaya
    url: /id/projects/erp/
    preview: https://cdn.ekopedia.id/images/project/erp/erp-1.webp

  - name: Sistem Manajemen Proyek
    desc: Sistem Manajemen Proyek dari Perusahaan Konstruksi
    url: /id/projects/management/
    preview: https://cdn.ekopedia.id/images/project/management/management-1.webp

freelances:
  - name: Sistem Keuangan
    desc: Sistem keuangan untuk sebuah perguruan tinggi di Lumajang
    url: /id/projects/finance/
    preview: https://cdn.ekopedia.id/images/project/finance/finance-1.webp

personals:
  - name: DividEkopedia
    desc: Aplikasi web patungan
    url: /id/projects/dividekopedia/
    logo: https://splitbill.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/dividekopedia
    preview: https://cdn.ekopedia.id/images/project/dividekopedia.webp
  - name: MoviEkopedia
    desc: Katalog film
    url: /id/projects/moviekopedia/
    logo: https://movi.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/moviekopedia
    preview: https://cdn.ekopedia.id/images/project/moviekopedia.webp
  - name: AideEkopedia
    desc: Chatbot kecerdaan buatan
    url: /id/projects/aideekopedia/
    logo: https://aide.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/aideekopedia
    preview: https://cdn.ekopedia.id/images/project/aideekopedia.webp
  - name: ExpirEkopedia
    desc: Pelacak Tanggal Kadaluarsa
    url: /id/projects/expirekopedia/
    logo: https://expir.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/expirekopedia
    preview: https://cdn.ekopedia.id/images/project/expirekopedia.webp

---

## Project I did at work

<SiteInfo
  v-for="item in $frontmatter.works"
  :key="item.link"
  v-bind="item"
/>

## Project I did as freelancer

<SiteInfo
  v-for="item in $frontmatter.freelances"
  :key="item.link"
  v-bind="item"
/>

## My Personal Project

<SiteInfo
  v-for="item in $frontmatter.personals"
  :key="item.link"
  v-bind="item"
/>