import { createStore } from 'vuex'
import repositories from '@/store/modules/repositories'
import progressBar from '@/store/modules/progressBar'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    repositories,
    progressBar
  }
})
