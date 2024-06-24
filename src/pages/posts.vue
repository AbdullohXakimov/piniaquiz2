<template>
  <div class="mt-5">
    <div class="container">
      <h1 class="text-3xl">Fetch Posts</h1>


      <Loading v-if="loading" />




      <div class="flex flex-col gap-5 mt-5">
        <input class="border py-2 px-4 focus:outline-none" v-model="newPost.title" type="text" placeholder="title">
        <input class="border py-2 px-4 focus:outline-none" v-model="newPost.body" type="text" placeholder="body">
        <button class="py-3 px-10 rounded hover:bg-gray-600 bg-gray-400 text-white text-2xl"
          @click="addPost">Post</button>
      </div>

      <pre>{{ newPost }}</pre>


      <div class="mt-5">
        <div class="shadow-md p-5 rounded mb-5" v-for="post, index in posts" :key="index">
          <h1>{{ post.title }}</h1>
          <p>{{ post.body }}</p>

          <div class="flex gap-5">
            <button @click="getPost(post.id)">edit</button>
            <button @click="deletePost(post.id)">delete</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Loading from '../components/Loading.vue';
import { ref } from 'vue';
import axios from 'axios'

const posts = ref([])

const loading = ref(false)

const newPost = ref({
  title: '',
  body: ''
})


// const fetchPosts = async () => {
//   try {
//     loading.value = true
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     posts.value = data

//     console.log('posts', posts.value)
//   }
//   catch (err) {
//     console.log('error')
//   }
//   finally {
//     console.log('finally');
//     loading.value = false
//   }
// }


// const fetchPosts = () => {
//   loading.value = true
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       posts.value = data
//     })
//     .catch((err) => {
//       console.log('error', err);
//     })
//     .finally(() => {
//       console.log('finally')
//       loading.value = false
//     })
// }



const fetchPosts = () => {

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      posts.value = res.data
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
      console.log('finally');
    })

}




const addPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {},
    data: newPost.value
  })

  posts.value.push(newPost.value)

  console.log(posts.value);

  // newPost.value.title = ''
  // newPost.value.body = ''
}


fetchPosts()



const getPost = (id) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      console.log('res', res);

      newPost.value = res.data
    })
    .catch((err) => {
      console.log('err', err);
    })
}

const deletePost = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      console.log('res', res);
      posts.value.forEach((item, index) => {
        if (item.id == id) {
          posts.value.splice(index, 1)
        }
      })
      // fetchPosts()
    })
    .catch((err) => {
      console.log('err', err);
    })
}





</script>

<style lang="scss" scoped></style>