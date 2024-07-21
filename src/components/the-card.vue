<script setup lang="ts">
const props = defineProps(['ticket'])
</script>

<template>
  <div relative>
    <img
      loading="lazy"
      :src="ticket?.imageUri"
      alt="Icon description"
      class="cards-grid"
    >
    <div class="card-poolId" absolute bottom-0 left-1.5 text-white>
      <b shadow-black drop-shadow-2xl>
        Pool # {{ ticket?.pool }}
      </b>
    </div>
    <div class="card-ticket-id" absolute bottom-0 right-1.5 text-white>
      <b shadow-black drop-shadow-2xl>
        #{{ ticket?.id }}
      </b>
    </div>
    <div v-if="isActive" class="background-black rounded-[15px]" absolute left-0 top-0 />
    <div v-if="isActive" class="card-text-time left-[10%] top-[30%]" absolute text-white>
      12:37
    </div>
  </div>
</template>
