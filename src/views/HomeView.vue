<template>
  <HeaderComponent></HeaderComponent>


  <!--  https://www.npmjs.com/package/vue3-marquee -->
  <Vue3Marquee>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-14% YOO/SOL</div>
    <img src="@/assets/dropup.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">+3290% PONKE/SOL</div>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-69% PEPE/SOL</div>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-18% GECKO/SOL</div>
    <img src="@/assets/dropup.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">+372% GFY/SOL</div>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-12% SILLY/SOL</div>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-99% ZERO/SOL</div>
    <img src="@/assets/dropup.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">+10200% LINK/SOL</div>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-5% NICO/SOL</div>
    <img src="@/assets/dropup.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">+696969% MAAZ/SOL</div>
    <img src="@/assets/dropup.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">+1000% 100X/SOL</div>
    <img src="@/assets/dropdown.png" class="w4 h-4 mr-2" />
    <div class="text-white mr-10">-11% GROK/SOL</div>



  </Vue3Marquee>


  <div class="flex flex-col lg:flex-row text-gray-secondary flex-grow gap-3 p-2">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col bg-gray-primary rounded-lg gap-2 p-2 lg:w-[300px]">
        <div class="text-white">Overview</div>
        <div class="flex justify-between">
          <div>Birdeye</div>
          <div>$0.00248883</div>
        </div>
        <div class="mt-3 mb-3">
          Birdeye equips traders with our crypto data tracking tool across DEXes & AMMs on multichain, helping them seize
          more trading opportunities.
        </div>
        <div class="flex justify-between">
          <div>Network</div>
          <div>SOLANA</div>
        </div>
        <div class="gray-line"></div>
        <div>We are the unofficial eyedriB website.</div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Public Name</div>
          <div>solstice</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Address</div>
          <div>abcd</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>FDMC</div>
          <div>$1,965,608.45</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Max Total Supply</div>
          <div>9,999,993,982.4</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Holders</div>
          <div>1,132</div>
        </div>
        <div class="gray-line"></div>
      </div>

      <div class="flex flex-col bg-gray-primary rounded-lg gap-2 p-2 lg:w-[300px]">
        <div class="flex justify-between items-center">
          <div>Safety check</div>
          <div class="border flex gap-1 items-center px-3 py-1">
            <div>24h</div>
            <img src="@/assets/dropdown.png" class="w4 h-4" />
          </div>
        </div>
        <div class="flex justify-between">
          <div>Top 10 holders</div>
          <div>60.95%</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>24h volume</div>
          <div>$714.6K</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>24h trades</div>
          <div>$1.83k</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>24h traders</div>
          <div>813</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>24h views</div>
          <div>23.28k</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Unique views</div>
          <div>10.77K</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Watchers</div>
          <div>121</div>
        </div>
        <div class="gray-line"></div>
        <div class="flex justify-between">
          <div>Markets</div>
          <div>1</div>
        </div>
        <div class="gray-line"></div>
      </div>
    </div>

    <div class="h-[500px] lg:min-h-screen w-full">
      <div class="tradingview-widget-container" ref="container" :style="{ height: '100%', width: '100%' }">
        <div class="tradingview-widget-container__widget" :style="{ height: 'calc(100% - 32px)', width: '100%' }"></div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col bg-gray-primary rounded-lg gap-2 p-2 lg:w-[300px]">
        <div class="flex justify-between items-center">
          <div class="flex gap-6">
            <div class="text-white">Swap</div>
            <div>Limit</div>
            <div>Bridge</div>
          </div>
          <img src="@/assets/settings.jpg" class="w-4 h-4" />
        </div>
        <div class="p-2 flex justify-between bg-gray-light rounded-md">
          <div class="flex items-center gap-4">
            <div>sol</div>
            <img src="@/assets/dropdown.png" class="w-4 h-4" />
          </div>
          <div class="flex flex-col gap-2 items-end">
            <div>0.00</div>
            <div class="flex gap-3 text-xs">
              <div class="border p-1 rounded-md">25%</div>
              <div class="border p-1 rounded-md">50%</div>
              <div class="border p-1 rounded-md">75%</div>
              <div class="border p-1 rounded-md">100%</div>
            </div>
          </div>
        </div>
        <img src="@/assets/dropdown.png" class="w-4 h-4 mx-auto" />
        <div class="flex items-center gap-4 ml-2">
          <div>USDC</div>
          <img src="@/assets/dropdown.png" class="w-4 h-4" />
        </div>
        <center><a class="button-scale"><button class="border text-center border-orange-primary text-orange-primary px-20 py-2 rounded-md">
          Buy $eyedriB
        </button></a></center>
        <div class="text-center">Powered by Jupiter</div>
      </div>

      <div class="flex flex-col bg-gray-primary rounded-lg gap-2 p-2 lg:w-[300px]">
        <div class="flex justify-between items-center">
          <div>Watchlist</div>
          <div class="border flex gap-1 items-center px-3 py-1">
            <div>Tokens</div>
            <img src="@/assets/dropdown.png" class="w4 h-4" />
          </div>
        </div>
        <div class="text-center">No data</div>
      </div>

      <div class="flex flex-col bg-gray-primary rounded-lg gap-2 p-2 lg:w-[300px]">
        <div class="flex justify-between items-center">
          <div>Upcoming deals</div>
          <img src="@/assets/dropdown.png" class="w4 h-4" />
        </div>
        <div class="gray-line"></div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-3 items-center">
            <img src="@/assets/dropdown.png" class="w8 h-8">
            <div class="flex flex-col gap-0.5">
              <div class="text-white">Ubi</div>
              <div>Launch on <span class="text-white">Daostarter</span></div>
            </div>
          </div>
          <div class="flex gap-3 items-center">
            <img src="@/assets/dropdown.png" class="w8 h-8">
            <div class="flex flex-col gap-0.5">
              <div class="text-white">Farcana</div>
              <div>Launch on <span class="text-white">Seedify</span></div>
            </div>
          </div>
          <div class="flex gap-3 items-center">
            <img src="@/assets/dropdown.png" class="w8 h-8">
            <div class="flex flex-col gap-0.5">
              <div class="text-white">Velvet capital (NOT IDO)</div>
              <div>Launch on <span class="text-white">Poolz</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

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
import HeaderComponent from '@/components/HeaderComponent.vue'
import { onMounted, ref } from 'vue'



const container = ref()
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
  script.type = 'text/javascript'
  script.async = true
  script.innerHTML = `
      {
        "autosize": true,
        "symbol": "CRYPTO:SOLUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`
  container.value.appendChild(script)
})
</script>
