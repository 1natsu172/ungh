export default eventHandler(async () => {
  const runtimeConfig = useRuntimeConfig();
  const res = await $fetch.raw('/meta', {
    baseURL: "https://api.github.com",
    headers: {
      "User-Agent": "fetch",
      Authorization: "token " + runtimeConfig.GH_TOKEN,
    },
  })
  const headers = Object.fromEntries(res.headers.entries())
  console.log(headers)
  return {
    rateLimit: headers['x-ratelimit-remaining'] + '/' + headers['x-ratelimit-limit'],
  }
})
