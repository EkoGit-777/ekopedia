import { defineStore } from 'pinia'

interface State {
  selected: string
  en: {[k: string]: {[k: string]: string}}
  id: {[k: string]: {[k: string]: string}}
}

export const useLanguageStore = defineStore('Language', {
  state: (): State => ({
    selected: 'en',
    en: {
      'layout': {
        'about': 'About Me',
        'resume': 'My Resume',
        'offer': 'What I Offer',
        'offer1title': 'Web Development',
        'offer1short': 'Custom websites and full-stack solutions tailored to your business needs',
        'offer1long': 'I specialize in building robust, scalable web applications using Laravel and Vue.js — from admin panels to high-performance APIs and dynamic front-ends.',
        'offer2title': 'Strategic & Consulting',
        'offer2short': 'Helping you make the right tech decisions',
        'offer2long': 'With over 8 years in the industry, I provide guidance on architecture, tech stack selection, project planning, and performance optimization to align your tech with your business goals.',
        'offer3title': 'Mentoring / Coaching',
        'offer3short': 'Grow your skills with real-world guidance',
        'offer3long': "Whether you're a junior developer or a team looking to level up, I offer mentoring on Laravel, Vue.js, clean code practices, and career growth in the tech industry.",
        'share': 'Share',
      },
    },
    id: {
      'layout': {
        'about': 'Tentang Saya',
        'resume': 'Resume Saya',
        'offer': 'Apa yang Saya Tawarkan',
        'offer1title': 'Pengembangan Web',
        'offer1short': 'Situs web dan solusi dengan teknologi yang disesuaikan dengan kebutuhan bisnis Anda',
        'offer1long': 'Saya ahli dalam membangun aplikasi web yang kuat dan skalabel menggunakan Laravel dan Vue.js — dari panel admin hingga API berkinerja tinggi dan tampilan dinamis.',
        'offer2title': 'Konsultasi & Strategi',
        'offer2short': 'Membantu anda untuk menentukan keputusan teknis yang benar',
        'offer2long': 'Dengan lebih dari 8 tahun pengalaman di industri ini, saya memberikan panduan tentang arsitektur, pemilihan teknologi, perencanaan proyek, dan pengoptimalan kinerja untuk menyelaraskan teknologi Anda dengan tujuan bisnis Anda.',
        'offer3title': 'Bimbingan / Pelatihan',
        'offer3short': 'Tingkatkan keterampilan Anda dengan bimbingan nyata',
        'offer3long': "Baik Anda seorang pengembang junior atau tim yang ingin meningkatkan kemampuan, saya menawarkan bimbingan tentang Laravel, Vue.js, praktik kode bersih, dan pertumbuhan karier di industri teknologi.",
        'share': 'bagikan',
      },
    },
  }),
  getters: {
    getViewText: (state) => (path: string, key: string) => {
      const languageStore = useLanguageStore()
      const lang = languageStore.getCurrentLanguage
      const langData = state[lang]

      if (langData && langData[path] && langData[path][key]) {
        return langData[path][key]
      }

      // fallback: return English or empty string if not found
      return (state.en?.[path]?.[key]) || ''
    },
    getCurrentLanguage(): string{
      const isIndonesian =
        typeof window !== 'undefined' && window.location.pathname.startsWith('/id/')

      const lang = isIndonesian ? 'id' : 'en'
      return lang
    }
  },
  actions: {
  },
})