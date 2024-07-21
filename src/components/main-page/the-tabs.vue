<script setup lang="ts">
const emit = defineEmits<{
  (e: 'tabSelected', tabHash: string): void
}>()

const tokenInfoTab: Ref<string> = ref('tokenInfoTab')
const rewardTab: Ref<string> = ref('rewardTab')
const marketTab: Ref<string> = ref('marketTab')
const stakingTab: Ref<string> = ref('stakingTab')

const selectedTab: Ref<string> = ref(tokenInfoTab.value)

onMounted(() => setActive(tokenInfoTab.value))

function setActive(tabHash: string) {
  selectedTab.value = tabHash
  emit('tabSelected', tabHash)
}
</script>

<template>
  <section class="content-wrapper">
    <button class="token-info" :class="{ active: selectedTab === tokenInfoTab }" @click="setActive(tokenInfoTab)">
      <img
        src="https://i.imgur.com/PNiRede.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Tokens</span>
      </div>
    </button>
    <button class="reward-info" :class="{ active: selectedTab === rewardTab }" @click="setActive(rewardTab)">
      <img
        src="https://i.imgur.com/fGIbKOG.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Reward</span>
      </div>
    </button>
    <button class="market-info" :class="{ active: selectedTab === marketTab }" @click="setActive(marketTab)">
      <img
        src="https://i.imgur.com/EY6B8o0.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Market</span>
      </div>
    </button>
    <button class="staking-info" :class="{ active: selectedTab === stakingTab }" @click="setActive(stakingTab)">
      <img
        src="https://i.imgur.com/OnBRXr0.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Staking</span>
      </div>
    </button>
  </section>
  <stake-pool v-if="selectedTab === tokenInfoTab" />
  <the-rewards v-if="selectedTab === rewardTab" />
  <the-market v-if="selectedTab === marketTab" />
  <the-staking v-if="selectedTab === stakingTab" />
</template>
