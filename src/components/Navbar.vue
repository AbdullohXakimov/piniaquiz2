<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const user = ref(null)
const router = useRouter()

user.value = JSON.parse(localStorage.getItem('user'))

console.log('user', user);

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>



<template>
  <div class="shadow-md py-6">

    <div class="container ">

      <div class="flex justify-between gap-x-5">

        <div>

          <router-link class="[&.router-link-active]:bg-red-500" to="/home">Home</router-link>
          <router-link class="[&.router-link-active]:bg-red-500" to="/about">About</router-link>
          <router-link class="[&.router-link-active]:bg-red-500" to="/products">Products</router-link>
          <router-link class="[&.router-link-active]:bg-red-500" to="/posts">Posts</router-link>

        </div>
        <div>

          <div v-if="user" class="flex items-center gap-2">
            <img class="w-8 h-8 rounded-full" :src="user.image" alt="">
            <h2 class="text-2xl font-medium">{{ user.firstName }}</h2>

            <button @click="logout">Logout</button>
          </div>

          <div v-else>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
          </div>

        </div>

      </div>

    </div>



  </div>
</template>



<style lang="scss" scoped></style>