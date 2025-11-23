import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  return (
    <div className={classNames(cls.ProfileCard)}>
      <div className={cls.header}>
        <Text title={'Профиль'} />
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
          {'Редактировать'}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder="Ваше имя" />
        <Input value={data?.lastname} placeholder="Ваша фамилия" />
      </div>
    </div>
  )
}
