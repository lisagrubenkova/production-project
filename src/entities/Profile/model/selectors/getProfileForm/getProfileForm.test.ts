import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
  test('Should return form', () => {
    const form = {
      first: 'Jane',
      lastname: 'Smith',
      age: 25,
      city: 'Berlin',
      username: 'janesmith',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    }

    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
