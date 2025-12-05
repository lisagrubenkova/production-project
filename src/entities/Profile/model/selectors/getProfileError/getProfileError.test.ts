import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileError.test', () => {
  test('Should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('error')
  })
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
