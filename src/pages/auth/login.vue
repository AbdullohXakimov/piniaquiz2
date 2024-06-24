<template>
  <div class="bg-gray-300 h-screen flex justify-center items-center">


    <div class="bg-white w-[500px] p-10 rounded">
      <h1 class="text-center text-3xl mb-5">Login</h1>

      <form @submit.prevent="loginUser" class="flex flex-col gap-5">
        <label for="">
          Username
          <input v-model="userData.username" class="w-full py-3 px-5 border rounded outline-none focus:border-primary"
            type="text">
        </label>
        <label for="">
          Password
          <input @input="handleInput" v-model="userData.password"
            :class="$v.userData.password.minLength && $v.userData.password.$error ? '!border-red-500' : ''"
            class="w-full py-3 px-5 border rounded outline-none focus:border-primary" type="text">

          <span v-if="$v.userData.password.minLength && $v.userData.password.$error" class="text-red-500">parol kamida
            6ta
            belgi bo'lishi kerak </span>
        </label>

        <h2 v-if="isError" class="text-red-500">Login or password wrong!</h2>

        <button class="py-3 px-5 text-xl bg-primary rounded text-white">Login</button>
      </form>
    </div>


  </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { ref, reactive } from 'vue';
import api from '@/api'

import { useRouter } from 'vue-router'

const router = useRouter()
const isError = ref(false)

const userData = reactive({
  username: '',
  password: ''
})

const rules = {
  userData: {
    username: { required },
    password: { required, minLength: minLength(6) }
  }
}


const $v = useVuelidate(rules, { userData })


const handleInput = () => {

  console.log('test', $v.value.userData.password);
}

const loginUser = () => {

  $v.value.$touch()
  console.log('test', $v.value.userData.password);

  // api.post('/auth/login', userData)
  //   .then((res) => {
  //     localStorage.setItem('user', JSON.stringify(res.data))
  //     router.push('/home')
  //     console.log('res', res);
  //   })
  //   .catch((err) => {
  //     isError.value = true
  //     console.log('err', err);
  //   })
}

</script>

<style  scoped></style>