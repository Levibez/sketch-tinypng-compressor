import * as fs from '@skpm/fs'
import {prettyMs, prettyBytes, ratioForNumbersPercent} from './formatter'
import {showMessage, sounds} from './ui'
import {config} from './configs';
import {compress} from './api';

const environment = {
  startTime: 0,
  originalFileSize: 0,
  completionRatio: 0,
  filesToCompress: []
}

const isRasterType = (assetType) => assetType === 'png' || assetType === 'jpg'

const fileSizeForPath = (path) => {
  try {
    return fs.statSync(path).size
  } catch (err) {
    return 0
  }
}

const filesToCompress = (exportedAssets) => {
  const filesToCompress = []

  exportedAssets.forEach(currentExport => {
    const type = String(currentExport.request.format())
    const path = String(currentExport.path)

    if (fs.existsSync(path) && isRasterType(type)) {
      const size = fileSizeForPath(path)
      filesToCompress.push({ path, size, type })
      environment.originalFileSize += size
    }
  })

  return filesToCompress
}

const onCompressionFailed = (err) => {
  if (!err) {
    return
  }

  console.log(err)
  showMessage(`error — ${err.message}`, sounds.error)
}

const onCompressionSucceed = () => {
  const runningTime = prettyMs(Date.now() - environment.startTime)
  const originalFileSize = prettyBytes(environment.originalFileSize)
  const compressFileSize = environment.filesToCompress.reduce((prev, f) => prev + fileSizeForPath(f.path), 0)

  const ratio = ratioForNumbersPercent(environment.originalFileSize, compressFileSize)
  const compressedSizePretty = prettyBytes(compressFileSize)
  const msg = `finished in ${runningTime}. ${originalFileSize} → ${compressedSizePretty} (${ratio} off)`

  showMessage(msg, sounds.success)
}

// called from an action
export const compressAutomatically = (context) => {
  environment.filesToCompress = filesToCompress(context.actionContext.exports)
  environment.startTime = Date.now()
  const apiKey = config().apiKey

  if (environment.filesToCompress.length <= 0) {
    return
  }

  if (!apiKey) {
    showMessage('TinyPng API key is not specified — not compressing!', sounds.error)
    return
  }

  Promise
    .all(environment.filesToCompress.map(currentFile => compress(currentFile.path, apiKey)))
    .then(onCompressionSucceed)
    .catch(onCompressionFailed)
}
