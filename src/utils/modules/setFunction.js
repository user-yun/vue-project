import { getRandomInRange } from './getFunction'

// 获取数据的类型
export const setProjTitle = (title) => {
  title = title || import.meta.env.VITE_APP_TITLE
  document.title = title
  document.getElementsByTagName('title')[0].innerText = title
}

export const toggleAnimation = (fun = () => {}) => {
  // 执行切换主题的操作
  let transition = document.startViewTransition(fun)
  // document.startViewTransition 的 ready 返回一个 Promise
  transition.ready.then(() => {
    // 获取鼠标的坐标
    // let { clientX, clientY } = e
    let [clientX, clientY] = [
      getRandomInRange(0, window.innerWidth),
      getRandomInRange(0, window.innerHeight),
    ]
    // 计算最大半径
    let radius = Math.max(clientX, innerWidth - clientX, clientY, innerHeight - clientY)
    // 圆形动画扩散开始
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0% at ${clientX}px ${clientY}px)`,
          `circle(${radius}px at ${clientX}px ${clientY}px)`,
        ],
      },
      // 设置时间，以及目标伪元素
      {
        duration: 500,
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })
}
export default { setProjTitle, toggleAnimation }
