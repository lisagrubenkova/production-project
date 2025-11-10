import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/config/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'
import React from 'react'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'

describe('Sidebar tests', () => {
  test('Test render', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    componentRender(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
