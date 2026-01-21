import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(RoutePath.article_details + article?.id + '/edit')
  }, [article?.id, navigate])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        Назад у списку
      </Button>
      {canEdit && (
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onEditArticle}
          className={cls.editBtn}
        >
          Редактировать
        </Button>
      )}
    </div>
  )
}
