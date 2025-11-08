/* eslint-disable react/display-name */
import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import React from 'react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
