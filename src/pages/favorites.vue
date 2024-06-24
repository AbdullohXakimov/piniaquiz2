<template>
  <div class="container">
    <h1 class="text-3xl text-center font-bold my-5">Favorites</h1>

    <QuizzApp />

    <div class="grid grid-cols-4 gap-5">
      <ProductCard @handle="handleClick" v-for="product in likedProducts" :key="product.id" :product="product" />
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../components/ProductCard.vue';
import QuizzApp from '../components/QuizzApp.vue';
export default {
  components: { ProductCard, QuizzApp },

  computed: mapState(['likedProducts']),
  // {
  //   products() {
  //     return this.$store.state.likedProducts
  //   }
  // }
  methods: {
    handleClick() {
      alert('ok')
    }
  }


}
</script>

<style lang="scss" scoped></style>