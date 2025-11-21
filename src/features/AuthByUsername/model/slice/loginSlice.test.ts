import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin',
    }
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('user')),
    ).toEqual({ username: 'user' })
  })
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    }
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('456')),
    ).toEqual({ password: '456' })
  })
})
