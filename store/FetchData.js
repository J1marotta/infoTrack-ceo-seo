import axios from 'axios'
import useStore from './store'

export const fetchData = async ({
  searchQuery,
  mode,
  set,
  googleData,
  bingData,
}) => {
  // if we use fancy mode we should hit the real google/bing (not yet implemented)

  const urls = [
    `https://sudden-magic-pressure.glitch.me/google/${mode}/${searchQuery}`,
    `https://sudden-magic-pressure.glitch.me/bing/${mode}/${searchQuery}`,
  ]

  set('status')({
    page: 'ready',
    search: 'ready',
    results: 'loading',
  })

  try {
    const googleResults = await axios.request({
      method: 'get',
      url: urls[0],
    })

    const bingResults = await axios.request({
      method: 'get',
      url: urls[1],
    })

    set('googleData')(googleResults.data)
    set('bingData')(bingResults.data)

    console.log('done', useStore.getState())
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
