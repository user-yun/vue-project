import './assets/main.css'

import { createApp } from 'vue'
// import { httpInstall } from '@a/http'
// import { apiInstall } from '@a'
// import { utilsInstall } from '@u'
import App from './App.vue'
import stores from './stores'
import router from './router'

const app = createApp(App)
// app.use(httpInstall())
// app.use(apiInstall())
// app.use(utilsInstall())
app.use(stores)
app.use(router)

app.mount('#app')
