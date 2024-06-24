<template>
  <div class="container my-10">
    <h1 class="text-4xl font-medium text-center">Directives</h1>

    <input v-focus class="border p-3 " type="text">

    <p v-color="'red'">Lorem ipsum dolor sit amet.</p>
    <p v-color="'yellow'">Lorem ipsum dolor sit amet.</p>

    <button v-tooltip="'hello'">button</button>

    <div class="bg-gray-200 p-5 rounded">
      <p>Lorem, ipsum dolor. </p>
    </div>


    <div class="bg-gray-200 my-5 p-5 rounded">
      <input class="p-3 border" v-maska value="+998" data-maska="+998 ## ### ## ##" />
      <input class="p-3 border" v-maska data-maska="#### #### #### ####" />
      <input class="p-3 border" v-maska data-maska="##/##" />
    </div>

  </div>
</template>

<script setup>
import { vMaska } from 'maska/vue'
</script>

<style lang="scss" scoped></style>