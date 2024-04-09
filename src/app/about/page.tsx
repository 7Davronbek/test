import { AboutLayout } from '@/widgets/layout/ui'
import { AboutCompany } from '@/entities'

const AboutPage = () => {
  return (
    <>
        <AboutLayout title={'Muassasa haqida'}>
          <AboutCompany />
        </AboutLayout>
    </>
  )
}

export default AboutPage