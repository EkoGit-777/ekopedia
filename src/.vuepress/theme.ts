import { hopeTheme } from "vuepress-theme-hope"
import sidebar from "./sidebar.js"

export default hopeTheme({
  hostname: "https://ekopedia.id",

  author: {
    name: "Eko Sutrisno Adiguna",
    url: "https://ekopedia.id",
  },

  logo: "/logo.webp",

  docsDir: "src",

  locales: {
    '/': {
      navbar: [
        "/",
        "/about/",
        "/experience/",
        "/projects/",
        '/dev notes/',
        {
          text: "Classes",
          icon: "school",
          prefix: "/classes/",
          children: [
            {
              text: "Basic Programming",
              icon: "laptop",
              link: "https://www.superprof.co.id/programmer-mengajarkan-pemrograman-dasar-untuk-web-dan-desktop-untuk-siswa-smp-hingga-mahasiswa-dan-sederajat-surabaya-dan.html",
            },
            {
              text: "Web Developing",
              icon: "laptop-code",
              link: "https://www.superprof.co.id/seorang-web-developer-mengajarkan-bahasa-pemrograman-berbasis-web-menggunakan-framework-laravel-dan-vuejs-surabaya-dan-sekitarnya.html",
            },
          ]
        },
      ],
      blog: {
        description: "A Full-Stack Developer",
        intro: "/about/",
      },
    },
    '/id/': {
      navbar: [
        "/id/",
        "/id/about/",
        "/id/experience/",
        "/id/projects/",
        '/id/dev notes/',
        {
          text: "Kelas",
          icon: "school",
          prefix: "/classes/",
          children: [
            {
              text: "Dasar Pemrograman",
              icon: "laptop",
              link: "https://www.superprof.co.id/programmer-mengajarkan-pemrograman-dasar-untuk-web-dan-desktop-untuk-siswa-smp-hingga-mahasiswa-dan-sederajat-surabaya-dan.html",
            },
            {
              text: "Pengembangan Web",
              icon: "laptop-code",
              link: "https://www.superprof.co.id/seorang-web-developer-mengajarkan-bahasa-pemrograman-berbasis-web-menggunakan-framework-laravel-dan-vuejs-surabaya-dan-sekitarnya.html",
            },
          ]
        },
      ],
      blog: {
        description: "Seorang Full-Stack Developer",
        intro: "/id/about/",
      },
    },
  },

  blog: {
    medias: {
      Instagram: "https://www.instagram.com/meta.ekopedia?igsh=MXRsNmh2eXJyYmZ3bw==",
      GitHub: "https://github.com/EkoGit-777",
      Gmail: "mailto:eko.sutrisno.adiguna@gmail.com",
      Linkedin: "https://www.linkedin.com/in/eko-adiguna-7a550a176/",
      Superprof: {
        icon: "https://images.unidays.world/i/self-serve/customer/bciPW26eUUKqoORnZ_kQ8Fh0sK8Co6pIqFZmtuMUoL4=/logo/png/3f00fd25-8af9-43d9-b6ce-bb9265f7a8ff?w=640&format=webp",
        link: "https://www.superprof.co.id/programmer-mengajarkan-pemrograman-dasar-untuk-web-dan-desktop-untuk-siswa-smp-hingga-mahasiswa-dan-sederajat-surabaya-dan.html",
      },
    },
  },

  sidebar,

  footer: "MIT Licensed | Copyright © 2025-present Eko Sutrisno Adiguna",

  displayFooter: true,
  copyright: false,

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: true,

    components: {
      components: ['ArtPlayer', "Badge", "VPCard", 'Share', 'SiteInfo'],
      componentOptions: {
        share: {
          services: ['facebook', 'linkedin', 'twitter', 'whatsapp']
        }
      }
    },

    icon: {
      prefix: "fa6-solid:",
    },

    pwa: {
      cacheImage: true
    },

    comment: {
      provider: 'Giscus',
      repo: 'EkoGit-777/ekopedia',
      repoId: 'R_kgDOPBi4zw',
      category: 'General',
      categoryId: 'DIC_kwDOPBi4z84Cwtjx',
      mapping: 'pathname',
      strict: false,
      reactionsEnabled: true,
    }
  },
});
