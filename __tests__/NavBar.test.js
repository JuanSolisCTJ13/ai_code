import { render, screen } from '@testing-library/react'
import NavBar from '../components/NavBar'
import '@testing-library/jest-dom'

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(<NavBar />)
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Productos')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })
})
