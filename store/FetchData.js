import axios from 'axios'

export const fetchData = async ({ searchQuery, mode = 'google', set }) => {
  // use mode here
  const googleUrl = `https://sudden-magic-pressure.glitch.me/google/${mode}/${searchQuery}`
  const bingUrl = `https://sudden-magic-pressure.glitch.me/bing/${mode}/${searchQuery}`

  set('status')({
    page: 'ready',
    search: 'ready',
    results: 'loading',
  })

  const url = googleUrl

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
  } finally {
    set('status')({
      page: 'ready',
      search: 'ready',
      results: 'ready',
    })
  }
}
