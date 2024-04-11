import React from 'react'
import ChangesSwitch from '../main/ChangesSwitch'
import { useTranslations } from 'next-intl'

type Props = {}

export default function Header({}: Props) {

    const t = useTranslations('Navigations')

  return (
    <div className='w-full flex justify-between'>
        <p className='font-medium text-base'>{t('home')} </p>
        <ChangesSwitch/>
    </div>
  )
}