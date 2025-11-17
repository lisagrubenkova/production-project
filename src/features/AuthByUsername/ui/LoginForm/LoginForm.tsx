/* eslint-disable react/display-name */
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm)}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          text={t('Введен неверный логин или пароль')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autoFocus
        type="text"
        className={cls.input}
        onChange={onChangeUsername}
        placeholder={t('Введите имя')}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ThemeButton.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
