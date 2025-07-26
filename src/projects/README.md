---
title: Projects
description: This is the list of prejects I've been working on
icon: briefcase
index: false
timeline: false
article: false
category:
  - Project

works:
  - name: Lightweight ERP For Retail
    desc: A lightweight ERP for retail with many branches in Surabaya
    url: /projects/erp.html
    preview: /assets/images/project/erp/erp-1.webp

  - name: Project Management System
    desc: Project Management System of Construction Company
    url: /projects/management.html
    preview: /assets/images/project/management/management-1.webp

freelances:
  - name: Finance System
    desc: A finance system for a college in Lumajang
    url: /projects/finance.html
    preview: /assets/images/project/finance/finance-1.webp

personals:
  - name: DividEkopedia
    desc: A splitbill web-app
    url: https://splitbill.ekopedia.id
    logo: https://splitbill.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/dividekopedia
    preview: /assets/images/project/dividekopedia.webp
  - name: MoviEkopedia
    desc: A movie catalouge
    url: https://movi.ekopedia.id
    logo: https://movi.ekopedia.id/favicon.ico
    repo: https://github.com/EkoGit-777/moviekopedia
    preview: /assets/images/project/moviekopedia.webp

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