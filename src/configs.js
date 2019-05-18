import * as fs from '@skpm/fs'

const tinyPngJsonFilePath = `${MSPluginManager.mainPluginsFolderURL().path()}/tinypng.json`

export const config = () => {
  try {
    return JSON.parse(fs.readFileSync(tinyPngJsonFilePath, 'utf8'))
  } catch (e) {
    return {}
  }
}

export const saveApiKey = (key) => {
  fs.writeFileSync(tinyPngJsonFilePath, JSON.stringify({ apiKey: key }, null, '  '), 'utf8')
}