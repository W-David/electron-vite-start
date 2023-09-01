import vue from '@vitejs/plugin-vue'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { join } from 'path'

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
    plugins: [vue()]
  }
})
