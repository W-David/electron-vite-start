import { ElectronAPI } from '@electron-toolkit/preload'

declare interface Api {
  minimize: () => void
  maximize: () => void
  close: () => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
