import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

   const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar)}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>{t("Главная")}</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>{t("О сайте")}</AppLink>
        </div>
         
    </div>
  )
}

