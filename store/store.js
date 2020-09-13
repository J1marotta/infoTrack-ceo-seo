import create from 'zustand'

const useStore = create((set) => ({
  set: (y) => (x) => set(() => ({ [y]: x })),
  googleSeo: 20,
  bingSeo: 100,
  googleData: [],
  bingData: [],
  searchQuery: '',
  mode: 'business',
  setMode: () =>
    set((state) => ({
      status: 'animating',
      mode: state.mode === 'business' ? 'fancy' : 'business',
    })),
  status: 'ready',
}))

export default useStore
