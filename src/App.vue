<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Intuass',
  meta: [
    {
      name: 'description',
      content: 'Crypto game',
    },
    // {
    //   name: 'theme-color',
    //   content: () => isDark.value ? '#00aba9' : '#ffffff',
    // },
    {
      name: 'theme-color',
      content: () => '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/prev.svg' : '/prev.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
