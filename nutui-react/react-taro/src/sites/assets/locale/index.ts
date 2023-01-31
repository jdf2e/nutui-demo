import  { useState } from 'react'
import useLocale from '@/sites/assets/locale/uselocale'
import { BaseLang } from '@/locales/base'


export const useTranslate = (languagesPackage:any) => {
  const [locale] = useLocale()
  const [translated, ] = useState<BaseLang>(
    languagesPackage[locale || 'zh-CN'] as any
  )

  return [translated]
}
