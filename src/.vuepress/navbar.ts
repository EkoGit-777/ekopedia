import { navbar } from "vuepress-theme-hope";

export default navbar([
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
]);
