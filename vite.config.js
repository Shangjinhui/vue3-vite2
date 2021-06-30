// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: process.env.NODE_ENV === 'production' ? './' : '',
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true // 使用 less 编写样式的 UI 库（如 antd）时建议加入这个设置
  //     }
  //   }
  // },
  server: {
    cors: true, // 默认启用并允许任何源
    //open: true, // 在服务器启动时自动在浏览器中打开应用程序
    proxy: {
        '/v1': {
            target: 'http://47.118.24.31/weiye-api/index.php/',
            ws: true,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/v1/, '')
        },
    }, // 配置多个代理
  },
  build: {
    target: 'modules',
    // outDir: 'dist', //指定输出路径
    // assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
})
