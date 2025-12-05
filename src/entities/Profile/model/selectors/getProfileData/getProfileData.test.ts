import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.test', () => {
  test('Should return data', () => {
    const data = {
      first: 'John',
      lastname: 'Doe',
      age: 30,
      currency: Currency.USD,
      country: Country.Armenia,
      city: 'New York',
      username: 'johndoe',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
