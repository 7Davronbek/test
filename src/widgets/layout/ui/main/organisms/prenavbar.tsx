'use client'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { Icon } from '@/shared'
import sx from '../style/main.module.scss'

export const PreNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={sx.prenavbar}>
      <h5 className={sx.wrap}>
        <Icon.Location width={24} height={24} color={'#00C1C1'} /> Toshkent <Icon.ArrowDown color={'#fff'} />
      </h5>

      <div className={sx.wrap}>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.instagram.com/nsurailway'}
           className={sx.icon}><Icon.Instagram /></a>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.facebook.com/nsurailways'}
           className={sx.icon}><Icon.Facebook /></a>
        <a target={'_blank'} rel={'noreferrer'} href={'https://twitter.com/nsurailway'}
           className={sx.icon}><Icon.Twitter /></a>
        <a target={'_blank'} rel={'noreferrer'} href={'https://t.me/nsurailway'}
           className={sx.icon}><Icon.Telegram /></a>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.youtube.com/@nsurailway'}
           className={sx.icon}><Icon.Youtube /></a>

        <div className={sx.left}></div>

        <a target={'_blank'} rel={'noreferrer'} href={'https://t.me/Medic_UTY'}
           className={sx.wrap}><Icon.TelegramOutline /> Onlayn konsultatsiya</a>
        <div className={sx.left}></div>
        <a href={'tel: +998 (71) 299 98 27'} className={sx.wrap}><Icon.Phone width={24} height={24}
                                                                             color={'#00C1C1'} /> +998 (71) 299 98
          27</a>

        <div className={sx.left}></div>

        <h5 className={sx.wrap} onClick={(e) => handleClick(e)}>
          <Icon.Lang /> Uzbek <Icon.ArrowDown color={'#fff'} />
        </h5>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Russian</MenuItem>
          <MenuItem onClick={handleClose}>English</MenuItem>
        </Menu>
      </div>
    </div>
  )
}
