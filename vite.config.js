import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(async ({ command, mode }) => {
  console.log(`当前运行情况command：${command}，mode：${mode}`)
  let root = process.cwd() //获取当前工作目录的路径
  // loadEnv 接受三个参数：mode：当前环境模式，开发环境、生产环境等。envDir：env 文件目录地址。prefixes：环境变量前缀，默认是VITE_。
  let env = loadEnv(mode, root)
  console.log(`当前运行情况root：${root}，env：${JSON.stringify(env)}`)
  return {
    // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    root: root,
    // 开发或生产环境服务的公共基础路径。合法的值包括以下几种：绝对 URL 路径名，例如 /foo/。完整的 URL，例如 https://foo.com/。空字符串或 ./（用于开发环境）
    base: env.VITE_BASE_URL,
    // 需要用到的插件数组
    plugins: [vue(), vueJsx(), vueDevTools()],
    // 作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
    publicDir: 'public',
    resolve: {
      // 配置别名
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@u': fileURLToPath(new URL('./src/utils', import.meta.url)),
        '@a': fileURLToPath(new URL('./src/api', import.meta.url)),
        '@s': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '@v': fileURLToPath(new URL('./src/views', import.meta.url)),
      },
      // 配置导入时，可以忽略的的扩展名列表，不建议忽略自定义导入类型的扩展名 .vue ，会影响 IDE 和类型支持
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import "@/assets/main.less";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    // 开发服务器的配置
    server: {
      // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址。
      host: '0.0.0.0',
      // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
      port: 8000,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      strictPort: true,
      // 在开发服务器启动时自动在浏览器中打开应用程序
      open: true,
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
})
