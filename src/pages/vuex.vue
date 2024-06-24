<template>
  <div class="container">
    <h1 class="text-3xl text-center font-bold my-5">Vuex</h1>

    {{ count }}

    <div class="grid grid-cols-4 gap-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      products: []
    }
  },
  components: { ProductCard },
  computed: mapState(['count']),
  created() {
    this.fetchProducts()
  },
  methods: {
    increment() {
      // this.$store.state.count++    bu mumkinmas
      // this.$store.commit('INCREMENT')

      this.$store.dispatch('increment')
    },

    fetchProducts() {
      axios.get('https://dummyjson.com/products')
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => {
          console.log('error', err);
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>