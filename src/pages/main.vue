<script setup lang="ts">
interface Ticket {
  id: number
  poolId: number
  reloadTime: Date
  imageUri: string
}

onMounted(async () => {
  await getCards()
})

const tickets: Ref<Ticket[]> = ref([])

async function getCards() {
  tickets.value = await (await fetch('http://localhost:80/cards')).json()
}

const getDate = (date: string): string => date.split('T')[1].split('.')[0].slice(3, 8)
</script>

<template>
  <!-- SHAPKA -->
  <section class="container">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9705e7b747890da659615a342910978284e160d081bd1df967b14fa240c2a20?apiKey=5d085c7cdd73428593406abbf962b0e1&"
      alt="Description of main image"
      class="main-image"
    >
    <div class="connect-section">
      <button class="connect-button-container">
        <span class="connect-button-text">CONNECT</span>
      </button>
      <div class="icon-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3f9de862394d4238f7ba420c6ed640656e154065f19e40e31f1f8a5317f407d?apiKey=5d085c7cdd73428593406abbf962b0e1&"
          alt="Icon description"
          class="icon-image"
        >
      </div>
    </div>
  </section>
  <!-- SHAPKA END -->

  <!-- MAIN -->
  <div class="main">
    <div
      style="
        display: flex;
        border-radius: 0px 0px 10px 10px;
        border-color: #000;
        border: 2px;
        border-top: 0px;
        min-height: 30px;
        min-width: 100px;
        border-style: solid;
      "
    />
    <div style="display: flex">
      <div class="ticket-container">
        <div v-for="(ticket, idx) in tickets" :key="idx" class="ticket" relative rounded-xl bg-transparent>
          <img :src="ticket.imageUri" alt="ticket" relative rounded-xl>
          <div relative left--12 top--55 text-white>
            <b shadow-black drop-shadow-2xl>
              {{ getDate(ticket.reloadTime) }}
            </b>
          </div>
          <div relative left--8 top--13 text-white>
            <b shadow-black drop-shadow-2xl>
              Pool #
              {{ ticket.poolId }}
            </b>
          </div>
          <div relative left-9 top--19 text-white>
            <b shadow-black drop-shadow-2xl>
              #{{ ticket.id }}
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MAIN END -->

  <!-- button Start -->
  <div w-full>
    <button m-auto class="button-container button-text">
      START
    </button>
  </div>
  <!-- <button class="button-container">
    <span class="button-text">START</span>
  </button> -->
  <!-- <section class="button-container" tabindex="0" role="button" /> -->
  <!-- button start end -->
  <!-- menu knopok -->
  <section class="content-wrapper">
    <div class="content-container">
      <div class="token-info">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/705d840a5c01a665eb92da46a8cdf5691b4b39b4f1ff16ae642ec6a9935290ef?apiKey=5d085c7cdd73428593406abbf962b0e1&"
          alt="Token Image"
          class="img-icon"
        >
        <span>Tokens</span>
      </div>
      <div class="reward-info">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/547e22d3a19b4cf2ae8557203f17b555655348f8fb0e2b90c23c1b81586ccc11?apiKey=5d085c7cdd73428593406abbf962b0e1&"
          alt="Reward Image"
          class="img-icon"
        >
        <span>Reward</span>
      </div>
      <div class="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/118ea3421157b278096eb1e72eb3add6b177c02683bc8d48016b181900acad72?apiKey=5d085c7cdd73428593406abbf962b0e1&"
          alt=""
          class="img-icon"
        >
        <span>Market</span>
      </div>
      <div class="staking-info">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8731d32d78b04aaa9ae2529cef4135f1987c2028dd328517f107e4b3d4660585?apiKey=5d085c7cdd73428593406abbf962b0e1&"
          alt="Staking Image"
          class="img-icon-large"
        >
        <span>Staking</span>
      </div>
    </div>
  </section>
  <!-- menu knopok end -->

  <!-- INAS STAKE POL -->
  <section class="container">
    <div class="inner-container">
      <div class="section-wrapper">
        <article class="card-wrapper">
          <div class="card">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b451024c6abd8215dcb13e54d66b36a8476338627ad7d2ee1da3dd843dac32f6?apiKey=5d085c7cdd73428593406abbf962b0e1&"
              class="card-image"
              alt="Card Image"
            >
            <div class="card-content">
              <h2 class="card-title">
                INAS
              </h2>
              <p class="card-subtitle">
                18.65
              </p>
              <div class="icon-wrapper">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/667c7c779408eb5da90f9fab06186aa1a51bdec29b18c9a2da556237d480a344?apiKey=5d085c7cdd73428593406abbf962b0e1&"
                  class="icon-small"
                  alt="Small Icon 1"
                >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/506d326008a0a02f7ca50e6c3d8baa2dc568ed9caaf81d949eece1ba7611e965?apiKey=5d085c7cdd73428593406abbf962b0e1&"
                  class="icon-small"
                  alt="Small Icon 2"
                >
              </div>
            </div>
          </div>
        </article>
        <article class="card-wrapper">
          <div class="highlight-card">
            <div class="highlight-card-content">
              <h2 class="highlight-card-title">
                STAKE
              </h2>
              <p class="highlight-card-duration">
                12d
              </p>
              <p class="highlight-card-desc">
                pool #12
              </p>
            </div>
            <div class="highlight-card-info">
              <p class="highlight-card-rate">
                3%
              </p>
              <div class="metadata-wrapper">
                <p class="metadata-value">
                  100000
                </p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f98e0959f5b9c491f0b270487b18449bd093da14fa2811932510ec82fbc994?apiKey=5d085c7cdd73428593406abbf962b0e1&"
                  class="icon-tiny"
                  alt="Tiny Icon"
                >
              </div>
            </div>
          </div>
        </article>
        <article class="card-wrapper">
          <div class="important-card">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/074e58fe8ac662fe0f396c5d516502201d00b4fb1c61fe4ecb2e9421651ab3e3?apiKey=5d085c7cdd73428593406abbf962b0e1&"
              class="important-card-image"
              alt="Important Card Image"
            >
            <div class="important-card-content">
              <h2 class="important-card-title">
                POL
              </h2>
              <p class="important-card-subtitle">
                0.47
              </p>
              <div class="important-card-icons">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5d7fed9c4bc213453b49abbe605a391453910f957922e6dca45318392387ed1?apiKey=5d085c7cdd73428593406abbf962b0e1&"
                  class="important-card-icon"
                  alt="Card Icon 1"
                >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/41cb7ffd9b083f30263aede814b0d0798967b3240253a2a95bf17e9daac824b1?apiKey=5d085c7cdd73428593406abbf962b0e1&"
                  class="important-card-icon"
                  alt="Card Icon 2"
                >
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
