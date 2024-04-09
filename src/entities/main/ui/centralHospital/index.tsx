import { Grid } from '@mui/material'
import sx from './style.module.scss'
import Image from 'next/image'
import clinics from '@/assets/images/clinics.png'
import { Icon } from '@/shared'

export const CentralHospital = () => {
  return (
    <div className={'centralHospital ' + sx.bg}>
      <div className="container">
        <Grid className={sx.centralHospital} container>
          <Grid className={'left ' + sx.gridWrap} item xs={6}>

            <div className={sx.card}>
              <h1 className={'title ' + sx.title}>Markaziy klinik kasalxona</h1>

              <div className={sx.wrap}>
                <span><Icon.Phone /></span>
                <div>
                  <h6>Telefon</h6>
                  <a className={sx.a} href="tel: +998 71 299-63-02">+998 71 299-63-02</a>
                  <br />
                  <a className={sx.a} href="tel: +998 71 299-62-90">+998 71 299-62-90</a>
                </div>
              </div>

              <div className={sx.wrap}>
                <span><Icon.Calendar /></span>
                <div>
                  <h6>Ish grafigi</h6>
                  <p className={sx.a}>Diagnostika: Du. - Sha. / 08:00 - 14:00 Statsionar: xar kuni</p>
                </div>
              </div>

              <div className={sx.wrap}>
                <span><Icon.Location /></span>
                <div>
                  <h6>Manzil</h6>
                  <p className={sx.a}>Toshkent sh., Yashnabod tumani, Taraqqiyot kuchasi 2-proyezd, 12A uy</p>
                </div>
              </div>

            </div>

          </Grid>
          <Grid className={sx.gridWrap} item xs={6}>
            <Image
              className={sx.img}
              src={clinics}
              alt="T MED"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}