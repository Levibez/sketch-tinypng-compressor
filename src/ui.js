import UI from 'sketch/ui'
import {execSync} from '@skpm/child_process'
import {saveApiKey} from './configs'

export const sounds = {
  success: 'Glass',
  error: 'Basso'
}

export const playSystemSound = (sound) =>  execSync(`/usr/bin/afplay /System/Library/Sounds/${sound}.aiff`)

export const showMessage = (txt, sound) => {
  console.log(txt)
  UI.message(`TinyPng: ${txt}`)

  if (sound) {
    playSystemSound(sound)
  }
}


export const requestTinyPngApiKey = () => {
  UI.getInputFromUser(
    'Enter TinyPng API key',
    (err, text) => {
      if (err) {
        // most likely the user canceled the input
        return
      }

      saveApiKey(text)
    })
}
