import axios from 'axios'

export const fetchData = async ({ searchQuery, mode, set }) => {
  // use mode here
  const google = `https://sudden-magic-pressure.glitch.me/google/business`
  const bing = `https://sudden-magic-pressure.glitch.me/bing/business`

  set('status')('loading')

  const baseUrl = google

  const searchUrl = `${baseUrl}/search?q=${query}`

  const url = searchUrl

  try {
    if (query.length > 2) {
      const results = await axios.request({
        method: 'get',
        url,
      })

      console.log({ results })
    }
  } catch (e) {
    console.error({ e })
    set('status')('error')
    throw new Error('Fetch Failed, check the API')
  } finally {
    set('status')('ready')
  }
}
