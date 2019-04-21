<template>
  <div>
    <ui-card
      link-to="/"
      img-url="https://source.unsplash.com/collection/325867/800x600"
      img-alt="Image Description"
      headline="Lorem ipsum dolor sit amet."
      category="Getting started"
      body="Lorem ipsum eu nunc commodo posuere et sit amet ligula."
      class="mb-12"
    />

    <div class="flex flex-col md:flex-row mb-12">
      <ui-card
        link-to="/"
        img-url="https://source.unsplash.com/collection/325867/800x600"
        img-alt="Image Description"
        headline="Lorem ipsum dolor sit amet."
        category="Getting started"
        body="Lorem ipsum eu nunc commodo posuere et sit amet ligula."
      />

      <ui-card
        link-to="/"
        img-url="https://source.unsplash.com/collection/325867/800x600"
        img-alt="Image Description"
        headline="Lorem ipsum dolor sit amet."
        category="Getting started"
        body="Lorem ipsum eu nunc commodo posuere et sit amet ligula."
        class="my-12 md:my-0 md:mx-12"
      />

      <ui-card
        link-to="/"
        img-url="https://source.unsplash.com/collection/325867/800x600"
        img-alt="Image Description"
        headline="Lorem ipsum dolor sit amet."
        category="Getting started"
        body="Lorem ipsum eu nunc commodo posuere et sit amet ligula."
      />
    </div>

    <div class="flex flex-col md:flex-row">
      <ui-card
        link-to="/"
        img-url="https://source.unsplash.com/collection/325867/800x600"
        img-alt="Image Description"
        headline="Lorem ipsum dolor sit amet."
        category="Getting started"
        body="Lorem ipsum eu nunc commodo posuere et sit amet ligula."
      />

      <ui-card
        link-to="/"
        img-url="https://source.unsplash.com/collection/325867/800x600"
        img-alt="Image Description"
        headline="Lorem ipsum dolor sit amet."
        category="Getting started"
        body="Lorem ipsum eu nunc commodo posuere et sit amet ligula."
        class="mt-12 md:mt-0 md:ml-12"
      />
    </div>
  </div>
</template>

<script>
import { UiCard } from '@/components/Card'

export default {
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  },
  components: {
    UiCard
  }
}
</script>
