<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog"
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
          About Me
        </a>
        <a class="route-link auto-link vp-hero-action secondary no-external-link-icon" href="/assets/documents/cv.pdf" download="cv-eko-sutrisno-adiguna.pdf" aria-label="My Resume">
          <VPIcon icon="file-pdf" color="white" />
          My Resume
        </a>
      </div>
    </template>

    <template #heroAfter>
      <div class="feature-wrapper">
        <h2 style="font-weight: bold;">What I Offer</h2>
        <div class="vp-feature">
          <div class="vp-features">
            <div class="vp-feature-item">
              <div class="feature-title-wrapper">
                <img class="vp-card-logo" src="/assets/icon/code.webp" aria-label="code-icon" loading="lazy" no-view="">
                <div class="feature-title">
                  <div class="vp-feature-title">Web Development</div>
                  <div style="font-weight: bolder;">Custom websites and full-stack solutions tailored to your business needs</div>
                </div>
              </div>
              <div class="vp-feature-details">
                I specialize in building robust, scalable web applications using Laravel and Vue.js — from admin panels to high-performance APIs and dynamic front-ends.
              </div>
            </div>
            <div class="vp-feature-item">
              <div class="feature-title-wrapper">
                <img class="vp-card-logo" src="/assets/icon/brain.webp" aria-label="brain-icon" loading="lazy" no-view="">
                <div class="feature-title">
                  <div class="vp-feature-title">Strategic & Consulting</div>
                  <div style="font-weight: bolder;">Helping you make the right tech decisions</div>
                </div>
              </div>
              <div class="vp-feature-details">
                With over 8 years in the industry, I provide guidance on architecture, tech stack selection, project planning, and performance optimization to align your tech with your business goals.
              </div>
            </div>
            <div class="vp-feature-item">
              <div class="feature-title-wrapper">
                <img class="vp-card-logo" src="/assets/icon/owl.webp" aria-label="owl-icon" loading="lazy" no-view="">
                <div class="feature-title">
                  <div class="vp-feature-title">Mentoring / Coaching</div>
                  <div style="font-weight: bolder;">Grow your skills with real-world guidance</div>
                </div>
              </div>
              <div class="vp-feature-details">
                Whether you're a junior developer or a team looking to level up, I offer mentoring on Laravel, Vue.js, clean code practices, and career growth in the tech industry.
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