import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/tests/storybook.jpg'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: 'John',
        lastname: 'Doe',
        age: 30,
        currency: Currency.USD,
        country: Country.Armenia,
        city: 'New York',
        username: 'johndoe',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        first: 'John',
        lastname: 'Doe',
        age: 30,
        currency: Currency.USD,
        country: Country.Armenia,
        city: 'New York',
        username: 'johndoe',
        avatar: avatar,
      },
    },
  }),
]
