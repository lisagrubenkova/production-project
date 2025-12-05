import { validateProfileData } from './validateProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../types/profile'

const data = {
  first: 'John',
  lastname: 'Doe',
  age: 30,
  currency: Currency.USD,
  country: Country.Armenia,
  city: 'New York',
  username: 'johndoe',
}

describe('validateProfileData.test', () => {
  test('succes', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({
      ...data,
      age: -5,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('incorrect country', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
