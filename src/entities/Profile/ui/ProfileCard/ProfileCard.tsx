import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Mods } from 'shared/lib/classNames/classNames'
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect'
import { Currency } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency?: Currency) => void
  onChangeCountry?: (country?: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly,
  } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
        <Input
          value={data?.first}
          placeholder="Ваше имя"
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder="Ваш возраст"
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder="Город"
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder="Введите никнейм"
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder="Введите ссылку на аватар"
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
})
