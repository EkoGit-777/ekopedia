import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/about/",
  "/experience/",
  "/projects/",
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
  // "/demo/",
  // {
  //   text: "Posts",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Apple",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "Apple1", icon: "pen-to-square", link: "1" },
  //         { text: "Apple2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "Banana",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "Cherry", icon: "pen-to-square", link: "cherry" },
  //     { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
