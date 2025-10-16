<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog"
import { useLanguageStore } from "../stores/language";

const languageStore = useLanguageStore()
</script>

<template>
  <Blog>
    <template #heroInfo="heroInfo">
      <h1
        class="vp-blog-hero-title"
        style="color: #d19e00;transition:  transform 0.25s ease-in-out 0.08s, opacity 0.25s ease-in-out 0.08s; transform: translateY(0px); opacity: 1;">
        {{ heroInfo.text }}
      </h1>
      <div
        class="vp-blog-hero-description"
        style="padding: 0 12px;text-align: center; transform 0.25s ease-in-out 0.12s, opacity 0.25s ease-in-out 0.12s; transform: translateY(0px); opacity: 1;">
        {{ heroInfo.tagline }}
      </div>
      <div class="button-container">
        <a
          class="route-link auto-link vp-hero-action primary no-external-link-icon"
          href="/about/"
          aria-label="About Me">
          <VPIcon icon="user-tie" color="black" />
          {{languageStore.getViewText('layout', 'about')}}
        </a>
        <a class="route-link auto-link vp-hero-action secondary no-external-link-icon" href="/assets/documents/cv.pdf" download="cv-eko-sutrisno-adiguna.pdf" aria-label="My Resume">
          <VPIcon icon="file-pdf" color="white" />
          {{languageStore.getViewText('layout', 'resume')}}
        </a>
      </div>
    </template>

    <template #heroAfter>
      <div class="feature-wrapper">
        <h2 style="font-weight: bold;">{{languageStore.getViewText('layout', 'offer')}}</h2>
        <div class="vp-feature">
          <div class="vp-features">
            <div class="vp-feature-item">
              <div class="feature-title-wrapper">
                <img class="vp-card-logo" src="/assets/icon/code.webp" aria-label="code-icon" loading="lazy" no-view="">
                <div class="feature-title">
                  <div class="vp-feature-title">{{languageStore.getViewText('layout', 'offer1title')}}</div>
                  <div style="font-weight: bolder;">{{languageStore.getViewText('layout', 'offer1short')}}</div>
                </div>
              </div>
              <div class="vp-feature-details">
                {{languageStore.getViewText('layout', 'offer1long')}}
              </div>
            </div>
            <div class="vp-feature-item">
              <div class="feature-title-wrapper">
                <img class="vp-card-logo" src="/assets/icon/brain.webp" aria-label="brain-icon" loading="lazy" no-view="">
                <div class="feature-title">
                  <div class="vp-feature-title">{{languageStore.getViewText('layout', 'offer2title')}}</div>
                  <div style="font-weight: bolder;">{{languageStore.getViewText('layout', 'offer2short')}}</div>
                </div>
              </div>
              <div class="vp-feature-details">
                {{languageStore.getViewText('layout', 'offer2long')}}
              </div>
            </div>
            <div class="vp-feature-item">
              <div class="feature-title-wrapper">
                <img class="vp-card-logo" src="/assets/icon/owl.webp" aria-label="owl-icon" loading="lazy" no-view="">
                <div class="feature-title">
                  <div class="vp-feature-title">{{languageStore.getViewText('layout', 'offer3title')}}</div>
                  <div style="font-weight: bolder;">{{languageStore.getViewText('layout', 'offer3short')}}</div>
                </div>
              </div>
              <div class="vp-feature-details">
                {{languageStore.getViewText('layout', 'offer3long')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Blog>
</template>
<style>
h2 {
  border-bottom: 0;
  margin-bottom: 0;
}

.feature-wrapper {
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.feature-title-wrapper {
  display: flex;
  align-items: center;
}

.feature-title {
  padding: 12px 0;
}

.vp-hero-action.primary {
  color: black;
}

.vp-hero-action.secondary {
  border-color: #191970;
  background: #191970;
  color: white;
}

.button-container {
  padding: 12px 0;
  display: flex;
}

@media only screen and (max-width: 600px) {
  .button-container {
    flex-direction: column;
    column-gap: 8px;
  }
}

@media only screen and (min-width: 600px) {
  .button-container {
    column-gap: 12px;
  }
}
</style>