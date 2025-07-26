import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Ekopedia",
  description: "A portofolio page of Eko Sutrisno Adiguna",
  head: [
    ['script', {src: "https://analytics.ahrefs.com/analytics.js", 'data-key':"v97A0ssUGDkZSGAEHM1AIw", async: true}]
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
  shouldPrefetch: false
});
