import { News } from '@/entities'
import { NewsLayout } from '@/widgets/layout'

const NewsPage = () => {
  return (
    <NewsLayout title={'Yangliliklar'}>
      <News />
    </NewsLayout>
  )
}

export default NewsPage