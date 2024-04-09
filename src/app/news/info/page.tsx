import { NewsLayout } from '@/widgets/layout'
import { News } from '@/entities'

const InfoPage = () => {
  return (
    <NewsLayout title={'Foydali malumotlar'}>
      <News />
    </NewsLayout>
  )
}

export default InfoPage