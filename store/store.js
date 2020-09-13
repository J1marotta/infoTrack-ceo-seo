import create from 'zustand'

const useStore = create((set) => ({
  googleSeo: 20,
  bingSeo: 100,
  googleData: [],
  bingData: [],
  searchQuery: '',
  setSearch: (x) => set(() => ({ searchQuery: x })),
  clearSearch: () => set(() => ({ searchQuery: '' })),
  mode: 'business',
  setMode: () =>
    set((state) => ({
      status: 'animating',
      mode: state.mode === 'business' ? 'fancy' : 'business',
    })),
  status: 'ready',
  setStatus: (x) => set(() => ({ status: x })),
}))

export default useStore
