<template>
  <div>
    <h1>Example component</h1>
    <slot name="first" />

    <h1>Slot test</h1>

    <div>
      <div class="flex gap-10">
        <div class="bg-gray-200 p-5 ">1</div>
        <div class="bg-gray-200 p-5 ">
          <slot />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>