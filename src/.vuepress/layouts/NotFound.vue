<script setup lang="ts">
import {NotFound} from "vuepress-theme-hope/client"
import { useRouter } from "vuepress/client"

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <NotFound>
    <main id="main-content" class="vp-page not-found">
      <div class="not-found-hint">
        <p class="error-code">404</p>
        <h1 class="error-title">Page not found</h1>
        <p class="error-hint">How did we get here?</p>
      </div>
      <div class="button-container">
        <button type="button" class="vp-hero-action primary" @click="goBack">
          <VPIcon icon="circle-arrow-left" color="black" />
          Go back
        </button>
        <a
          class="route-link auto-link vp-hero-action secondary no-external-link-icon"
          href="/about/"
          aria-label="About Me">
          <VPIcon icon="house" color="white" />
          Take me home
        </a>
      </div>
    </main>
  </NotFound>
</template>