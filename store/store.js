import create from 'zustand'

const useStore = create((set) => ({
  set: (y) => (x) => set(() => ({ [y]: x })),
  googleData: [],
  bingData: [],
  searchQuery: '',
  mode: 'business',
  setMode: () =>
    set((state) => ({
      status: { ...state.status, search: 'animating' },
      mode: state.mode === 'business' ? 'fancy' : 'business',
    })),
  status: {
    page: 'ready',
    search: 'ready',
    results: 'ready',
  },
}))

export default useStore
