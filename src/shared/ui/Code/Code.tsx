import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { useCallback } from 'react'
import { Button, ThemeButton } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

interface CodeProps {
  className?: string
  text: string
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ThemeButton.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
