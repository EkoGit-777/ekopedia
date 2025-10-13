import { catalog, sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/experience/': [
    '',
    'nusaraya',
    'gradin',
    'aldmic',
  ],
  '/projects/': [
    '',
    'erp',
    'management',
    'finance',
    {
      text: "DividEkopedia",
      icon: "https://splitbill.ekopedia.id/favicon.ico",
      link: "/projects/dividekopedia",
    },
    {
      text: "MoviEkopedia",
      icon: "https://movi.ekopedia.id/favicon.ico",
      link: "/projects/moviekopedia",
    },
    {
      text: "AideEkopedia",
      icon: "https://aide.ekopedia.id/favicon.ico",
      link: "/projects/aideekopedia",
    },
  ],
  '/dev notes/': [
    '',
    'laravel-rails',
    'searchkick',
    'delegate',
    'percent-cheat-sheet',
    'ampersand-colon',
  ]
});
