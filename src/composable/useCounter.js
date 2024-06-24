import { ref, computed } from "vue";


export function useCounter() {
  const count = ref(0)


  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }

  const double = computed(() => {
    return count.value * 2
  })


  return { count, double, increment, decrement }
}