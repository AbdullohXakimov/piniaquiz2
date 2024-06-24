<template>
  <div class="my-10">
    <div class="container">

      <h1 class="text-3xl mb-5">Products

        <span>
          <Icon class="text-black" icon="mdi:home" />
        </span>
      </h1>
      <input v-model="searchText" placeholder="search..."
        class="w-full my-5 py-3 px-5 border border-gray-800 rounded outline-none focus:border-primary" type="text">
      <Loading v-if="loading" />
      <div class="grid grid-cols-4 gap-5">
        <router-link class="bg-gray-200 rounded p-5" :to="{ name: 'product-detail', params: { id: item.id } }"
          v-for="item in products" :key="item.id">

          <img :src="item.thumbnail" alt="">

          <h1 class="text-2xl font-medium line-clamp-1 my-3"> {{ item.title }}</h1>
          <p class="line-clamp-2 mb-3">{{ item.description }}</p>
          <h1 class="text-2xl font-medium"> {{ item.price }} $</h1>


        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { reactive, ref, watch } from 'vue'
const products = ref([])
import api from '@/api'
import Loading from '../components/Loading.vue';

const loading = ref(false)
const searchText = ref('')

const fetchProducts = () => {
  loading.value = true
  api.get('/products/search', { params: { q: searchText.value, limit: 5 } })
    .then((res) => {
      products.value = res.data.products
      console.log('products', products.value);
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
      loading.value = false
    })
}

fetchProducts()


watch(
  searchText, (newValue) => {
    fetchProducts()
  }
)

</script>

<style lang="scss" scoped></style>