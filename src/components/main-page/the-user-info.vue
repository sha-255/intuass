<script setup lang="ts">
import { TonConnectUI } from '@tonconnect/ui'
import { TON_CONNECT_MANIFEST_URL } from '~/.config'

const props = defineProps(['info'])
const emit = defineEmits(['claim'])

onMounted(() => {
  const tonConnectUI = new TonConnectUI({
    manifestUrl: TON_CONNECT_MANIFEST_URL,
    buttonRootId: 'ton-connect',
  })
})
</script>

<template>
  <div class="connect-section" h-fit>
    <div class="info-wrapper" mb-auto mt-auto h-full w-full>
      <span class="info">{{ info?.wallet?.reward }}</span>
      <div mb-auto mt-auto>
        <img loading="lazy" src="https://i.imgur.com/67eheI6_d.webp?maxwidth=760&fidelity=grand" alt="Information icon" class="icon" inline aspect-square max-w-max>
      </div>
    </div>

    <button class="claim-button-container p-[5vw]" mb-auto mt-auto h-full w-full overflow-hidden pb-1 pt-1 text-center @click="emit('claim')">
      <span relative class="right-[3vw]">Claim</span>
    </button>

    <button v-if="info?.cards?.length" class="status" mb-auto mt-auto h-fit w-fit>
      {{ info?.cards?.length }}/{{ info?.cards?.length }}
    </button>

    <button class="icon-container" mb-auto mt-auto h-full w-full p-1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3f9de862394d4238f7ba420c6ed640656e154065f19e40e31f1f8a5317f407d?apiKey=5d085c7cdd73428593406abbf962b0e1&"
        alt="Icon description"
        class="icon-image"
        aspect-square
      >
    </button>
    <button v-if="info?.wallet?.address" class="connect-button-container" mb-auto mt-auto h-fit w-fit pb-1 pt-1>
      <span class="connect-button-text">{{ info?.wallet?.address }}</span>
    </button>

    <div v-if="!info?.wallet?.address" id="ton-connect" />
    <!-- <button v-else class="connect-button-container" mb-auto mt-auto h-fit w-fit pb-1 pt-1>
      <span class="connect-button-text">CONNECT</span>
    </button> -->
  </div>
</template>
