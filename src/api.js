import {exec} from '@skpm/child_process'
import {normWhitespaces} from './formatter';

const apiEndPoint = 'https://api.tinify.com/shrink'

const curl = (args) => new Promise((resolve, reject) => {
  exec(`/usr/bin/curl ${args}`, (err, data) => {
    if (err) {
      return reject(new Error(err))
    }

    resolve(data)
  })
});

const unpackResponse = (raw) => {
  const rawLines = raw.split('\n')
  return JSON.parse(rawLines[rawLines.length - 1])
}

const downloadFile = (from, to) => {
  if (!from || !to) {
    return Promise.reject(new Error('Couldn\'t download the compressed image'))
  }

  return curl(`-o ${to} ${from}`)
}

export const compress = (rawPath, apiKey) => {
  const path = normWhitespaces(rawPath)

  return curl(`--user api:${apiKey} --data-binary @${path} -i ${apiEndPoint}`)
    .then(res => {
      const data = unpackResponse(res)

      if (data.error) {
        throw new Error(data.message)
      }

      if (!data.output || !data.output.url) {
        throw new Error('Couldn\'t compress the image')
      }

      return data.output.url
    })
    .then(url => downloadFile(url, path))
}
