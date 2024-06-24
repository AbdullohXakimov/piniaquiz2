<template>
  <div>
    <h1>Grandchild {{ message }}</h1>
  </div>
</template>

<script setup>
import { inject, provide } from 'vue';

const message = inject('message')

provide('test', 'test uchun')

</script>

<style lang="scss" scoped></style>