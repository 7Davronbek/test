import { Grid } from '@mui/material'
import Link from 'next/link'
import { BaseButton } from '@/shared'
import { FeedbackForm } from '@/entities/main/ui/feedbackForm'
import Image from 'next/image'
import railwayLogo from '@/assets/images/railwayLogo.svg'
import {
  CentralHospital,
  DoctorList,
  HeaderBanner,
  Institution,
  Managers,
  News,
  ServiceList,
  Statistics,
} from '@/entities'
import sx from './style/style.module.scss'

export default function Home() {
  return (
    <>
      <div className="container">
        <HeaderBanner />
        <Grid marginTop={'56px'} className={sx.wrap}>
          <p className={'title'}>
            <Image
              src={railwayLogo}
              alt="T MED"
            />
            Muassasalar
          </p>
          <Link href={'/'}>
            <BaseButton text={'Barchasini ko’rish'} active={true} />
          </Link>
        </Grid>
        <Institution />
      </div>
      <CentralHospital />
      <div className="container">
        <Managers />
        <Grid marginBottom={'8px'}>
          <p className={'title'}>Klinika xizmatlari</p>
        </Grid>
        <ServiceList />
        <Grid className={sx.wrap}>
          <p className={'title'}>Klinika shifokorlari (218)</p>
          <Link className={sx.link} href={'/'}>
            <BaseButton text={'Barchasini ko’rish'} active={true} />
          </Link>
        </Grid>
        <DoctorList />
        <Grid className={sx.wrap}>
          <p className={'title'}>Yaniliklar</p>
          <Link className={sx.link} href={'/'}>
            <BaseButton text={'Barchasini ko’rish'} active={true} />
          </Link>
        </Grid>
        <News />
        <Statistics />
        <Grid className={sx.wrap}>
          <p className={'title'}>Murojaat yuborish</p>
        </Grid>
        <FeedbackForm />
      </div>
    </>
  )
}