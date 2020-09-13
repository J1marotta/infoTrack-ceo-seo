import { render, act, screen, fireEvent, waitFor } from '@testing-library/react'
import useStore from '../store/store'
import App from '../pages/index'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('clear')).toBeInTheDocument()
    expect(screen.getByText('GOOGLE:')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
  })

  it('renders a loading spinner', () => {
    render(<App />)
    const { set } = useStore.getState()

    act(() => {
      set('status')({
        results: 'loading',
      })
    })

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('Fancy Button works', async () => {
    render(<App />)
    act(() => {
      fireEvent.click(screen.getByRole('radio'))
    })
    const fancyTitle = screen.getByLabelText('Seo Search')

    expect(fancyTitle).toBeVisible()
  })
})
