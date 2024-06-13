<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)
const password = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-user-avatar-filled inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/sha-255" target="_blank">
        {{ t('app.name') }}
      </a>
    </p>
    <!-- <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p> -->

    <div py-4 />

    <div class="col">
      <TheInput
        v-model="name"
        m-3
        :placeholder="t('intro.whats-your-name')"
        autocomplete="false"
        @keydown.enter="go"
      />
      <TheInput
        v-model="password"
        m-3
        :placeholder="t('intro.password')"
        autocomplete="false"
        @keydown.enter="go"
      />
    </div>
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: home
</route>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inp {
  margin: 5px;
}
</style>
