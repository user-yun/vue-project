// 获取数据的类型
export const setProjTitle = (title) => {
  title = title || import.meta.env.VITE_APP_TITLE
  document.title = title
  document.getElementsByTagName('title')[0].innerText = title
}
export default { setProjTitle }
