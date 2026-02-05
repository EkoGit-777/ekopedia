import { catalog, sidebar } from "vuepress-theme-hope";

export default sidebar({
  // en sidebar
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
    'device-pixel-ratio',
    'forbidden-wordpress-parameter',
    'import-csv-with-bom',
    'exceptions-vs-error-responses'
  ],
  
  // id sidebar
  '/id/pengalaman/': [
    '',
    'nusaraya',
    'gradin',
    'aldmic',
  ],
  '/id/proyek/': [
    '',
    'erp',
    'manajemen',
    'keuangan',
    {
      text: "DividEkopedia",
      icon: "https://splitbill.ekopedia.id/favicon.ico",
      link: "/id/proyek/dividekopedia",
    },
    {
      text: "MoviEkopedia",
      icon: "https://movi.ekopedia.id/favicon.ico",
      link: "/id/proyek/moviekopedia",
    },
    {
      text: "AideEkopedia",
      icon: "https://aide.ekopedia.id/favicon.ico",
      link: "/id/proyek/aideekopedia",
    },
  ],
  '/id/catatan dev/': [
    '',
    'laravel-rails',
    'searchkick',
    'delegate',
    'percent-cheat-sheet',
    'ampersand-colon',
    'device-pixel-ratio',
  ],
});
