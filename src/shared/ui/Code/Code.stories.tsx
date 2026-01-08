import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: `import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={classNames(cls.Icon, {}, [className])} />
}
`,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  text: `import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={classNames(cls.Icon, {}, [className])} />
}
`,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
