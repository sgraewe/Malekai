<template>
  <header class="bg-white shadow">
    <div
      class="py-4 md:py-0 md:h-16 flex flex-col md:flex-row md:items-center justify-between px-6"
    >
      <header-brand />

      <nav class="flex md:h-full flex-col md:flex-row">
        <header-link
          v-for="item in menuItems"
          :key="item.title"
          :link-to="item.link"
          :link-titel="item.title"
          :link-icon="item.icon"
        />
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderBrand from './HeaderBrand'
import HeaderLink from './HeaderLink'

export default {
  components: {
    HeaderBrand,
    HeaderLink
  },
  data() {
    return {
      menuItems: [
        { title: 'Database', link: '/' },
        { title: 'Builds', link: '/test' },
        { title: 'Campaigns', link: '/test' },
        { title: 'Killboard', link: '/test' },
        { title: 'Login', icon: 'fab fa-discord', link: '/test' }
      ]
    }
  }
}
</script>
