<script setup lang="ts">
// import Gallery from 'vue-gallery/src/component/gallery.vue'

const props = defineProps(['tickets'])
const inventoryOpen = ref(true)

// const index = ref(null)

// const images = ref([
//   'https://dummyimage.com/800/ffffff/000000',
//   'https://dummyimage.com/1600/ffffff/000000',
//   'https://dummyimage.com/1280/000000/ffffff',
//   'https://dummyimage.com/400/000000/ffffff',
// ])

const selectedCardId = ref(Number.NaN)
const selectedCard = ref()

watch(selectedCardId, (value: number) => {
  if (Number.isNaN(value))
    return
  inventoryOpen.value = false
  selectedCard.value = props?.tickets[value]
})

function closePreview() {
  inventoryOpen.value = true
  selectedCardId.value = Number.NaN
}

// const isActive = ref(true)

// interface Ticket {
//   id: number
//   poolId: number
//   reloadTime: Date
//   imageUri: string
// }

// const tickets: Ref<any[]> = ref([])
</script>

<template>
  <div v-if="inventoryOpen" class="main">
    <!-- <div>
      <Gallery :images="images" :index="index" @close="index = null" />
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        class="image"
        :style="{ backgroundImage: `url(${image})`, width: '300px', height: '200px' }"
        @click="index = imageIndex"
      />
    </div> -->
    <div v-if="!tickets?.length" class="card-wrapper-table">
      <div />
      <span>There are no cards</span>
    </div>
    <div v-else class="card-wrapper-table">
      <the-card v-for="(ticket, idx) in tickets" :key="ticket?.id" :ticket="ticket" @click="selectedCardId = idx" />
    </div>
  </div>
  <div v-else class="main-all">
    <div class="main">
      <div content-center>
        <div relative>
          <button absolute left-0 top-0 @click="closePreview">
            <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-info-back">
              <path d="M12.2138 52V41.57H16.6098C17.3004 41.57 17.8884 41.6913 18.3738 41.934C18.8684 42.1673 19.2464 42.5033 19.5078 42.942C19.7784 43.3713 19.9138 43.894 19.9138 44.51C19.9138 44.986 19.7831 45.434 19.5218 45.854C19.2698 46.2647 18.8638 46.6053 18.3038 46.876V45.994C18.8171 46.19 19.2231 46.4327 19.5218 46.722C19.8204 47.0113 20.0304 47.3333 20.1518 47.688C20.2731 48.0427 20.3338 48.416 20.3338 48.808C20.3338 49.8067 20.0024 50.5907 19.3398 51.16C18.6864 51.72 17.7764 52 16.6098 52H12.2138ZM14.1178 50.32H16.8058C17.3004 50.32 17.6924 50.1847 17.9818 49.914C18.2804 49.634 18.4298 49.2653 18.4298 48.808C18.4298 48.3507 18.2804 47.982 17.9818 47.702C17.6924 47.422 17.3004 47.282 16.8058 47.282H14.1178V50.32ZM14.1178 45.616H16.7078C17.0998 45.616 17.4124 45.504 17.6458 45.28C17.8791 45.0467 17.9958 44.748 17.9958 44.384C17.9958 44.02 17.8791 43.7307 17.6458 43.516C17.4124 43.3013 17.0998 43.194 16.7078 43.194H14.1178V45.616ZM23.7795 52.168C23.2475 52.168 22.7855 52.0793 22.3935 51.902C22.0015 51.7247 21.6981 51.4727 21.4835 51.146C21.2688 50.81 21.1615 50.4227 21.1615 49.984C21.1615 49.564 21.2548 49.1907 21.4415 48.864C21.6281 48.528 21.9175 48.248 22.3095 48.024C22.7015 47.8 23.1961 47.6413 23.7935 47.548L26.2855 47.142V48.542L24.1435 48.906C23.7795 48.9713 23.5088 49.088 23.3315 49.256C23.1541 49.424 23.0655 49.6433 23.0655 49.914C23.0655 50.1753 23.1635 50.3853 23.3595 50.544C23.5648 50.6933 23.8168 50.768 24.1155 50.768C24.4981 50.768 24.8341 50.6887 25.1235 50.53C25.4221 50.362 25.6508 50.1333 25.8095 49.844C25.9775 49.5547 26.0615 49.2373 26.0615 48.892V46.932C26.0615 46.6053 25.9308 46.3347 25.6695 46.12C25.4175 45.896 25.0815 45.784 24.6615 45.784C24.2695 45.784 23.9195 45.8913 23.6115 46.106C23.3128 46.3113 23.0935 46.5867 22.9535 46.932L21.4555 46.204C21.6048 45.8027 21.8381 45.4573 22.1555 45.168C22.4821 44.8693 22.8648 44.636 23.3035 44.468C23.7421 44.3 24.2181 44.216 24.7315 44.216C25.3568 44.216 25.9075 44.3327 26.3835 44.566C26.8595 44.79 27.2281 45.1073 27.4895 45.518C27.7601 45.9193 27.8955 46.3907 27.8955 46.932V52H26.1595V50.698L26.5515 50.67C26.3555 50.9967 26.1221 51.272 25.8515 51.496C25.5808 51.7107 25.2728 51.8787 24.9275 52C24.5821 52.112 24.1995 52.168 23.7795 52.168ZM32.9886 52.168C32.2326 52.168 31.5512 51.9953 30.9446 51.65C30.3472 51.2953 29.8759 50.8193 29.5306 50.222C29.1852 49.6153 29.0126 48.934 29.0126 48.178C29.0126 47.422 29.1852 46.7453 29.5306 46.148C29.8759 45.5507 30.3472 45.0793 30.9446 44.734C31.5512 44.3887 32.2326 44.216 32.9886 44.216C33.5299 44.216 34.0339 44.314 34.5006 44.51C34.9672 44.6967 35.3686 44.958 35.7046 45.294C36.0499 45.6207 36.2972 46.0127 36.4466 46.47L34.8366 47.17C34.6966 46.7873 34.4586 46.4793 34.1226 46.246C33.7959 46.0127 33.4179 45.896 32.9886 45.896C32.5872 45.896 32.2279 45.994 31.9106 46.19C31.6026 46.386 31.3599 46.6567 31.1826 47.002C31.0052 47.3473 30.9166 47.744 30.9166 48.192C30.9166 48.64 31.0052 49.0367 31.1826 49.382C31.3599 49.7273 31.6026 49.998 31.9106 50.194C32.2279 50.39 32.5872 50.488 32.9886 50.488C33.4272 50.488 33.8099 50.3713 34.1366 50.138C34.4632 49.9047 34.6966 49.592 34.8366 49.2L36.4466 49.928C36.2972 50.3573 36.0546 50.7447 35.7186 51.09C35.3826 51.426 34.9812 51.692 34.5146 51.888C34.0479 52.0747 33.5392 52.168 32.9886 52.168ZM37.5681 52V41.402H39.4021V48.346L38.7021 48.136L42.2861 44.384H44.5681L41.7541 47.45L44.6241 52H42.5241L40.0321 48.052L41.1241 47.828L38.8281 50.292L39.4021 49.172V52H37.5681Z" fill="black" />
              <rect x="8.5" y="0.5" width="39" height="39" rx="19.5" fill="white" stroke="black" />
              <rect x="14" y="5" width="30" height="30" fill="url(#pattern0_409_801)" />
              <defs>
                <pattern id="pattern0_409_801" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_409_801" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_409_801" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB1oSURBVHic7d15sO53XR/w9/cmLJoEQ4tiEdFik6gpm2KoDKMIrVr3cZRgAmJbxXVgqLiMM6XYdlBn2mmQQqN1SoSEJVKdseCeiMGFIVIjm1nYLBIDNEDIzdzsn/5xzg3nJnc75zy/3/e3vF4zZ3LuPc/y/if38z6f7+95nlZVAQDW5UDvAADA+BQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFbo1N4BoJfW2oOTfFmSL03ysCSnJzljx9fnJjmU5DNJbt3+7+Hv/z7JDVV1aPTgABvQqqp3BhhUa+2UJF+V5ClJzt7x9Zgkp+zjoSvJR5Jcv+Pr3Un+vKpu309mgKEpACzO9sB/UpKnJ/mGJE/L1m/4Y7kjyZ8nuXL76x1VdfeIzw9wQgoAi7A99J+Z5MIk35nk8/omOsLBJH+U5NIkb66qOzrnAVAAmLfW2nnZGvrnJ3lk5zgn41NJLk/y2qr6s95hgPVSAJid7Yv3npfkJ5Oc0znOfnwgycVJLq6qg73DAOuiADAbrbXTkvxwtgb/ozrH2aSbk1yU5BVVdUvvMMA6KABMXmvtzCQvTPKCJP+gc5wh3ZLkFUkuqqqbe4cBlk0BYLJaay3JDyT5pSSf3zfNqG5N8tIkv+zVA8BQFAAmqbX2pCSvTPK1vbN09J4kP1ZVb+sdBFgebwXMpLTWzmyt/bckV2fdwz9J/mmSq1prv95a+4LeYYBlsQFgMlprX5/kdVnWBX6b8ukkP1JVb+wdBFgGGwC6a60daK29JMkVMfyP5cwkb2itXdxae2jvMMD82QDQVWvtC5NcluQZvbPMyLuSPKuqrusdBJgvGwC6aa09I8lfx/DfrccneWdr7Tm9gwDzpQDQRWvtwiS/l8TFbXtzWpLXttb+fe8gwDw5AmB0rbUXJfkvSVrvLAvxyiQvqKp7ewcB5kMBYDTbb+zzi0l+uneWBXpjku+vqjt7BwHmQQFgFK21U5P8WrY+xIdh/EGS766q23oHAaZPAWBw28P/9Um+p3eWFbgiybfYBAAn4iJABmX4j+6Z2bo40P/bwHH5R4LBGP7dPCvJL/cOAUybAsAgDP/ufry19u96hwCmyzUAbJzhPyn/qqou6R0CmB4FgI0y/CfnUJJ/VlXv6h0EmBYFgI0x/Cfr+iRPrqpbewcBpsM1AGyE4T9pZyf51d4hgGlRANg3w38Wnt1a+9HeIYDpcATAvhj+s3JHkif4GGEgsQFgHwz/2XlItj44CEABYG8M/9l6Zmvt/N4hgP4cAbBrhv/s3Zjky70qANbNBoBdMfwX4VFJXto7BNCXDQAnzfBflLuTPK6qru0dBOjDBoCTYvgvzqlJfq53CKAfGwBOyPBfrLuTnF1VH+odBBifDQDHZfgv2qlJfqZ3CKAPGwCOyfBfhTuSPLaqbuwdBBiXDQBHZfivxkOSvLh3CGB8NgA8gOG/OrcmeWRVHeodBBiPDQBHMPxX6Ywk39U7BDAuBYD7GP6r9v29AwDjcgRAEsOf3JPk0VV1U+8gwDhsADD8SZJTklzQOwQwHgVg5Qx/dnhu7wDAeBwBrJjhz1E8uqo+2jsEMDwbgJUy/DmGZ/QOAIxDAVghw5/jeGbvAMA4HAGsjOHPCXykqh7TOwQwPBuAFTH8OQlf3Fr7J71DAMNTAFbC8GcXXAcAK6AArIDhzy59Ve8AwPAUgIUz/NmDL+8dABieArBghj97dE7vAMDwvApgoQx/9unMqrqldwhgODYAC2T4swG2ALBwCsDCGP5siOsAYOEUgAUx/NkgbwYEC6cALIThz4Y9rHcAYFgKwAIY/gxAAYCFUwBmzvBnIGf0DgAMSwGYMcOfAdkAwMIpADNl+DMwBQAWTgGYIcOfEZzWOwAwLAVgZgx/RnJ77wDAsBSAGTH8GdGtvQMAw1IAZsLwZ2QHewcAhqUAzIDhTwc2ALBwCsDEGf50ogDAwikAE2b405EjAFg4BWCiDH86+7veAYBhKQATZPgzAdf3DgAMSwGYGMOfiVAAYOFaVfXOwDbDn4k4lOS08o8DLJoNwEQY/kzI+w1/WD4FYAIMfybG+h9WQAHozPBngt7ZOwAwPAWgI8OfifqT3gGA4bkIsBPDn4m6LcnDq+qu3kGAYdkAdGD4M2F/bvjDOigAIzP8mbi39g4AjEMBGJHhzwy8tXcAYByuARiJ4c8MfCzJF1XVPb2DAMOzARiB4c9MvMHwh/VQAAZm+DMjl/YOAIzHEcCADH9m5Nqq+oreIYDx2AAMxPBnZvz2DytjAzAAw5+ZqSSPraoP9w4CjMcGYMMMf2botw1/WB8bgA0y/Jmpp1TVO3qHAMZlA7Ahhj8zdaXhD+ukAGyA4c+Mvax3AKAPRwD7ZPgzY1dX1Xm9QwB92ADsg+HPzL20dwCgHwVgjwx/Zu7NVfU7vUMA/TgC2APDn5m7Pcm5VfXB3kGAfmwAdsnwZwF+0fAHbAB2wfBnAT6Yrd/+b+8dBOjLBuAkGf4sxAsMfyBRAE6K4c9C/PeqekvvEMA0OAI4AcOfhXhXtt7y12//QBIF4LgMfxbitiRPrqprewcBpsMRwDEY/izITxj+wP0pAEdh+LMgr6mqS3qHAKbHEcD9GP4syB8l+daqurN3EGB6FIAdDH8W5C+TfENVHewdBJgmBWCb4c+CXJ/kaVX1id5BgOlyDUAMfxblxiTfaPgDJ7L6AmD4syCfyNbw/9veQYDpW3UBMPxZkE8keUZVvbd3EGAeVlsADH8W5PDwf0/vIMB8rLIAGP4siOEP7MnqCoDhz4IY/sCeraoAGP4siOEP7MtqCoDhz4IY/sC+ndo7wBgMfxbkE9l6hz9X+wP7svgNgOHPgnw8hj+wIYsuAIY/C/LxeJ0/sEGLLQCGPwti+AMbt8gCYPizIIY/MIjFFQDDnwUx/IHBLOpVAIY/C3L4gr/39Q4CLNNiNgCGPwti+AODW0QBMPxZEMMfGMXsC4Dhz4J8LIY/MJJZFwDDnwX5WLYu+DP8gVHMtgAY/iyI4Q+MbpYFwPBnQQx/oIvZvQzQ8GdBDp/5/03vIMD6zGoDYPizIIY/0NVsCoDhz4IY/kB3sygAhj8LYvgDkzD5AmD4syA3xfAHJmLSBcDwZ0FuytbV/oY/MAmTfRWA4c+CHP7N/9reQQAOm+QGwPBnQQx/YJJaVfXOcATDnwW5M8kPJxl77d/jf2rPuazn7PW8Yz9nJbk9yW1JDia5raruGjlDN5MqAIY/AJ3dla0y8PEkNyS5fsfXDUk+WlManPswmQJg+AMwA59MclWStyb54yTvnmshmEQBMPwBmKmbs1UIfjfJm6rqU53znLTuBcDwB2Ah7sxWEbgsyZur6lDnPMfVtQAY/gAs1K1JfjPJq6rqHb3DHE23AmD4A7ASVyR5WVVd2TvITl0KgOEPwAq9PcnLsnU80P0CvNELgOEPwMpdk+SFVXVVzxCjvhOg4Q8AeWKSP2mtXdpa+0e9QoxWAAx/ADjChUmua6392+0ZOapRjgAMfwA4rvcmeU5VXTPWEw6+ATD8AeCEzk3y9tbaj431hINuAAx/ANi1NyX5waq6ZcgnGawAGP4AsGcfSnJ+VV091BMMcgRg+APAvvzjJH/aWnv2UE+w8QJg+APARjw4yetaay8c4sE3WgAMfwDYqJbkotbaL2z8gTd1DYDhDwCDenWS51fV3Zt4sI0UgNZaS/LabL2pAQAwjN9M8qyqume/D7SpI4D/FMMfAIb23UletYkH2ncBaK39YJKf20AWAODEnt9a+/n9Psi+jgBaa9+U5M1JRn8PYwBYuR+tqov3euc9F4DW2hOSvC3JGXt9cgBgz+5N8j1V9Vt7ufOeCkBr7dFJ3p7ki/bypADARhxKcl5VvWe3d9z1NQCttYcleUsMfwDo7XOSvLG19jm7veNeLgL8n0kev4f7AQCb95VJXr7bO+3qCKC19l1J9nTWAAAM6vyquvxkb3zSBWB79f++WP0DwBTdkuSJVfXhk7nxbo4AfiGGPwBM1ecl+fWTvfFJbQBaa1+b5E8z0McHAwAbc2FVve5ENzphAWitPSjJXyU5d0PBAIDh3JjknKo6eLwbncxv9D8Twx8A5uJRSV5yohsddwPQWjs7ybuSPGRzuQCAgd2V5HFVdd2xbnCiDcB/jOEPAHPzoCQXHe8Gx9wAtNa+JMkHkpyy+VwAwAieXFXvPNoPjrcBeGEMfwCYs5851g+OugHYftOfv4tP+gOAObs3ydlV9YH7/+BYG4AfiuEPAHN3IMmLj/aDB2wAWmunJvlgki8ePhcAMLDbk3xJVX18518ebQPwvTH8AWApHpqtzf4RjrYBuDrJk0cKBQAM731VdcSb+h2xAWitnRfDHwCW5itba4/f+Rf3PwL41hHDAADjuWDnH+5fAP7liEEAgPE8u7XWDv/hvgLQWvv8WP8DwFJ9SZKnHv7Dzg3ANyVpD7g5ALAU33b4m50F4Js7BAEAxvN1h79pVZXW2oEkH0vyiH6ZAICB3ZnkzKo6dHgD8OQY/gCwdA9O8rXJZ48AXP0PAOvwdclnC8DT++UAAEZ0RAH48o5BAIDxPDHZetnf5yX5dN8sAMCIHnEgyTm9UwAAozpLAQCA9TnrQJz/A8DanHUgyVm9UwAAozrrQJKH904BAIzqkQeSnN47BQAwqtMPJDmjdwoAYFSn2wAAwPrYAADACp3ektyRrU8HAgDW4a4DJ74NALA0B5Lc2jsEADCqgweSHOydAgAY1UEbAABYHwUAAFZIAQCAFTp4IMnNvVMAAKP62IEk7++dAgAY1Q0HklzfOwUAMKobDiS5oXcKAGBU17ckD0/yyd5JAIDR/MMDVfWpuBAQANbik1X1ycOfBfA3XaMAAGP5q2TrswCS5G0dgwAA47kq+WwBeGu/HADAiK5KklZVaa2dluRTSR7UNxMAMKA7k5xZVYcOJElV3ZbkL/tmAgAGdnVVHUo+ewSQOAYAgKW76vA3OwvAH3YIAgCM5y2Hv2lVtfVNaweSfCTJozqFAgCG8+Ekj63twX/fBqCq7k3yuk6hAIBhveHw8E+OPAJIkteOHAYAGMcRv+QfUQCq6l1J3j1qHABgaO+pqiPm+/03AIktAAAszWX3/4u24zhg6y9a+8JsXSjwkHEyAQADOpTkMVX1/3b+5QM2AFV1U5JLRgoFAAzr1fcf/slRNgBJ0lr7siTXJTllhGAAwDDuSXJ2VX3w/j842jUAqaoPJPmNoVMBAIP6X0cb/skxNgBJ0lp7QpJrhkwFAAzqyVX1zqP94KgbgCSpqr9O8juDRQIAhvS7xxr+yXE2AEnSWjs3W1uAUwcIBgAM464kj6uq6451g2NuAJKkqt6b5OWbTgUADOqi4w3/5AQbgCRprZ2R5Nr4kCAAmIMbk5xTVQePd6PjbgCSpKpuTfLiTaUCAAb1Uyca/slJbADuu2Frf5zk6fsMBQAM56qq+vqTueFuCsBZSd6Z5Ix9BAMAhnFLkidW1YdP5sYnPAI4rKpuSPL8PYYCAIb1/JMd/skuCkCSVNUbkvzKbhMBAIP6H1V1+W7ucNJHAPfdobWHJnl7kifs6o4AwBDel613/Du0mzvtugAkSWvt7GxdD3D6ru8MAGzKoSTnVdV7dnvHXR0BHFZV1yf5viR37+X+AMC+3Zvkwr0M/2SPBSBJqurNSX5or/cHAPblx6vqt/Z65z0XgCSpqkuS/PR+HgMA2LX/UFUX7+cB9nQNwAMepLX/nOQn9/1AAMCJ/GpV/fB+H2RTBaAleXWS5+37wQCAY/nNJM+qqnv2+0D7OgI4rLZaxL9JctkmHg8AeIBXJzl/E8M/2VABSJLtQM+LEgAAm/aLVfWvq2pjr77byBHAEQ/Y2ilJXpPkgo0+MACsTyV5UVW9fNMPvPECkCgBALABdyZ53vbb8G/cIAUgUQIAYB8+lK3z/quHeoKNXQNwf9vXBHx/ktcN9RwAsEBvSvKkIYd/MmABSJQAANiFO7L17n7fW1W3DP1kgx0BHPEkjgMA4Hjem+Q5VXXNWE846AbgMJsAADiqW7P1TrpPHHP4JyNtAO57MpsAADjssiQ/VVV/3+PJRy0AiRIAwOpdk+SFVXVVzxCjHAHs5DgAgJV6e5LvSPJVvYd/0mEDcN8T2wQAsA5XJHlZVV3ZO8hO3QpAogQAsFi3ZuuT+15VVe/oHeZouhaARAkAYDHuSvJ72bq477er6lDnPMfVvQAkSgAAs/WpJFdla/D/RlXd3DnPSZtEAUiUAABm4fDAf+v217uq6t6egfZqMgUgUQIA6O6uJAeTfDzJDUmu3/F1Q5KP1pQG5z5MqgAkSgCLcmeSH0zy7t5BgKOqbL3//sEktyU5WFV39Y00nskVgEQJYFE+keSZVaUEAJMy+hsBnQxvFsSCfH6SK1prj+sdBGCnSRaARAlgUZQAYHImWwCSI0rA63tngX1SAoBJmXQBSO4rAc+NEsD8KQHAZEy+ACRKAIuiBACTMIsCkCgBLIoSAHQ3mwKQKAEsihIAdDWrApAoASyKEgB0M7sCkCgBLIoSAHQxywKQKAEsihIAjG62BSBRAlgUJQAY1awLQKIEsChKADCa2ReARAlgUZQAYBSLKACJEsCiKAHA4BZTABIlgEVRAoBBLaoAJEoAi6IEAINZXAFIlAAWRQkABrHIApAoASyKEgBs3GILQKIEsChKALBRiy4AiRLAoigBwMYsvgAkSgCLogQAG7GKApAoASyKEgDs22oKQKIEsChKALAvqyoAyREl4A29s8A+KQHAnq2uACT3lYDnRAlg/pQAYE9WWQASJYBFUQKAXVttAUiUABblcAk4t3cQYB5aVfXO0F1r7ZQklyZ5du8ssE83JnlqVf1t7yDAtK16A3CYTQAL8qgkv99ae0TvIMC0KQDblAAW5Jwkb2mtndY7CDBdCsAOSgALcl6SN7XWHtQ7CDBNCsD9KAEsyDcneVXvEMA0uQjwGFwYyII8t6ou7R0CmBYF4DiUABbiYJKvrqrrewcBpsMRwHE4DmAhTk9yeWvtob2DANOhAJyAEsBCPCHJf+0dApgORwAnyXEAC/EdVfW/e4cA+lMAdkEJYAE+nOQrq+pQ7yBAX44AdsFxAAvwpUl+tncIoD8bgD2wCWDmbk9yblV9sHcQoB8bgD2wCWDmHprk5b1DAH0pAHukBDBz39Za+5beIYB+HAHsk+MAZuzqqjqvdwigDxuAfdqxCXhj7yywS1/TWvsXvUMAfSgAG7BdAi6MEsD8/FzvAEAfjgA2aPs44LIk5/fOArvw1Kr6i94hgHHZAGyQTQAzZQsAK2QDMACbAGborKp6f+8QwHhsAAZgE8AMXdg7ADAuG4AB2QQwIzdU1dm9QwDjsQEYkE0AM3JWa817AsCKKAADUwKYEccAsCKOAEbiOIAZ+HiSR22XVmDhbABGYhPADHxBkqf0DgGMQwEYkRLADDy9dwBgHArAyJQAJu7pvQMA43ANQCeuCWCibkvy8Kq6q3cQYFg2AJ3YBDBRpyX5mt4hgOEpAB0pAUzU1/cOAAxPAehMCWCCvrp3AGB4CsAEKAFMzFm9AwDDcxHghLgwkIk4lOS08o8DLJoNwITYBDARn5Pk0b1DAMNSACZGCWAiHAPAwikAE7SjBFzeOwur5aOBYeEUgInaLgEXRAmgD0cAsHAKwIQpAXR0Ru8AwLAUgIlTAuhEAYCFUwBmQAmgg9N7BwCGpQDMhBLAyGwAYOEUgBnx6gBGpADAwikAM1NVd0cJYHgP7R0AGJYCMENKACO4rXcAYFgKwEwpAQzsM70DAMNSAGZMCWBACgAsnAIwc0oAA7m1dwBgWArAAigBDMAGABZOAVgIJYANUwBg4RSABVEC2KD/2zsAMCwFYGGUADbk2t4BgGG1quqdgQG01k5NclmSZ/XOwiydWVW39A4BDMcGYKFsAtiHmwx/WD4FYMGUAPbout4BgOEpAAunBLAHzv9hBRSAFVAC2KX/0zsAMDwFYCV2lIDf6J2FybuydwBgeF4FsDLbrw54XZLv7Z2FSfpIVT2mdwhgeDYAK7O9CbggNgEcnd/+YSUUgBVSAjiOK3oHAMbhCGDFHAdwFI+uqo/2DgEMzwZgxWwCuJ9rDH9YDwVg5ZQAdnht7wDAeBwBkMRxALknW+v/m3oHAcZhA0ASmwDyh4Y/rIsCwH2UgFV7Te8AwLgcAfAAjgNW59Ykj6yqQ72DAOOxAeABbAJW59cMf1gfGwCOySZgFe5I8tiqurF3EGBcNgAck03AKlxi+MM62QBwQjYBi3V3krOr6kO9gwDjswHghGwCFuv1hj+slw0AJ80mYFHuTvK4qrq2dxCgDxsATppNwKK83PCHdbMBYNdsAmbv75J8RVUd7B0E6McGgF2zCZi9Fxn+gA0Ae7a9CXh9ku/pnYWT9vtV9c29QwD9KQDsixIwK4eSPL6q3t87CNCfIwD2Zfs44PuSvKl3Fk7oBYY/cJgNABthEzB5l1bVc3uHAKZDAWBjlIDJujbJ17jwD9jJEQAb4zhgkg4leZbhD9yfAsBGKQGT82NV9e7eIYDpUQDYOCVgMl5SVZf0DgFMk2sAGIxrArp6ZVX9RO8QwHQpAAxKCeji8iTfV1X39g4CTJcCwOCUgFFdkeRbqurO3kGAaXMNAIPbcU3Ar/fOsnB/kOQ7DX/gZCgAjKKq7q6qH0jyS72zLNQbk3x7Vd3WOwgwDwoAo6qqn03yoiTOnjbnlUku8Js/sBuuAaCL1toFSS5J8qDOUebupVX1871DAPOjANBNa+0bsnVx4CN7Z5mh25L8SFVd2jsIME8KAF211r4wyaVJntk7y4y8K1tv73td7yDAfLkGgK6q6qYk35jkJUnu6RxnDn4lyVMMf2C/bACYjNba12XrSOBRvbNM0KeztfJ/Y+8gwDLYADAZVXVVknOzdVW7bcBnvSbJOYY/sEk2AExSa+2J2SoCT+2dpaP3ZOvT/N7WOwiwPDYATFJVXZPkaUl+IMnH+qYZ3a1JfjLJkwx/YCg2AExea+1hSV6Q5IVJHtE5zpBuSfKKJBdV1c29wwDLpgAwG621z03y/CQvTvJFneNs0s1JLkryiqq6pXcYYB0UAGantfbgJM/L1pr8nM5x9uMDSS5OcnFVHewdBlgXBYBZa62dl+Q5Sc5P8gWd45yMTye5PMlrqurPeocB1ksBYBFaa6cm+efZKgPfnuRhfRMd4bYkV2brHQ9/u6pu75wHQAFgeVprpyT56iRP3/56WpIzRoxwR5K/yNbQvzLJO6rqrhGfH+CEFAAWb0chOC/J2Tu+HpPklH08dCX5SJLrd3y9O8lfVNWh/WQGGJoCwGptX0z4ZUm+NFtHBqdna1Nw+OtzkxxK8plsvTb/Mzu+//skNxj0wFwpAACwQt4JEABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIUUAABYIQUAAFZIAQCAFVIAAGCFFAAAWCEFAABWSAEAgBVSAABghRQAAFghBQAAVkgBAIAVUgAAYIX+P1UbxvN02s6WAAAAAElFTkSuQmCC" />
              </defs>
            </svg>
          </button>
          <div class="card-info-wrapper">
            <div class="card-info-percent">
              40%
            </div>
            <img
              loading="lazy"
              :src="selectedCard?.imageUri"
              alt="Icon description"
              class="card-info"
            >
            <div class="card-info-time">
              {{ selectedCard?.reloadTime.split('T')[1].slice(0, 5) }}
            </div>
          </div>
          <div class="pool-number">
            <div class="info-number">
              {{ `pool ${selectedCard?.pool}` }}
            </div>
            <div class="info-pool">
              #{{ selectedCard?.id }}
            </div>
          </div>
          <button m-auto class="button-info-start">
            <div>
              START
            </div>
          </button>
          <div v-if="false" class="info-filters">
            <div>
              Reward
            </div>
            <button class="info-all">
              All
            </button>
            <button class="info-active">
              Active
            </button>
            <button class="info-passive">
              Passive
            </button>
          </div>
          <div v-else class="info-filters" />
          <div v-if="false" class="info-filter-grid">
            <div class="reward-info-icon">
              1.5
              <img loading="lazy" src="https://i.imgur.com/67eheI6_d.webp?maxwidth=760&amp;fidelity=grand" alt="Information icon" class="info-icon" inline="" aspect-square="" max-w-max="">
            </div>
            <div>
              Passive
            </div>
            <div>
              22.08.2024
            </div>
            <div>
              13:37
            </div>
            <div class="reward-info-icon">
              1.5
              <img loading="lazy" src="https://i.imgur.com/67eheI6_d.webp?maxwidth=760&amp;fidelity=grand" alt="Information icon" class="info-icon" inline="" aspect-square="" max-w-max="">
            </div>
            <div>
              Active
            </div>
            <div>
              22.08.2024
            </div>
            <div>
              13:37
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
