<script setup lang="ts">
const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

fetch('http://localhost/signIn', {
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

const router = useRouter()
const userInfo = ref({})

function getUserInfo() {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
  fetch('http://localhost/users/main/1', {
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

onBeforeMount(() => {
  getUserInfo()
})

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

  fetch('http://localhost/users/1/claimReward', requestOptions)
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
