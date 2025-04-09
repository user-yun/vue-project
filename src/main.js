import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import { httpInstall } from '@a/http'
// import { apiInstall } from '@a'
// import { utilsInstall } from '@u'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(httpInstall())
// app.use(apiInstall())
// app.use(utilsInstall())
app.use(router)

app.mount('#app')
