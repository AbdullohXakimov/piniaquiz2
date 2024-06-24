import { ref } from 'vue';

import axios from 'axios'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  axios.get(url)
    .then((res) => {
      data.value = res.data
    })
    .catch((err) => {
      error.value = err
    })
    .finally(() => {
      loading.value = false
    })

  return { data, error, loading }

}

