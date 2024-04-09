'use client'
import sx from '../style/docs.module.scss'
import Link from 'next/link'
import { BaseButton } from '@/shared'
import { usePathname } from 'next/navigation'

export const DocsNavbar = () => {
  const router = usePathname()
  const isActive = (path: string): boolean => {
    return path === router
  }
  return (
    <div className={sx.docsLayout}>
      <h1 className={'title'}>Qonunchilik bazasi</h1>
      <div className={sx.wrap}>

        <Link className={`${sx.myBtn} ${isActive('/docs') ? sx.active : ''}`} href={'/docs'}><
          BaseButton text={'Qonunlar'} />
        </Link>

        <Link className={`${sx.myBtn} ${isActive('/docs/presidential-decree') ? sx.active : ''}`}
              href={'/docs/presidential-decree'}><
          BaseButton text={'Prezident farmoni'} />
        </Link>

        <Link className={`${sx.myBtn} ${isActive('/docs/ministerial-decision') ? sx.active : ''}`}
              href={'/docs/ministerial-decision'}><
          BaseButton text={'Vazirlar mahkamasining qarorlari'} />
        </Link>

        <Link className={`${sx.myBtn} ${isActive('/docs/ministerial-decision') ? sx.active : ''}`}
              href={'/docs/ministerial-decision'}><
          BaseButton text={'Temir yo\'l transporti haqidagi qonun'} />
        </Link>

        <Link className={`${sx.myBtn} ${isActive('/docs/ministerial-decision') ? sx.active : ''}`}
              href={'/docs/ministerial-decision'}><
          BaseButton text={'SSV qarorlari'} />
        </Link>

      </div>
    </div>
  )
}