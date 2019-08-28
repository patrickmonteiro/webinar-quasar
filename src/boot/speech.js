import { Loading, QSpinnerAudio } from 'quasar'
export default async ({ Vue }) => {
  Vue.prototype.$speechTalk = (text) => {
    return new Promise((resolve, reject) => {
      let speech = new SpeechSynthesisUtterance()
      speech.lang = 'pt-BR'
      speech.text = text
      speech.volume = 1
      speech.rate = 1
      speech.pitch = 1
      setTimeout(() => {
        window.speechSynthesis.speak(speech)
      }, 300)

      speech.addEventListener('start', () => {
        Loading.show({
          delay: 0,
          spinner: QSpinnerAudio, // ms,
          backgroundColor: 'primary'
        })
      })

      speech.addEventListener('end', () => {
        Loading.hide()
        resolve(true)
      })
    })
  }
}
