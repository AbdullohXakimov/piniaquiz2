<template>
  <div class="container">
    <h1 class="text-3xl font-semibold my-5">Create Quiz</h1>

    <div>
      <input
        v-model="newQuizz.theme"
        class="border py-3 px-5 rounded w-full focus:outline-none text-2xl focus:border-primary"
        type="text"
        placeholder="Theme..."
      />

      <div
        class="mt-3 border border-primary p-5"
        v-for="question in newQuizz.questions"
        :key="question.id"
      >
        <input
          v-model="question.question"
          class="border py-3 px-5 rounded w-full focus:outline-none text-2xl focus:border-primary"
          type="text"
          placeholder="Question..."
        />

        <div class="mt-3" v-for="answer in question.options" :key="answer.id">
          <div
            class="inline-flex gap-4 items-center cursor-pointer text-xl flex-row-reverse"
          >
            <button
              @click="removeOption(question.id, answer.id)"
              v-if="question.options.length > 2"
            >
              Remove
            </button>
            <input
              v-model="answer.text"
              class="border py-3 px-5 rounded w-full focus:outline-none text-2xl focus:border-primary"
              type="text"
              placeholder="Option..."
            />
            <input
              @change="hearsome(question.id, answer.id)"
              class="w-5 h-5"
              :id="`${question.id}-${answer.id}`"
              type="radio"
              :name="'q' + question.id"
              :value="answer.id"
            />
          </div>
        </div>
        <button
          v-if="question.options.length < 4"
          @click="addOption(question.id)"
        >
          Add Option
        </button>
      </div>
    </div>

    <div class="flex justify-end mt-5 gap-5">
      <button @click="addQuestion()">Add Question</button>
      <button @click="addQuizz()">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePiniaStore } from "../store/pinia";

const newQuizz = ref({
  id: new Date().getTime(),
  theme: "",
  questions: [
    {
      id: 1,
      question: "",
      options: [
        { id: 1, text: "" },
        { id: 2, text: "" },
      ],
      answer: null,
    },
    {
      id: 2,
      question: "",
      options: [
        { id: 1, text: "" },
        { id: 2, text: "" },
      ],
      answer: null,
    },
  ],
});

const addQuestion = () => {
  const newId = newQuizz.value.questions.length + 1;
  newQuizz.value.questions.push({
    id: newId,
    question: "",
    options: [
      { id: 1, text: "" },
      { id: 2, text: "" },
    ],
    answer: null,
  });
};

const addOption = (questionId) => {
  const question = newQuizz.value.questions.find((q) => q.id === questionId);
  question.options.push({
    id: question.options.length + 1,
    text: "",
  });
};

const removeOption = (questionId, answerId) => {
  const question = newQuizz.value.questions.find((q) => q.id === questionId);
  question.options = question.options.filter(
    (option) => option.id !== answerId
  );
};

const router = useRouter();
const store = usePiniaStore();

const hearsome = (one, two) => {
  const question = newQuizz.value.questions.find((q) => q.id === one);
  const option = question.options.find((q) => q.id === two);
  question.answer = option.text;
  console.log(question.answer);
};

const addQuizz = () => {
  store.saveQuizz(newQuizz.value);
  router.push({ name: "pinia" });
};
</script>

<style lang="scss" scoped></style>
