import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesViewSwitcher.module.scss'
import { ArticleView } from 'entities/Article/model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import PlateIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ArticlesViewSwitcherProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: PlateIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
]
export const ArticlesViewSwitcher = ({
  className,
  view,
  onViewClick,
}: ArticlesViewSwitcherProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticlesViewSwitcher, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ThemeButton.CLEAR}
          key={viewType.view}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  )
}
