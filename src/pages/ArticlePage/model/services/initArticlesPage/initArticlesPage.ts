import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageAction } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi

  const inited = getArticlesPageInited(getState())
  if (!inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder
    const searchFromUrl = searchParams.get('search')
    const sortFromUrl = searchParams.get('sort') as ArticleSortField

    if (orderFromUrl) {
      dispatch(articlesPageAction.setOrder(orderFromUrl))
    }

    if (sortFromUrl) {
      dispatch(articlesPageAction.setSort(sortFromUrl))
    }

    if (searchFromUrl) {
      dispatch(articlesPageAction.setSearch(searchFromUrl))
    }
    dispatch(articlesPageAction.initState())
    dispatch(fetchArticlesList({}))
  }
})
