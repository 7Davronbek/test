'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import sx from '@/widgets/layout/ui/about/style/navbar.module.scss'
import Link from 'next/link'
import { BaseButton } from '@/shared'

type Props = {
  title: string
}
export const NewsNavbar: FC<Props> = ({ title }) => {
  const router = usePathname()
  const isActive = (path: string): boolean => {
    return path === router
  }
  return (
    <div className={sx.aboutNavbar}>
      <h1 className={'title'}>{title}</h1>
      <div className={sx.wrap}>
        <Link className={`${sx.myBtn} ${isActive('/news') ? sx.active : ''}`} href={'/news'}><BaseButton
          text={'Yangiliklar'} />
        </Link>
        <Link className={`${sx.myBtn} ${isActive('/news/info') ? sx.active : ''}`} href={'/news/info'}><BaseButton
          text={'Foydali ma’lumotlar'} />
        </Link>
      </div>
    </div>
  )
}