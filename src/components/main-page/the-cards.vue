<script setup lang="ts">
const props = defineProps(['tickets'])

// const isActive = ref(true)

// interface Ticket {
//   id: number
//   poolId: number
//   reloadTime: Date
//   imageUri: string
// }

// const tickets: Ref<any[]> = ref([])
</script>

<template>
  <div class="main">
    <div v-if="!tickets?.length" class="card-wrapper-table">
      <div />
      <span>There are no cards</span>
    </div>
    <div v-else class="card-wrapper-table">
      <the-card v-for="ticket in tickets" :key="ticket?.id" :ticket="ticket" />
    </div>
  </div>
</template>
