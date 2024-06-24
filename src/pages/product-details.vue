<template>
  <div class="my-10">
    <div class="container">

      <button @click="backPage">orqaga</button>

      <Loading v-if="loading" />



      <div v-if="product">

        <div class="grid grid-cols-2 gap-10">
          <div class="">
            <img class="w-full" :src="product.thumbnail" alt="">
          </div>
          <div>
            <h1 class="text-3xl font-medium">{{ product.title }}</h1>
            <p class="text-gray-500 my-5">{{ product.description }}</p>

            <h1 class="text-3xl font-medium">{{ product.price }} $</h1>
          </div>
        </div>


        <h2 class="text-3xl font-medium mb-10">Reviews</h2>

        <div>
          <div class="mb-5" v-for="review in product.reviews">

            <div class="flex items-center gap-5">
              <h2 class="text-2xl font-bold">{{ review.reviewerName }}</h2>
              <span class="text-xl">{{ review.date.slice(0, 10) }}</span>
            </div>

            <p class="text-gray-500">{{ review.comment }}</p>

          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script setup>
import Loading from '@/components/Loading.vue';
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
import api from '@/api'

const route = useRoute()

const router = useRouter()
const product = ref(null)
const loading = ref(false)

const backPage = () => {
  router.go(-1)
}


const fetchProduct = () => {
  loading.value = true
  api.get(`/products/${route.params.id}`)
    .then((res) => {
      product.value = res.data
    })
    .catch((err) => console.log(err))
    .finally(() => {
      loading.value = false
    })
}

fetchProduct()

</script>

<style lang="scss" scoped></style>