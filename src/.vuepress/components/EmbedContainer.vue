
<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  movieId: {
    type: [String, Number],
    required: true,
  },
  baseUrl: {
    type: String,
    default: 'https://movi.ekopedia.id',
  },
})

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'resize-embed') {
      const iframe = document.getElementById(`movie-embed-${props.movieId}`)
      if (iframe) {
        iframe.style.height = `${event.data.height}px`
      }
    }
  })
})
</script>

<template>
  <iframe
    :id="`movie-embed-${movieId}`"
    :src="`${baseUrl}/preview/${movieId}`"
    width="100%"
    style="max-width: 800px; border: none; border-radius: 12px; overflow: hidden;"
  ></iframe>
</template>