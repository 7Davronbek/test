import { Grid, TextField } from '@mui/material'
import footerBg from '@/assets/images/footer.png'
import Image from 'next/image'
import sx from '../style/main.module.scss'
import { Icon } from '@/shared'
import qr from '@/assets/images/qr.png'
import card from '@/assets/images/card.png'

export const Footer = () => {
  return (
    <div className={sx.footer}>
      <div className={sx.footerBg}><Image src={footerBg} alt={'footer'} /></div>
      <div className={'container'}>
        <Grid className={sx.top} container spacing={1}>
          <Grid xs={12} item xl={1.5}>
            <Icon.TmedLogo isWhite={true} />
          </Grid>
          <Grid xs={12} item xl={5.5}>
            <h1>Agar sizda biron bir savol yoki taklif bo&apos;lsa, iltimos, ma&apos;lumotlaringizni qoldiring va biz imkon qadar
              tezroq siz bilan bog&apos;lanamiz.</h1>
          </Grid>
          <Grid xs={12} className={sx.bottom} item xl={5}>
            <TextField style={{ width: '75%' }} placeholder={'+998_'} className={sx.input} variant={'outlined'}
                       type="text" />

            <a>Yuborish</a>
          </Grid>
        </Grid>
        <Grid container className={sx.bottomNav}>
          <Grid className={sx.imageGrid} item xs={12} xl={3}>
            <Image src={qr} alt={'QR Code'} />
          </Grid>
          <Grid item xs={12} xl={5} className={sx.wrap}>
            <div>
              <a>Mobil ilova</a>
              <a>Yordam va fikr-mulohaza</a>
              <a>Pullik xizmatlar</a>
            </div>
            <div>
              <a>Foydalanish shartlari</a>
              <a>Maxfiylik siyosati</a>
              <a>Saytda reklama</a>
            </div>
          </Grid>
          <Grid item xs={12} xl={3}>
            <p>To&apos;lov usuli</p>
            <Image style={{ width: '100%', height: 'auto' }} src={card} alt={'Payments'} />
          </Grid>
        </Grid>
      </div>
      <h6>©2024 T-med.uz. All Rights Reserved. </h6>
    </div>
  )
}

// const sx: SxProps = {
//   background: footerBg,
//   padding: '56px 0',
//
//   '.footerBg': {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// }