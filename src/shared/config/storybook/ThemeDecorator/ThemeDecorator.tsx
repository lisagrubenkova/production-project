/* eslint-disable react/display-name */
import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import React from 'react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
