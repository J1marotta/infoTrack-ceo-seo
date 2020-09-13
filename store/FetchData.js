import axios from 'axios'

export const fetchData = async ({ searchQuery, mode, set }) => {
  // use mode here
  const google = `https://sudden-magic-pressure.glitch.me/google/business`
  const bing = `https://sudden-magic-pressure.glitch.me/bing/business`

  set('status')({
    page: 'ready',
    search: 'ready',
    results: 'loading',
  })

  const baseUrl = google

  const searchUrl = `${baseUrl}/search?q=${searchQuery}`

  const url = searchUrl

  try {
    const results = await axios.request({
      method: 'get',
      url,
    })

    console.log({ results })
  } catch (e) {
    console.error({ e })
    set('status')({
      page: 'ready',
      search: 'ready',
      results: 'error',
    })
    throw new Error('Fetch Failed, check the API')
  } finally {
    set('status')({
      page: 'ready',
      search: 'ready',
      results: 'ready',
    })
  }
}
