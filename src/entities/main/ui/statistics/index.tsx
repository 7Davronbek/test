import { Grid } from '@mui/material'
import Image from 'next/image'
import statistics from '@/assets/images/statistics.png'
import uz from '@/assets/images/uz.png'
import sx from './style.module.scss'

export const Statistics = () => {
  return (
    <div className={sx.statistics}>
      <p className={'title'}>Statistika</p>

      <Grid className={sx.grid} container>
        <Grid className={sx.cardStyle} item xs={2}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>2005</span> ko’proq tibbiy xizmatlar
          </h5>
          <Image
            src={statistics}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
        <Grid className={sx.cardStyle} item xs={2.3}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>3,5млн</span> ko’proq tibbiy xulosalar
            shakillantirildi</h5>
          <Image
            src={statistics}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
        <Grid className={sx.cardStyle} item xs={2}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>2008</span> ko’proq tibbiy
            mutaxassislar</h5>
          <Image
            src={statistics}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
        <Grid className={sx.cardStyle} item xs={4}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>12</span> viloyatlar <br /> 100 dan
            ko’proq tibbiyot markazlari</h5>
          <Image
            src={uz}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
      </Grid>
    </div>
  )
}