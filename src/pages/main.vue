<script setup lang="ts">
import { signIn } from '~/api/auth'
import { claim, getUserInfo } from '~/api/user'

const router = useRouter()
const userInfo = ref()

onBeforeMount(() => {
  userInfo.value = getUserInfo()
  provide('userInfo', userInfo)
})

function startGame() {
  router.push('/the-game')
}

// eslint-disable-next-line unused-imports/no-unused-vars
function penis(tickets: string): string {
  const zopa = 'penis'
  return `${zopa} govno`
}
</script>

<template>
  <the-header />
  <the-user-info :info="userInfo" @claim="claim" />
  <the-cards :tickets="userInfo?.cards" />
  <div w-full>
    <button m-auto class="button-container" @click="startGame">
      START
    </button>
  </div>
  <the-tabs />
</template>
