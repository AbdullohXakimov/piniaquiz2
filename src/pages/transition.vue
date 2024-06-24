<template>
  <div class="container">
    <h1 class="text-3xl text-center font-semibold">Transitions</h1>


    <Transition name="fade">
      <h2 v-if="isShow">Lorem ipsum dolor sit amet.</h2>
    </Transition>

    <button class="bg-gray-200 py-2 px-4 rounded mr-5" @click="isShow = !isShow">show text</button>


    <button class="bg-gray-200 py-2 px-4 rounded mr-5" @click="addItem">add Item</button>
    <button class="bg-gray-200 py-2 px-4 rounded" @click="shuffle">Shuffle</button>

    <TransitionGroup name="list" tag="ul" class="ul-container">

      <li v-for="item, index in items" :key="item" class="item">
        {{ item }}
        <button @click="removeItem(index)">remove</button>
      </li>

    </TransitionGroup>


    <!--     
    <TransitionGroup tag="ul" name="list" class="ul-container">
      <li v-for="item, index in items" class="item" :key="item">
        {{ item }}
        <button @click="remove(index)">x</button>
      </li>
    </TransitionGroup> -->


    <button @click="notify">Notify !</button>


    <h1> {{ $t('test') }} </h1>

    <select name="" id="" v-model="$i18n.locale">

      <option value="uz">uz</option>
      <option value="ru">ru</option>
      <option value="en">en</option>

    </select>



  </div>
</template>

<script setup>


import { toast } from 'vue3-toastify';

import { ref } from 'vue'
const isShow = ref(false)


const notify = () => {
  toast("Wow so easy !", {
    autoClose: 5000,
  }); // ToastOptions
  // toast.error("Wow so easy !", {
  //   autoClose: 5000,
  // }); // ToastOptions
  // toast.success("Wow so easy !", {
  //   autoClose: 5000,
  // }); // ToastOptions
  // toast.info("Wow so easy !", {
  //   autoClose: 5000,
  // }); // ToastOptions
  // toast.warning("Wow so easy !", {
  //   autoClose: 5000,
  // }); // ToastOptions
}



const items = ref([1, 2, 3, 4, 5])

const addItem = () => {
  items.value.push(items.value.length + 1)
}

const removeItem = (index) => {
  items.value.splice(index, 1)
}
const shuffle = () => {
  items.value.sort(() => .5 - Math.random())
}

</script>

<style  scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
.ul-container {
  position: relative;
  padding: 0;
  list-style-type: none;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>