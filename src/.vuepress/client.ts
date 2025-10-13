import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import HomeLayout from "./layouts/HomeLayout.vue"
import DiaryLayout from "./layouts/DiaryLayout.vue"

export default defineClientConfig({

  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
  },

  layouts: {
    HomeLayout,
    DiaryLayout,
  },
});