<template>
  <nuxt-link
    :to="linkTo"
    class="flex items-center h-10 md:h-full text-sm md:ml-2 md:ml-10 text-gray-900 hover:text-purple-700 font-bold uppercase no-underline tracking-wide"
  >
    <i v-if="linkIcon" :class="linkIcon" class="mr-3 text-2xl"></i>
    {{ linkTitel }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '/'
    },
    linkTitel: {
      type: String,
      default: ''
    },
    linkIcon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
a.is-active {
  @apply text-purple-700;
}
</style>
