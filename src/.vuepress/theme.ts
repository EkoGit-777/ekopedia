import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://ekopedia.id",

  author: {
    name: "Eko Sutrisno Adiguna",
    url: "https://ekopedia.id",
  },

  logo: "/logo.webp",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "MIT Licensed | Copyright © 2025-present Eko Sutrisno Adiguna",

  displayFooter: true,
  copyright: false,


  blog: {
    description: "A Full-Stack Developer",
    intro: "/about/",
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

  // These features are enabled for demo, only preserve features you need here
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
      components: ["Badge", "VPCard", 'SiteInfo'],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    pwa: {
      cacheImage: true
    }
  },
});
