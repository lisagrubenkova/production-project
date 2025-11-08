import webpack, { RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(process.cwd(), 'src'),
  }
  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('.ts', '.tsx')

  config.module!.rules = config?.module?.rules?.map((rule) => {
    if (typeof rule !== 'object' || !rule || Array.isArray(rule)) return rule
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config?.module?.rules?.push(buildCssLoader(true))
  return config
}
