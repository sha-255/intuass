<script setup lang="ts">
const userInfo = inject('userInfo')
</script>

<template>
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
          {{ userInfo?.wallet?.inas }}
        </p>
        <div class="icon-wrapper">
          <button>
            <svg class="icon-small-left" width="50" height="50" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.00195312" width="33.6382" height="32.9787" rx="10" fill="#7FE1C0" />
              <path d="M16.4901 8.24805V8.24805C12.1188 8.24805 8.5752 11.7917 8.57519 16.1629L8.57519 16.4927C8.57519 21.0461 12.2665 24.7374 16.8199 24.7374V24.7374C21.3733 24.7374 25.0645 21.0461 25.0645 16.4927L25.0645 16.1629" stroke="white" />
              <path d="M23.0857 9.56641L16.1602 16.4919M16.1602 16.4919L16.1602 13.5238M16.1602 16.4919L19.458 16.4919" stroke="white" />
            </svg>
          </button>
          <button>
            <svg class="icon-small-right" width="50" height="50" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="33.8506" y="32.9785" width="33.6382" height="32.9787" rx="10" transform="rotate(-180 33.8506 32.9785)" fill="#7FE1C0" />
              <path d="M17.3605 24.7324V24.7324C21.7318 24.7324 25.2754 21.1888 25.2754 16.8175V16.4878C25.2754 11.9344 21.5841 8.24309 17.0307 8.24309V8.24309C12.4773 8.24309 8.78606 11.9344 8.78606 16.4878V16.8175" stroke="white" />
              <path d="M10.7649 23.4141L17.6904 16.4885M17.6904 16.4885V19.4566M17.6904 16.4885H14.3926" stroke="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="stake-container">
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
    </div> -->
    <div class="stake-container" w-200px p-1>
      <div class="stake">
        Stake
      </div>
      <div class="stake-grid">
        <div>
          0d
        </div>
        <div>0%</div>
        <div>pool #0</div>
        <div gap-1>
          0
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
