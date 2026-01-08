import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { IComment } from 'entities/Comment'

export const fetchCommentByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  if (!articleId) {
    return rejectWithValue('error')
  }

  try {
    const response = await extra.api.get<IComment[]>(`/comments/`, {
      params: {
        articleId,
        _expand: 'user',
      },
    })

    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
