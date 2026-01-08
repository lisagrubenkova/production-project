import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { CommentItem } from '../CommentItem/CommentItem'
import { Text } from 'shared/ui/Text/Text'
import { IComment } from '../../model/types/comment'

interface CommentListProps {
  className?: string
  comments?: IComment[]
  isLoading?: boolean
}

export const CommentList = ({
  className,
  isLoading,
  comments,
}: CommentListProps) => {
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentItem
            comment={comment}
            key={comment.id}
            className={cls.comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text="Пока нет комментариев" />
      )}
    </div>
  )
}
