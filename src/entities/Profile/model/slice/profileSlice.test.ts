import { updateProfileData } from 'entities/Profile'
import { ProfileSchema, Profile, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const data = {
  first: 'John',
  lastname: 'Doe',
  age: 30,
  currency: Currency.USD,
  country: Country.Armenia,
  city: 'New York',
  username: 'johndoe',
}

describe('profileSlice.test', () => {
  test('setReadonly should set readonly flag', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }

    const nextState = profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )

    expect(nextState).toEqual({ readonly: true })
  })

  test('cancelEdit should reset form to data and clear validateErrors', () => {
    const data: Profile = {
      first: 'John',
      lastname: 'Doe',
      age: 30,
      currency: undefined,
      country: undefined,
      city: 'NY',
      username: 'johndoe',
      avatar: undefined,
    }

    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      form: { ...data, first: 'Modified' },
      validateErrors: [ValidateProfileError.NO_DATA],
    }

    const nextState = profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )

    expect(nextState.readonly).toBe(true)
    expect(nextState.form).toEqual(data)
    expect(nextState.validateErrors).toEqual(undefined)
  })

  test('updateProfile should merge payload into form based on data', () => {
    const data: Profile = {
      first: 'Old',
      lastname: 'Name',
      age: 20,
      currency: undefined,
      country: undefined,
      city: 'City',
      username: 'olduser',
      avatar: undefined,
    }

    const state: DeepPartial<ProfileSchema> = {
      data,
      form: data,
    }

    const payload: Partial<Profile> = {
      first: 'New',
    }

    const nextState = profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile(payload as Profile),
    )

    expect(nextState.form).toEqual({ ...data, ...payload })
  })
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      form: data,
    })
  })
})
