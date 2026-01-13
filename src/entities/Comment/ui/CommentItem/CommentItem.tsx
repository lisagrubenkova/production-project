import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentItem.module.scss'
import { IComment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentItemProps {
  className?: string
  comment?: IComment
  isLoading?: boolean
}

export const CommentItem = ({
  className,
  comment,
  isLoading,
}: CommentItemProps) => {
  if (isLoading) {
    return (
      <div
        className={classNames(cls.CommentItem, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width={'100%'} height={50} className={cls.text} />
      </div>
    )
  }

  if (!comment) {
    return null
  }
  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment?.user.id}`}
        className={cls.header}
      >
        {comment?.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text title={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} className={cls.text} />
    </div>
  )
}
