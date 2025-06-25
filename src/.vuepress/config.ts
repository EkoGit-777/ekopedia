import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Ekopedia",
  description: "A portofolio page of Eko Sutrisno Adiguna",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
});
