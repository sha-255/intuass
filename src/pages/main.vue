<script setup lang="ts">
import { API_BASE_URL } from '~/.config'

const router = useRouter()
const userInfo = ref({})

onBeforeMount(() => {
  signIn()
  getUserInfo()
})

function signIn() {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const url = new URL(API_BASE_URL)
  url.pathname = '/signIn'

  fetch(url, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      address: 'sex777',
    }),
    redirect: 'follow',
  })
    .then(response => response.json())
    .then(result => localStorage.setItem('accessToken', result?.accessToken))
    .catch(error => console.error(error))
}

function getUserInfo() {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)

  const url = new URL(API_BASE_URL)
  url.pathname = '/users/main/1'

  fetch(url, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(response => response.json())
    .then((result) => {
      console.log(result)
      userInfo.value = result
    })
    .catch(error => console.error(error))

  provide('userInfo', userInfo)
}

function startGame() {
  router.push('/the-game')
}

function claim() {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  }

  const url = new URL(API_BASE_URL)
  url.pathname = '/users/1/claimReward'

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error(error))

  getUserInfo()
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
