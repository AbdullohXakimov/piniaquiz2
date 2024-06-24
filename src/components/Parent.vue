<template>
  <div>
    <h1>Parent {{ test }}</h1>
    <Child />
  </div>
</template>

<script setup>
import { provide, inject } from 'vue';
import Child from './Child.vue';

const message = 'Provide message'


provide('message', message)

</script>

<style lang="scss" scoped></style>