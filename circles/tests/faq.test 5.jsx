import { render, screen } from '@testing-library/react'
import Faq from '../pages/help'
import '@testing-library/jest-dom'

describe('Faq', () => {
  it('renders a heading', () => {
    render(<Help />)

    const heading = screen.getByRole('heading', {
      name: /Useful Links & FAQ's!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})