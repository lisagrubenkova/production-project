import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/profile'

describe('getProfileValidateErrors', () => {
  test('Should return validate errors', () => {
    const errors = [ValidateProfileError.INCORRECT_AGE]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
