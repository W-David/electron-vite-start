import { BrowserWindow, ipcMain, ipcRenderer } from 'electron'

export const ctrlType = {
  MIN: 'window-min',
  MAX: 'window-max',
  CLOSE: 'window-close'
}

interface Options {
  isMaximized?: boolean
}

class WindowSizeControl {
  options: Options
  constructor(options?: Options) {
    const defaultOptions: Options = { isMaximized: false }
    this.options = Object.assign({}, defaultOptions, options)
  }

  init(): void {
    ipcMain.on(ctrlType.MAX, (event) => {
      const win = BrowserWindow.fromWebContents(event.sender)
      if (!win) {
        throw new Error(`${ctrlType.MAX}: No Window found`)
      }
      if (win.isMaximized()) {
        win.unmaximize()
      } else {
        win.maximize()
      }
    })
    ipcMain.on(ctrlType.MIN, (event) => {
      const win = BrowserWindow.fromWebContents(event.sender)
      if (!win) {
        throw new Error(`${ctrlType.MIN}: No Window found`)
      }
      win.minimize()
    })
    ipcMain.on(ctrlType.CLOSE, (event) => {
      const win = BrowserWindow.fromWebContents(event.sender)
      if (!win) {
        throw new Error(`${ctrlType.MIN}: No Window found`)
      }
      win.close()
    })
  }

  static initMain(options?: Options): WindowSizeControl {
    const windowSizeControl = new WindowSizeControl(options)
    windowSizeControl.init()
    return windowSizeControl
  }
  static initRender() {
    return {
      minimize: () => ipcRenderer.send(ctrlType.MIN),
      maximize: () => ipcRenderer.send(ctrlType.MAX),
      close: () => ipcRenderer.send(ctrlType.CLOSE)
    }
  }
}
export const windowSizeCtrl = WindowSizeControl.initRender()
export default WindowSizeControl
