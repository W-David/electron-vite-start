import { app } from 'electron'
import is from 'electron-is'
import { resolve } from 'node:path'
import { arch as archMap, bin as binMap } from '../config/engine.json'
type Platform = keyof typeof binMap
type Arch = keyof (typeof archMap)[keyof typeof archMap]

export const getEngineBin = (platform: Platform) => {
  return binMap[platform]
}
export const getEngineArch = (platform: Platform, arch: Arch) => {
  return archMap[platform][arch]
}
export const getDevEnginePath = (platform: Platform, arch: Arch) => {
  const archPath = getEngineArch(platform, arch)
  const base = `../../../extra/${platform}/${archPath}`
  return resolve(__dirname, base)
}

export const getProdEnginePath = () => {
  return resolve(app.getAppPath(), '../engine')
}

export const getEnginePath = (platform: Platform, arch: Arch) => {
  return is.dev() ? getDevEnginePath(platform, arch) : getProdEnginePath()
}
