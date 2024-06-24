<script setup>
import { toRefs } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props)

const toogleSide = () => {
  emit('update:modelValue', !modelValue.value)
}

</script>


<template>
  <div :class="modelValue ? 'w-[45%]' : 'w-[65px]'" class="fixed top-0 right-0 h-screen duration-300 bg-primary ">
    <div class="flex items-center justify-between shadow-md  pr-5">
      <div>
        <button class="bg-orange-700 py-8 px-2 flex justify-center hover:bg-slate-900 hover:text-white"
          :class="!modelValue ? 'w-[65px]' : ''" @click="toogleSide">

          <Icon :class="!modelValue ? '' : 'rotate-180'" class="text-4xl" icon="iconamoon:arrow-left-2-bold" />


        </button>
      </div>

      <div class="text-3xl py-8">
        time
      </div>

      <button>chiqish</button>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>