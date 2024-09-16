<template>
  <div class="repository-info">
    <div class="repository-info__wrapper container">
      <ul class="repository-info__list repository-list" v-for="item in repository" :key="item.id">
        <li class="repository-list__item repository-item">
          <div class="repository-item__row">
            <h1 class="repository-item__name">{{item["full_name"]}}</h1>
            <img class="repository-item__img" :src="item.owner['avatar_url']" alt="logo repository">
          </div>
          <div class="repository-item__row">
            <p class="repository-item__title">Основной язык:</p>
            <p class="repository-item__text">{{ item.language}}</p>
          </div>
          <div class="repository-item__row">
            <p class="repository-item__title">Просмотры:</p>
            <p class="repository-item__text">{{ item["watchers_count"]}}</p>
          </div>
          <div class="repository-item__row">
            <a :href="item['html_url']" target="_blank" class="repository-item__link">Перейти к репозиторию</a>
            <router-link to="/" class="repository-item__link">Назад</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()
    const repository = ref(null)
    const repositoryId = +route.params.id
    onMounted(async () => {
      repository.value = await store.dispatch('repositories/getRepositoryById', repositoryId)
    })

    return {
      repositoryId, repository

    }
  }

}
</script>

<style scoped>

</style>
