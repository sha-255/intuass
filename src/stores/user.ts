import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const rawKey: Ref<string> = ref('')

  return { rawKey }
})
