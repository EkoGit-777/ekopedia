import { sidebar } from "vuepress-theme-hope";

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
      link: "https://splitbill.ekopedia.id",
    },
    {
      text: "MoviEkopedia",
      icon: "https://movi.ekopedia.id/favicon.ico",
      link: "https://movi.ekopedia.id",
    },
  ],
});
