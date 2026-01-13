import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.PLATE } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {new Array(view === ArticleView.PLATE ? 9 : 3)
          .fill(0)
          .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} />
          ))}
      </div>
    )
  }
  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
      />
    )
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  )
}
