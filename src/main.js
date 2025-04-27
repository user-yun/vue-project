import './assets/main.less'

import { createApp } from 'vue'

import App from './App.vue'
import stores from './stores'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// import { httpInstall } from '@a/http'
// import { apiInstall } from '@a'
// import { utilsInstall } from '@u'
import { aIconsInstall } from './components/AIcons'

const app = createApp(App)
app.use(stores)
app.use(router)
app.use(Antd)
// app.use(httpInstall())
// app.use(apiInstall())
// app.use(utilsInstall())
app.use(aIconsInstall())
app.mount('#app')
