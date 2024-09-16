export default {
  namespaced: true,
  state: {
    repositories: null,
    favorites: []
  },
  mutations: {
    setRepositories (state, data) {
      state.repositories = data
    },
    setFavorites (state, data) {
      state.favorites.push(data)
    },
    removeFavorite (state, index) {
      state.favorites.splice(index, 1)
    }

  },
  actions: {
    async getRepositories ({ commit, getters }, value) {
      try {
        const url = `https://api.github.com/search/repositories?q=${value.value}`
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          commit('setRepositories', data.items)
          return data.items
        }
      } catch (e) {
        console.log(e)
      }
    },
    async getRepositoryById ({ _, getters }, id) {
      try {
        const data = await getters.repositories
        const repository = data.filter(rep => rep.id === id)
        return repository
      } catch (e) {
        console.log(e)
      }
    },
    async like ({ commit, getters }, id) {
      const data = await getters.repositories
      const repository = data.filter(rep => rep.id === id)
      const favorites = getters.favorites
      if (favorites.length > 0) {
        const find = []
        for (let i = 0; i < favorites.length; i++) {
          const findId = (favorites[i].find(item => item.id === id))
          if (findId) {
            find.push(findId)
          }
        }
        if (find.length < 1) {
          commit('setFavorites', repository)
        }
      } else {
        commit('setFavorites', repository)
      }
    },
    deleteFavorite ({ commit }, index) {
      commit('removeFavorite', index)
    }

  },
  getters: {
    repositories (state) {
      return state.repositories
    },
    favorites (state) {
      return state.favorites
    }
  }

}
