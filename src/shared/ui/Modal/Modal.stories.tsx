import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children:
    'lewfmkerfmwlkmewmdwnfwjkfnkje jnewkfjnkejfn kejnfkjwnfekj jenwfkewjnfkjn jnefkjwnekfjnwke',
}
