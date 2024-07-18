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
  <div class="header">
    <div class="main-img">
      <img
        loading="lazy"
        src="https://i.imgur.com/sv0YDsz_d.webp?maxwidth=760&fidelity=grand"
        alt="Description of main image"
        class="main-image"
      >
    </div>
  </div>
  <!-- SHAPKA END -->

  <!-- MAIN -->
  <div class="connect-section">
    <div class="info-wrapper">
      <span class="info">12</span>
      <img loading="lazy" src="https://i.imgur.com/67eheI6_d.webp?maxwidth=760&fidelity=grand" alt="Information icon" class="icon">
    </div>
    <!-- button -->
    <button class="claim-button-container">
      <span class="claim-button-container">Claim</span>
    </button>
    <!-- button -->
    <button class="status">
      5/27
    </button>
    <!-- Connect -->
    <button class="icon-container">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3f9de862394d4238f7ba420c6ed640656e154065f19e40e31f1f8a5317f407d?apiKey=5d085c7cdd73428593406abbf962b0e1&"
        alt="Icon description"
        class="icon-image"
      >
    </button>
    <button class="connect-button-container">
      <span class="connect-button-text">CONNECT</span>
    </button>
    <!-- Connect-user -->
  </div>

  <div class="main">
    <div class="card-wrapper-table">
      <div relative>
        <img
          loading="lazy"
          src="https://i.imgur.com/3BQEv8B_d.webp?maxwidth=760&fidelity=grand"
          alt="Icon description"
          class="cards-grid"
        >
        <div class="background-black rounded-[15px]" absolute left-0 top-0 />
        <div class="card-poolId" absolute bottom-0 left-1.5 text-white>
          <b shadow-black drop-shadow-2xl>
            Pool #
            <!-- {{ ticket.poolId }} -->

          </b>
        </div>
        <div class="card-ticket-id" absolute bottom-0 right-1.5 text-white>
          <b shadow-black drop-shadow-2xl>
            #152
            <!-- ticket.id -->

          </b>
        </div>
        <div class="card-text-time left-[10%] top-[30%]" absolute text-white>
          12:37
        </div>
      </div>
      <img
        loading="lazy"
        src="https://i.imgur.com/3BQEv8B_d.webp?maxwidth=760&fidelity=grand"
        alt="Icon description"
        class="cards-grid"
      >
      <img
        loading="lazy"
        src="https://i.imgur.com/3BQEv8B_d.webp?maxwidth=760&fidelity=grand"
        alt="Icon description"
        class="cards-grid"
      >
      <img
        loading="lazy"
        src="https://i.imgur.com/3BQEv8B_d.webp?maxwidth=760&fidelity=grand"
        alt="Icon description"
        class="cards-grid"
      >
      <img
        loading="lazy"
        src="https://i.imgur.com/3BQEv8B_d.webp?maxwidth=760&fidelity=grand"
        alt="Icon description"
        class="cards-grid"
      >
      <img
        loading="lazy"
        src="https://i.imgur.com/3BQEv8B_d.webp?maxwidth=760&fidelity=grand"
        alt="Icon description"
        class="cards-grid"
      >
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

  <!-- color #F5F0E5 in button -->
  <section class="content-wrapper">
    <div class="token-info">
      <img
        src="https://i.imgur.com/PNiRede.png"
        alt="Token Image"
        class="img-icon"
      >

      <div class="token-text">
        <span>Tokens</span>
      </div>
    </div>

    <div class="reward-info">
      <img
        src="https://i.imgur.com/fGIbKOG.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Reward</span>
      </div>
    </div>
    <div class="market-info">
      <img
        src="https://i.imgur.com/EY6B8o0.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Market</span>
      </div>
    </div>
    <div class="staking-info">
      <img
        src="https://i.imgur.com/OnBRXr0.png"
        alt="Token Image"
        class="img-icon"
      >
      <div class="token-text">
        <span>Staking</span>
      </div>
    </div>
  </section>
  <!-- menu knopok end -->

  <!-- INAS STAKE POL -->

  <section class="section-wrapper">
    <div class="card">
      <div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b451024c6abd8215dcb13e54d66b36a8476338627ad7d2ee1da3dd843dac32f6?apiKey=5d085c7cdd73428593406abbf962b0e1&"
          class="card-image"
          alt="Card Image"
        >
      </div>
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
    <div class="stake-container">
      <div class="stake">
        Stake
      </div>
      <div class="stake-grid">
        <div>
          12d
        </div>
        <div>3%</div>
        <div>pool #12</div>
        <div gap-1>
          100000
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b451024c6abd8215dcb13e54d66b36a8476338627ad7d2ee1da3dd843dac32f6?apiKey=5d085c7cdd73428593406abbf962b0e1&"
            class="card-image-stake"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
