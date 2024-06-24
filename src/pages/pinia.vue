<template>
  <div class="container">
    <h1 class="text-3xl text-center font-semibold my-5">Pinia</h1>
    <div class="flex justify-between items-center">

      <h2 class="text-3xl  font-semibold my-5">Quizzes</h2>
      <router-link to="/create-quizz">
        Create quizz
      </router-link>
    </div>

    <router-link class="" :to="{ name: 'quizz-detail', params: { id: quizz.id } }" v-for="quizz in piniaStore.quizzes">
      <div class="bg-gray-200 p-5 rounded">

        <h2>{{ quizz.theme }}</h2>
      </div>
    </router-link>


  </div>
</template>

<script setup>

import { usePiniaStore } from '../store/pinia';

const piniaStore = usePiniaStore()

console.log('store', piniaStore);

</script>

<style lang="scss" scoped></style>