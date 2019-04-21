<template>
  <div>
    <app-header />

    <div class="container px-6 md:px-0 my-12">
      <nuxt />
    </div>

    <app-footer />
  </div>
</template>

<script>
import { AppHeader } from '@/components/Header'
import { AppFooter } from '@/components/Footer'

export default {
  head: {
    bodyAttrs: {
      class: 'font-sans leading-normal tracking-normal bg-gray-100'
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
