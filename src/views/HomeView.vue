<template>
  <div class="home">
    <div class="home__wrapper container">
      <div class="home__items home-item">
        <div class="home-item__search-form search">
          <search-form></search-form>
        </div>
        <div class="home-item__row home-item-row">
          <div class="home-item-row__result result" v-if="data">
            <div class="result__wrapper">
              <h1 class="result__title" v-if="data.length > 0">Всего найдено {{data.length}} репозиториев:</h1>
              <h1 class="result__title" v-else>По Вашему запросу ничего не найдено :(</h1>
              <repository-info v-if="data.length > 0" :repositoriesData="data"></repository-info>
            </div>
          </div>
          <div class="home-item-row__favorites favorites" v-if="favorites.length > 0">
            <div class="favorites__wrapper">
              <h2 class="favorites__title">Избранные репозитории:</h2>
              <repository-favorites v-if="favorites.length > 0" :favorites="favorites"></repository-favorites>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppSearchForm from '../components/AppSearchForm'
import AppRepositoryInfo from '../components/AppRepositoryInfo'
import AppFavoritesRepositories from '../components/AppFavoritesRepositories'

export default {
  setup () {
    const store = useStore()
    const data = computed(() => store.getters['repositories/repositories'])
    const favorites = computed(() => store.getters['repositories/favorites'])
    return {
      data, favorites

    }
  },

  components: {
    'search-form': AppSearchForm,
    'repository-info': AppRepositoryInfo,
    'repository-favorites': AppFavoritesRepositories
  }

}
</script>

<style scoped>

</style>
