<template>
  <div class="container my-40">
    <h1 class="text-3xl my-5 text-center font-medium">Composable</h1>

    <div>
      <h2>Products</h2>

      <div class="grid grid-cols-4 gap-5">
        <div class="bg-gray-200 p-5 rounded" v-for="product in products" :key="products.id">

          <img :src="product.thumbnail" alt="">

          <h1 class="text-2xl font-medium line-clamp-1 my-3"> {{ product.title }}</h1>
          <p class="line-clamp-2 mb-3">{{ product.description }}</p>
          <h1 class="text-2xl font-medium"> {{ product.price }} $</h1>
        </div>
      </div>

      <div ref="loadmore">
        <Loading v-if="loading" />
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Loading from '../components/Loading.vue';
import { useProducts } from '../composable/useProducts';
import { useIntersectionObserve } from '../composable/useIntersectionObserve';

const loadmore = ref(null)

const { isIntersecting } = useIntersectionObserve(loadmore)

const { products, loading, error, fetchProducts } = useProducts()

// fetchProducts()

watch(
  isIntersecting, (newValue) => {
    console.log('newvalue', newValue);
    if (newValue) {
      fetchProducts()
    }
  })

</script>

<style lang="scss" scoped></style>