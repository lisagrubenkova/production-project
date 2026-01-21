import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { Page } from 'widgets/Page/Page'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? 'Редактирование статьи с ID = ' + id : 'Создание новой статьи'}
    </Page>
  )
}

export default ArticleEditPage
