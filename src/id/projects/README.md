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
    url: /projects/erp.html
    preview: /assets/images/project/erp/erp-1.webp

  - name: Sistem Manajemen Proyek
    desc: Sistem Manajemen Proyek dari Perusahaan Konstruksi
    url: /projects/management.html
    preview: /assets/images/project/management/management-1.webp

freelances:
  - name: Sistem Keuangan
    desc: Sistem keuangan untuk sebuah perguruan tinggi di Lumajang
    url: /projects/finance.html
    preview: /assets/images/project/finance/finance-1.webp

personals:
  - name: DividEkopedia
    desc: Aplikasi web patungan
    url: /projects/dividekopedia
    logo: https://splitbill.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/dividekopedia
    preview: /assets/images/project/dividekopedia.webp
  - name: MoviEkopedia
    desc: Katalog film
    url: /projects/moviekopedia
    logo: https://movi.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/moviekopedia
    preview: /assets/images/project/moviekopedia.webp
  - name: AideEkopedia
    desc: Chatbot kecerdaan buatan
    url: /projects/aideekopedia
    logo: https://aide.ekopedia.id/favicon.ico
    preview: /assets/images/project/aideekopedia.webp

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