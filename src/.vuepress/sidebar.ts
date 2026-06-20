import { catalog, sidebar } from "vuepress-theme-hope";

export default sidebar({
  // en sidebar
  '/experience/': [
    '',
    '/experience/nusaraya/',
    '/experience/gradin/',
    '/experience/aldmic/',
  ],
  '/projects/': [
    '',
    '/projects/erp/',
    '/projects/management/',
    '/projects/finance/',
    {
      text: "DividEkopedia",
      icon: "https://splitbill.ekopedia.id/favicon.ico",
      link: "/projects/dividekopedia/",
    },
    {
      text: "MoviEkopedia",
      icon: "https://movi.ekopedia.id/favicon.ico",
      link: "/projects/moviekopedia/",
    },
    {
      text: "AideEkopedia",
      icon: "https://aide.ekopedia.id/favicon.ico",
      link: "/projects/aideekopedia/",
    },
    {
      text: "ExpirEkopedia",
      icon: "https://expir.ekopedia.id/favicon.ico",
      link: "/projects/expirekopedia/",
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
    'exceptions-vs-error-responses',
    'same-problem-different-status',
    'git-diff',
    'from-browser-to-native',
    'using-temporary-table-for-import',
    'closure-in-public-property',
    'inspect-print',
    'basic-mistake-in-legacy-project',
  ],
  
  // id sidebar
  '/id/experience/': [
    '',
    '/id/experience/nusaraya/',
    '/id/experience/gradin/',
    '/id/experience/aldmic/',
  ],
  '/id/projects/': [
    '',
    '/id/projects/erp/',
    '/id/projects/management/',
    '/id/projects/finance/',
    {
      text: "DividEkopedia",
      icon: "https://splitbill.ekopedia.id/favicon.ico",
      link: "/id/projects/dividekopedia/",
    },
    {
      text: "MoviEkopedia",
      icon: "https://movi.ekopedia.id/favicon.ico",
      link: "/id/projects/moviekopedia/",
    },
    {
      text: "AideEkopedia",
      icon: "https://aide.ekopedia.id/favicon.ico",
      link: "/id/projects/aideekopedia/",
    },
    {
      text: "ExpirEkopedia",
      icon: "https://expir.ekopedia.id/favicon.ico",
      link: "/id/projects/expirekopedia/",
    },
  ],
  '/id/dev notes/': [
    '',
    'laravel-rails',
    'searchkick',
    'delegate',
    'percent-cheat-sheet',
    'ampersand-colon',
    'device-pixel-ratio',
    'forbidden-wordpress-parameter',
    'import-csv-with-bom',
    'exceptions-vs-error-responses',
    'same-problem-different-status',
    'git-diff',
    'from-browser-to-native',
    'using-temporary-table-for-import',
    'closure-in-public-property',
    'inspect-print',
    'basic-mistake-in-legacy-project',
  ],
});
