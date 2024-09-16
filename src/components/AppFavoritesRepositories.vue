<template>
  <div class="favorites__content favorites-content" v-for="(item, index) in favoritesRepositories" :key="index">
    <ul class="favorites-content__list favorites-list" v-for="rep in item" :key="rep.id">
      <li class="favorites-list__row list-item">
        <div class="list-item__header item-header">
          <img class="item-header__img" :src="rep.owner['avatar_url']" alt="logo repository">
          <a :href="rep['html_url']" class="item-header__title">{{rep["full_name"]}}</a>
          <button class="item-header__delete" @click="favoritesDelete(index)">x</button>
        </div>
        <div class="list-item__bottom item-bottom">
          <div class="item-bottom__stars _icon-star"><p>{{rep["stargazers_count"]}}</p></div>
          <div class="item-bottom__fork _icon-fork"><p>{{rep["forks_count"]}}</p></div>
        </div>
      </li>

    </ul>

  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    favorites: {
      type: Array
    }
  },
  setup (props) {
    const store = useStore()
    const favoritesRepositories = computed(() => props.favorites)

    function favoritesDelete (index) {
      store.dispatch('repositories/deleteFavorite', index)
    }

    return {
      favoritesRepositories, favoritesDelete
    }
  }

}
</script>

<style scoped>

</style>
