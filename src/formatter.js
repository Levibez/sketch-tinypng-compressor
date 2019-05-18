import prettyBytesOriginal from 'pretty-bytes'
import prettyMsOriginal from 'pretty-ms'

export const prettyMs = prettyMsOriginal

export const prettyBytes = (size) => {
  return prettyBytesOriginal(size).toUpperCase().replace(/\sB/g, ' bytes')
}

export const ratioForNumbersPercent = (leftNum, rightNum) => {
  return (100 - ((rightNum * 100) / leftNum)).toFixed(2) + '%'
}

export const normWhitespaces = (line) => line.replace(/ /g, '\\ ')