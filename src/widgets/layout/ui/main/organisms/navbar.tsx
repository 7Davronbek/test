'use client'
import { Grid } from '@mui/material'
import Link from 'next/link'
import { BaseButton, Icon } from '@/shared'
import { usePathname } from 'next/navigation'
import sx from '../style/main.module.scss'
import { useState } from 'react'

export const Navbar = () => {
  const router = usePathname()
  const isActive = (path: string): boolean => {
    if (router) {
      if (path !== '/') {
        return router.startsWith(path)
      }
      return router === path
    }
    return false
  }

  const [burger, setBurger] = useState(false)

  return (
    <Grid className={sx.navbar} container>
      <Grid alignItems={'center'} display={'flex'} justifyContent={'space-between'} item xs={1.5}>
        <Link href={'/'}><Icon.TmedLogo /></Link>
      </Grid>
      <div onClick={() => setBurger(true)} className={sx.burgerOpen}>
        <Icon.Burger />
      </div>
      <Grid className={sx.mobile + ` ${burger ? sx.active : ''}`} paddingRight={6} display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'} item xs={9.9}>
        <div onClick={() => setBurger(false)} className={sx.burgerClose}>
          <Icon.BurgerClose />
        </div>

        <div className={sx.wrap}>
          <Link onClick={() => setBurger(false)} href={'/'}>
            <BaseButton
              text={'Tibbiyot muassasalari'}
              icon={
                <Icon.NavBuilding active={isActive('/')} />}
              active={isActive('/')}
            />
          </Link>
          <Link onClick={() => setBurger(false)} href={'/about'}>
            <BaseButton
              text={'Biz haqimizda'}
              active={isActive('/about')}
              icon={
                <Icon.NavUserOctagon active={isActive('/about')} />} />
          </Link>
          <Link onClick={() => setBurger(false)} href={'/news'}>
            <BaseButton
              text={'Yangiliklar'}
              active={isActive('/news')}
              icon={
                <Icon.NavPlay active={isActive('/news')} />} />
          </Link>
          <Link onClick={() => setBurger(false)} href={'/stream'}>
            <BaseButton
              text={'Jonli efir'}
              active={isActive('/stream')}
              icon={
                <Icon.NavStream active={isActive('/stream')} />} />
          </Link>
          <Link onClick={() => setBurger(false)} href={'/docs'}>
            <BaseButton
              text={'Qonunchilik bazasi'}
              active={isActive('/docs')}
              icon={
                <Icon.NavBase active={isActive('/docs')} />} />
          </Link>
        </div>

        <div className={sx.mobileContent}>
          <Icon.TmedLogo />
        </div>
      </Grid>
      <Grid className={sx.profile} item xs={0.6}>
        <Link href={'/'}>
          <BaseButton
            active={true}
            icon={
              <Icon.NavProfile
                active={true}
              />} />
        </Link>
      </Grid>
    </Grid>
  )
}