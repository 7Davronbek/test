'use client'
import Link from 'next/link'
import { FC } from 'react'
import sx from '../style/navbar.module.scss'
import { BaseButton } from '@/shared'
import { usePathname } from 'next/navigation'

type Props = {
  title: string
}
export const AboutNavbar: FC<Props> = ({ title }) => {
  const router = usePathname()
  const isActive = (path: string): boolean => {
    return path === router
  }
  return (
    <div className={sx.aboutNavbar}>
      <h1 className={'title'}>{title}</h1>
      <div className={sx.wrap}>
        <Link className={`${sx.myBtn} ${isActive('/about') ? sx.active : ''}`} href={'/about'}><BaseButton text={'Muassasa haqida'} /></Link>
        <Link className={`${sx.myBtn} ${isActive('/about/management') ? sx.active : ''}`} href={'/about/management'}><BaseButton text={'Rahbariyat'} /></Link>
        <Link className={`${sx.myBtn} ${isActive('/about/administration') ? sx.active : ''}`} href={'/about/administration'}><BaseButton text={'Adminstratsiya'} /></Link>
        <Link className={`${sx.myBtn} ${isActive('/about/structure') ? sx.active : ''}`} href={'/about/structure'}><BaseButton text={'Struktura'} /></Link>
      </div>
    </div>
  )
}