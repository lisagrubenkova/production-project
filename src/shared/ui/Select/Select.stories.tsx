import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select Label',
  options: [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2' },
    { value: '3', content: 'Option 3' },
  ],
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  label: 'Select Label',
  options: [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2' },
    { value: '3', content: 'Option 3' },
  ],
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
