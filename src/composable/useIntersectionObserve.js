import { ref, onMounted } from 'vue';



export function useIntersectionObserve(target) {

  const isIntersecting = ref(false)

  const observer = new IntersectionObserver((entry) => {
    isIntersecting.value = entry[0].isIntersecting
    console.log('entry', entry);
  })

  onMounted(() => {
    observer.observe(target.value)
  });

  return { isIntersecting }

}