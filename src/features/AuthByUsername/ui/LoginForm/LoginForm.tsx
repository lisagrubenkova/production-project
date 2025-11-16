import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useState } from 'react'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={classNames(cls.LoginForm)}>
      <Input
        autoFocus
        type="text"
        className={cls.input}
        value={email}
        onChange={(e) => {
          setEmail(e)
        }}
        placeholder={t('Введите email')}
      />
      <Input
        type="text"
        className={cls.input}
        value={password}
        onChange={(e) => {
          setPassword(e)
        }}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
