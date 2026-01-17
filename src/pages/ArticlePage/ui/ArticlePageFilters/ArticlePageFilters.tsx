import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePageFilters.module.scss'
import { ArticlesViewSwitcher, ArticleView } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useMemo } from 'react'
import { articlesPageAction } from 'pages/ArticlePage/model/slices/articlePageSlice'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from 'pages/ArticlePage/model/selectors/articlesPageSelectors'
import { Input } from 'shared/ui/Input/Input'
import { Card } from 'shared/ui/Card/Card'
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import {
  ArticleSortField,
  ArticleType,
} from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs'

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)
  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debounceFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view))
      dispatch(articlesPageAction.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageAction.setSort(newSort))
      dispatch(articlesPageAction.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageAction.setOrder(newOrder))
      dispatch(articlesPageAction.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageAction.setSearch(search))
      dispatch(articlesPageAction.setPage(1))
      debounceFetchData()
    },
    [debounceFetchData, dispatch],
  )

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageAction.setType(value))
      dispatch(articlesPageAction.setPage(1))
      debounceFetchData()
    },
    [debounceFetchData, dispatch],
  )

  return (
    <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticlesViewSwitcher view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  )
}
