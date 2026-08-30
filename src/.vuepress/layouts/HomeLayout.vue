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
        :class="{'dark': $isDarkMode}">
        {{ heroInfo.text }}
      </h1>
      <div
        class="vp-blog-hero-description"
        :class="{'dark': $isDarkMode}">
        {{ heroInfo.tagline }}
      </div>
      <div class="button-container">
        <a
          class="route-link auto-link vp-hero-action primary no-external-link-icon"
          :class="{'dark': $isDarkMode}"
          href="/about/"
          aria-label="About Me">
          <VPIcon icon="user-tie" />
          {{languageStore.getViewText('layout', 'about')}}
        </a>
        <a
          class="route-link auto-link vp-hero-action secondary no-external-link-icon"
          :class="{'dark': $isDarkMode}"
          href="/projects/#my-personal-project"
          aria-label="My Projects">
          <VPIcon icon="briefcase" />
          {{languageStore.getViewText('layout', 'myprojects')}}
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
                <img class="vp-card-logo" src="https://cdn.ekopedia.id/icons/code.webp" aria-label="code-icon" loading="lazy" no-view="">
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
                <img class="vp-card-logo" src="https://cdn.ekopedia.id/icons/brain.webp" aria-label="brain-icon" loading="lazy" no-view="">
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
                <img class="vp-card-logo" src="https://cdn.ekopedia.id/icons/owl.webp" aria-label="owl-icon" loading="lazy" no-view="">
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

.vp-blog-hero-title {
  color: #FFD700;
  -webkit-text-stroke: 1px #191970;
  transition:  transform 0.25s ease-in-out 0.08s, opacity 0.25s ease-in-out 0.08s;
  transform: translateY(0px);
  opacity: 1;
}

.vp-blog-hero-title.dark {
  color: #D99B26;
  -webkit-text-stroke: 1px #0A2540;
}

.vp-blog-hero-description {
  padding: 0 12px;
  text-shadow: 1px 1px #FFD700;
  text-align: center;
  transform: 0.25s ease-in-out 0.12s, opacity 0.25s ease-in-out 0.12s;
  transform: translateY(0px);
  opacity: 1;
}

.vp-blog-hero-description {
  text-shadow: 1px 1px #D99B26;
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
  color: #191970;
}

.vp-hero-action.primary.dark {
  color: black;
  background: #D99B26;
}

.vp-hero-action.secondary {
  border-color: #191970;
  background: #191970;
  color: white;
}

.vp-hero-action.secondary.dark {
  border-color: #0A2540;
  background: #0A2540;
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