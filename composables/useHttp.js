export async function useHttp(url, options = {}) {
  return await useFetch(url, {
    ...options,
    baseURL: process.env.NUXT_API_BASE_URL,
    onResponse: ({ response }) => {
      response._data = response._data.data

      const { code } = response._data

      if (code === UNAUTHORIZED) navigateTo('/login')

      return response._data
    }
  })
}

useHttp.get = (url, options = {}) => {
  return useHttp(url, {
    ...options,
    method: 'get'
  })
}

useHttp.post = (url, options) => {
  return useHttp(url, {
    ...options,
    method: 'post'
  })
}

useHttp.put = (url, options) => {
  return useHttp(url, {
    ...options,
    method: 'put'
  })
}

useHttp.delete = (url, options) => {
  return useHttp(url, {
    ...options,
    method: 'delete'
  })
}
