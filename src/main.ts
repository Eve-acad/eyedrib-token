import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PrimeVue from 'primevue/config';

const app = createApp(App)
import Vue3Marquee from 'vue3-marquee'
app.use(router)
.use(PrimeVue)
.use(Vue3Marquee)
app.mount('#app')
