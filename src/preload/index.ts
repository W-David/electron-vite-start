import { electronAPI } from '@electron-toolkit/preload'
import { windowSizeCtrl } from '@shared/windowControls'
import { contextBridge } from 'electron'

// Custom APIs for renderer
const api = {
  minimize: () => windowSizeCtrl.minimize(),
  maximize: () => windowSizeCtrl.maximize(),
  close: () => windowSizeCtrl.close()
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
