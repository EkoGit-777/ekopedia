import { defineUserConfig } from "vuepress"
import { path } from "vuepress/utils"
import theme from "./theme.js"

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Ekopedia',
      description: 'A portofolio and blog website of Eko Sutrisno Adiguna',
    },
    '/id/': {
      lang: 'id-ID',
      title: 'Ekopedia',
      description: 'Sebuah website portfolio dan blog dari Eko Sutrisno Adiguna',
    },
  },
  head: [
    ['script', {src: "https://analytics.ahrefs.com/analytics.js", 'data-key':"v97A0ssUGDkZSGAEHM1AIw", async: true}]
  ],
  alias: {
    "@EmbedContainer": path.resolve(__dirname, "components/EmbedContainer.vue"),
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
  shouldPrefetch: false,
});
