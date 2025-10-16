<script setup lang="ts">
import { ref } from "vue"
import { Layout } from "vuepress-theme-hope/client"
import { useLanguageStore } from "../stores/language"

const languageStore = useLanguageStore()
const isOpen = ref(false)
</script>
<template>
  <Layout>
    <template #tocBefore >
        <div class="vp-toc-header" @click="isOpen=!isOpen">
          {{languageStore.getViewText('layout', 'share')}}
          <div :class="isOpen ? 'arrow down' :'arrow end'"></div>
        </div>
        <div class="vp-toc-wrapper" :class="{'open':isOpen}">
          <Share colorful />
        </div>
    </template>
  </Layout>
</template>