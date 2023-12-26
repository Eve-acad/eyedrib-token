<template>
  <Sidebar v-model:visible="visible" header=" " class="bg-gray-primary" :show-close-icon="false">
    <div class="flex flex-col items-start gap-2 px-3 text-gray-secondary mt-8 ">
      <button>Solscan</button>
      <button>RugChecker</button>
      <button>Birdeye</button>
      <button>Twitter</button>
      <button>Telegram</button>
    </div>
  </Sidebar>

  <div class="p-2 flex items-center text-gray-secondary justify-between">
    <div class="flex gap-3 items-center">

      <img src="@/assets/menu.svg" class="w-8 h-8 cursor-pointer lg:hidden" @click="visible = true" />
      <img src="@/assets/Logo_nobg.png" class="w-35 h-14 ml-2" />
    </div>
    <div class="flex gap-4 items-center">
      <input type="text" class="border outline-none border-gray-500 bg-black px-2 py-2 rounded-md hidden lg:block"
        placeholder="Search for Tokens, Markets, Traders..." />
      <img src="@/assets/search.png" class="w-10 h-10 lg:hidden" />
      <a href="#" class="hover-underline">
        <div class="hidden lg:block">Solscan</div>
      </a>
      <a href="#" class="hover-underline">
        <div class="hidden lg:block">Rugchecker</div>
      </a>
      <a href="#" class="hover-underline">
        <div class="hidden lg:block">Birdeye</div>
      </a>
      <a href="#" class="hover-underline">
        <div class="hidden lg:block">Twitter</div>
      </a>
      <a href="#" class="hover-underline">
        <div class="hidden lg:block">Rugchecker</div>
      </a>

      <a class="button-scale">
        <button class="border border-orange-primary text-orange-primary px-4 py-2 rounded-md hidden lg:block">
          Buy $eyedriB
        </button>
      </a>


      <img src="@/assets/wallet.png" class="w-10 h-10 lg:hidden">
      <img src="@/assets/user.png" class="w-10 h-10" />
    </div>
  </div>
</template>

<style scoped>
.hover-underline:hover div {
  text-decoration: underline;
}

.button-scale button {
  transition: transform 0.3s ease;
  /* Animation duration and style */
}

.button-scale:hover button {
  transform: scale(1.05);
  /* Scale up by 10% on hover */
}
</style>

<script setup lang="ts">
import Sidebar from 'primevue/sidebar'

import { ref } from 'vue'

const visible = ref(false)
</script>
