import axios from 'axios'
import { fetchProfileData } from './fetchProfileData'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
  first: 'John',
  lastname: 'Doe',
  age: 30,
  currency: 'USD',
  country: 'Armenia',
  city: 'New York',
  username: 'johndoe',
}

describe('fetchProfileData.test', () => {
  test('succes', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockResolvedValue(Promise.resolve({ data: data }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
