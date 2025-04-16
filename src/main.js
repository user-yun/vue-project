import './assets/main.less'

import { createApp } from 'vue'
// import { httpInstall } from '@a/http'
// import { apiInstall } from '@a'
// import { utilsInstall } from '@u'
import App from './App.vue'
import stores from './stores'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)
// app.use(httpInstall())
// app.use(apiInstall())
// app.use(utilsInstall())
app.use(stores)
app.use(router)
app.use(Antd)
app.mount('#app')
