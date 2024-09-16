<template>
  <div class="result__row">

    <div class="result__progress" v-if="repositories">
      <progress value="0" max="100"></progress>
    </div>
    <ul class="result__list result-list">
      <li class="result-list__item list-item" v-for="item in repositories" :key="item.id">
        <div class="list-item__header item-header">
          <img class="item-header__img" :src="item.owner['avatar_url']" alt="logo repository">
          <a :href="item['html_url']" class="item-header__title">{{item["full_name"]}}</a>
        </div>
        <div class="list-item__bottom item-bottom">
          <div class="item-bottom__stars _icon-star"><p>{{item["stargazers_count"]}}</p></div>
          <div class="item-bottom__fork _icon-fork"><p>{{item["forks_count"]}}</p></div>

          <button type="button" class="item-bottom__like _icon-heart" @click="like(item.id)"></button>
        </div>
        <router-link :to="'/repository/' + item.id" class="list-item__link">Подробнее</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    repositoriesData: {
      type: Array
    }
  },
  setup (props) {
    const store = useStore()
    const repositories = computed(() => props.repositoriesData)

    async function like (id) {
      await store.dispatch('repositories/like', id)
    }

    onMounted(() => {
      store.dispatch('progressBar/progressBar')
    })

    return {
      repositories, like
    }
  }

}
</script>

<style scoped>

</style>
