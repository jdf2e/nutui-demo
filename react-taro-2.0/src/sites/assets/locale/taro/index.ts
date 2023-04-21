import { useEffect, useState } from 'react'
import useLocale from '../../../../sites/assets/locale/taro/uselocale'
import { BaseLang } from '../../../../locales/base'

type Keys = keyof BaseLang
interface LanguagesPackage<A = {}> {
  [key: string]: {
    [k in Keys]?: string
  } &
    A
}

export const useTranslate = (languagesPackage: LanguagesPackage) => {
  const [locale] = useLocale()
  const [translated, setLanguagesPackage] = useState<BaseLang>({} as any)
  useEffect(() => {
    if (languagesPackage) {
      // @ts-ignore
      setLanguagesPackage(languagesPackage[locale || 'zh-CN'] || {})
    }
  }, [])
  return [translated]
}
