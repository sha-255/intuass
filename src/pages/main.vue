<script setup lang="ts">
import { CHAIN, TonConnectUI, toUserFriendlyAddress } from '@tonconnect/ui'
import { TON_CONNECT_MANIFEST_URL } from '~/.config'
import { signIn } from '~/api/auth'

const router = useRouter()
const userInfo = ref()
const wallet = ref()

onMounted(async () => {
  const tonConnectUI = new TonConnectUI({
    manifestUrl: TON_CONNECT_MANIFEST_URL,
    buttonRootId: 'ton-connect',
  })
  setTimeout(async () => {
    try {
      window.tcui = tonConnectUI
      window.connector = window.tcui?.connector
      window.wallet = window.tcui?.wallet
      window.hex = window.tcui?.wallet?.account.address
      wallet.value = toUserFriendlyAddress(window.tcui?.wallet?.account.address || '', tonConnectUI?.account?.chain === CHAIN.TESTNET)
      window.raw = toUserFriendlyAddress(window.tcui?.wallet?.account.address || '', tonConnectUI?.account?.chain === CHAIN.TESTNET)
    }
    catch (er) {
      console.error(er)
    }
    userInfo.value = (await signIn(window.raw))?.user
    console.log('uinf', userInfo.value)
  }, 1_000)
  provide('userInfo', userInfo)
})

function startGame() {
  // router.push('/the-game')
}

// eslint-disable-next-line unused-imports/no-unused-vars
function penis(tickets: string): string {
  const zopa = 'penis'
  return `${zopa} govno`
}

function claim() {}
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
