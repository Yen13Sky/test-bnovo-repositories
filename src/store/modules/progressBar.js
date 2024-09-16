export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    progressBar () {
      const progressBar = document.querySelector('progress')
      const list = document.querySelector('.result__list')

      function calcProgress () {
        const listHeight = list.offsetHeight
        const windowHeight = window.innerHeight
        const currentPosition = window.scrollY
        const result = (currentPosition / (listHeight - windowHeight)) * 100
        progressBar.value = result
      }

      function throttle (fn, ms) {
        let timer = null
        return function progress (...args) {
          if (timer) {
            return
          }
          timer = setTimeout(() => {
            fn(...args)
            clearTimeout(timer)
            timer = null
          }, ms)
        }
      }

      const progress = throttle(calcProgress, 50)
      window.addEventListener('scroll', progress)
      window.addEventListener('resize', progress)
    }

  },
  getters: {}

}
