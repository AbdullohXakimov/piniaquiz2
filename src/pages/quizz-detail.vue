<template>
  <div class="container">


    <h2 class="text-3xl  font-semibold text-center my-5">{{ currentQuizz.theme }}</h2>

    <div class="mb-3" v-for="question, index in currentQuizz.questions" :key="question.id">
      <h2 class="text-3xl">{{ index + 1 }}) {{ question.question }}</h2>

      <div class="mt-2 ml-5" v-for="answer in question.options" :key="answer.id">

        <label class="inline-flex gap-4 items-center cursor-pointer text-xl flex-row-reverse"
          :for="`${question.id}` + answer.id">
          {{ answer.text }} Lorem ipsum dolor sit.
          <input class="w-5 h-5" :id="`${question.id}` + answer.id" type="radio" :name="'q' + question.id">
        </label>

      </div>
    </div>




  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePiniaStore } from '../store/pinia'

const route = useRoute()
const piniaStore = usePiniaStore()

const currentQuizz = piniaStore.quizzes.find((item) => item.id == route.params.id)




</script>

<style lang="scss" scoped></style>