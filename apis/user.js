export async function login(requestBody) {
  return await useHttp.post('/auth/login', {
    lazy: true,
    body: requestBody
  })
}
