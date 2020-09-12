import create from 'zustand'

const useStore = create(set => ({
  googleSeo: '',
  bingSeo: '',
  googleData: [],
  bingData: [],
  searchQuery: '',
  setSearch: (x) => set(() => ({ searchQuery: x })),
  clearSearch: () => set(() => ({ searchQuery: '' })),
  mode: 'business',
  setMode: () => set(state => ({
    mode: state.mode === 'business'
      ? 'fancy'
      : 'business'
  }))
}))


export default useStore