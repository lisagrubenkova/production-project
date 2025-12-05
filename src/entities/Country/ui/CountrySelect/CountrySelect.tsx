import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'
import cls from './CountrySelect.module.scss'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
]

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange],
    )

    return (
      <Select
        className={classNames(cls.CountryySelect)}
        label="Укажите страну"
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  },
)
