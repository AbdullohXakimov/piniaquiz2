<template>
  <div class="py-10">
    <div class="container">

      <h1 class="mb-10" v-tooltip="'salom'">Home page</h1>

      <Loading />

      <Example>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus adipisci rem.</p>
      </Example>


      <Example>

        <template v-slot:first>
          <div class="flex gap-5">

            <button v-if="3 > 5" class="bg-red-500 p-5">button 1</button>
            <button v-if="3 < 5" class="bg-red-500 p-5">button 2</button>
            <button v-else>ads</button>
            <button v-show="3 > 5" class="bg-red-500 p-5">button 3</button>
            <button v-show="3 < 5" class="bg-red-500 p-5">button 4</button>
          </div>
        </template>
      </Example>

    </div>
  </div>
</template>

<script setup>
import Example from '../components/Example.vue';



</script>

<style lang="scss" scoped></style>