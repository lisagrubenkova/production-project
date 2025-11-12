import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])
  return (
    <div className={classNames(cls.Navbar)}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {
          "flekmfw[rrf[wemgwoierogifgvkme k'mwrkf'eklmf'wlke'flk kme'wlkf'wlekf'lkw'elk m' lkemwf"
        }
      </Modal>
    </div>
  )
}
