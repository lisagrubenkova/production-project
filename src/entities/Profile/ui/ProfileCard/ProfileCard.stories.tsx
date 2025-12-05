import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/tests/storybook.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    first: 'John',
    lastname: 'Doe',
    age: 30,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'New York',
    username: 'johndoe',
    avatar: avatar,
  },
}

export const WithError = Template.bind({})
WithError.args = {
  error: 'Error loading profile',
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
