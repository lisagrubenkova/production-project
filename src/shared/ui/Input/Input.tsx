import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

// eslint-disable-next-line prettier/prettier
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherPrors
  } = props
  const ref = useRef<HTMLInputElement | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const isCaretVisible = isFocused && !readonly
  useEffect(() => {
    if (autoFocus) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }
  return (
    <div className={classNames(cls.InputWrapper)}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherPrors}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
})
