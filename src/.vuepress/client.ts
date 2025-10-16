import { defineClientConfig } from "vuepress/client"
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js"
import HomeLayout from "./layouts/HomeLayout.vue"
import DiaryLayout from "./layouts/DiaryLayout.vue"
import { createPinia } from "pinia";
// import NotFound from "./layouts/NotFound.vue"

export default defineClientConfig({

  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
  },
  enhance({app}){
    const pinia = createPinia()
    app.use(pinia)
  },
  layouts: {
    HomeLayout,
    DiaryLayout,
    // NotFound, // save for later
  },
});