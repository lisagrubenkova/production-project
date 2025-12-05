import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import avatar from 'shared/assets/tests/storybook.jpg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: avatar,
}

export const WithDefaultSize = Template.bind({})
WithDefaultSize.args = {
  src: avatar,
}
