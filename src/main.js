import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import store from './store'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { createPinia } from 'pinia'

import firstPlugin from '@/plugins/firstPlugin'

import i18n from './plugins/i18n'

const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)
app.use(Vue3Toasity)
app.use(i18n)
app.use(firstPlugin)
app.use(store)
app.mount('#app')
