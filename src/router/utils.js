import { defineAsyncComponent } from 'vue'
import HomeView from '../views/HomeView.vue'
const AsyncComp = (loader) => {
  return defineAsyncComponent({
    // 加载函数
    loader,

    // 加载异步组件时使用的组件
    loadingComponent: HomeView,
    // 展示加载组件前的延迟时间，默认为 200ms
    delay: 200,

    // 加载失败后展示的组件
    errorComponent: HomeView,
    // 如果提供了一个 timeout 时间限制，并超时了
    // 也会显示这里配置的报错组件，默认值是：Infinity
    timeout: 3000,
  })
}
export { AsyncComp }
