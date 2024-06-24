<template>
  <div class="container mx-auto">
    <div class="my-12">
      <div class="flex justify-between mb-10">
        <h2 class="text-3xl ">View our projects</h2>
        <div class="flex gap-2 mx-6">
          <button>View More</button>
          <svg class="my-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill="black" fill-rule="evenodd"
              d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-5">
        <div v-for="item in 3" :class="item == 1 ? 'col-span-2 row-span-2 ' : ''" class=" relative overflow-hidden group">
          <div :class="item == 1 ? 'w-[50%] ' : 'w-full'"
            class=" absolute top-0 duration-300 group-hover:left-0 -left-full h-full bg-gradient-to-br from-[#1C1E536B]/40 to-[#1C1E53]">
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, fugiat.</p>
          </div>
          <img class="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s" alt="">
        </div>

      </div>
    </div>


  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>