<template>
  <div class="hover:bg-gray-200 p-5 mb-5">
    <h1 class="text-4xl font-bold mb-5">{{ quizz.question }}</h1>

    <div class="flex flex-col">

      <label :class="quizz.answers[answerIndex] == quizz.userAnswer ? 'bg-slate-900 text-white' : 'hover:bg-primary'"
        class=" p-8 text-2xl" v-for="answer, answerIndex in quizz.answers" :for="`id-${quizz.id}-${answerIndex}`">
        {{ 'abcd'[answerIndex] }} ) {{ answer }}
        <input @change="selectAnswer(answerIndex)" class="hidden" type="radio" :name="`answer-${quizz.id}`"
          :id="`id-${quizz.id}-${answerIndex}`">
      </label>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  quizz: {
    type: Object
  }
})

const userAnswer = ref('')

const emit = defineEmits(['user-select-answer'])

const selectAnswer = (index) => {
  userAnswer.value = props.quizz.answers[index]

  emit('user-select-answer', {
    id: props.quizz.id,
    userAnswer: userAnswer.value
  })

}

</script>

<style lang="scss" scoped></style>