import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsum',
  text: 'Descroption lorem ipsum icus amwn',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsum',
  text: 'Descroption lorem ipsum icus amwn',
  theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: 'Title lorem ipsum',
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: 'Descroption lorem ipsum icus amwn',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsum',
  text: 'Descroption lorem ipsum icus amwn',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Title lorem ipsum',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Descroption lorem ipsum icus amwn',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Size = Template.bind({})
Size.args = {
  title: 'Title lorem ipsum',
  text: 'Descroption lorem ipsum icus amwn',
  size: TextSize.L,
}
