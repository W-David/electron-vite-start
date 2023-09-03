import vue from '@vitejs/plugin-vue'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { join, resolve } from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import iconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@render': join(__dirname, './src/renderer/src'),
        '@main': join(__dirname, './src/main'),
        '@shared': join(__dirname, './src/shared')
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    resolve: {
      alias: {
        '@render': join(__dirname, './src/renderer/src'),
        '@main': join(__dirname, './src/main'),
        '@shared': join(__dirname, './src/shared')
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@render': join(__dirname, './src/renderer/src'),
        '@main': join(__dirname, './src/main'),
        '@shared': join(__dirname, './src/shared')
      }
    },
    plugins: [
      vue(),
      // https://icones.netlify.app/
      icons({
        compiler: 'vue3',
        customCollections: {
          c: FileSystemIconLoader('./src/renderer/src/assets/icons', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        }
      }),
      // 组件自动按需引入
      components({
        extensions: ['vue'],
        dts: resolve(__dirname, './components.d.ts'),
        resolvers: [
          iconsResolver({
            prefix: 'i',
            customCollections: ['c']
          })
        ]
      })
    ]
  }
})
