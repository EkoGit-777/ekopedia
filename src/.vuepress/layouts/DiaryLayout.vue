<script setup lang="ts">
import { ref } from "vue";
import { Layout } from "vuepress-theme-hope/client"

const isOpen = ref(false)
</script>
<template>
  <Layout>
    <template #tocBefore >
        <div class="vp-toc-header" @click="isOpen=!isOpen">
          Share
          <div :class="isOpen ? 'arrow down' :'arrow end'"></div>
        </div>
        <div class="vp-toc-wrapper" :class="{'open':isOpen}">
          <Share colorful />
        </div>
    </template>
  </Layout>
</template>