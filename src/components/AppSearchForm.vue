<template>
  <form class="search__form-control" @submit.prevent="onSubmit">
    <div class="form-control__row">
      <div class="form-control__item">
        <div class="form-control__input-row">
          <input type="text" class="form-control__input" placeholder="Поиск по репозиториям GitHub"
                 v-model="inputValue">
          <div class="form-control__icon _icon-search"></div>
        </div>
        <button type="button" :class="['form-control__btn', {'form-control-btn-copy': isCopy }]" @click="copyInput">
          {{titleBtn}}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const inputValue = ref(null)
    const titleBtn = ref('скопировать')
    const isCopy = ref(false)

    async function onSubmit () {
      try {
        await store.dispatch('repositories/getRepositories', inputValue)
      } catch (e) {
        console.log(e)
      }
    }

    async function copyInput () {
      if (inputValue.value) {
        await navigator.clipboard.writeText(inputValue.value)
        setTimeout(() => {
          isCopy.value = true
          titleBtn.value = 'Copied'
        }, 2000)
      }
    }

    return {
      inputValue, onSubmit, copyInput, isCopy, titleBtn
    }
  }

}
</script>

<style scoped>

</style>
