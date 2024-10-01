import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from "@/vuetify/vuetify.js"

const app = createApp(App)
app.use(router);        // 경로이동 vue-router 사용
app.use(createPinia()); // 상태 관리 pinia 사용
app.use(vuetify);       // css framework vuetify 사용

app.mount('#app')
