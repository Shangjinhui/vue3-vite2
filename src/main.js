import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'


import {until} from '@/untils/until'
const app = createApp(App);
app.provide('until', until);

app.use(router).use(store).mount('#app')
