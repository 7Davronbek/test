import { AboutLayout } from '@/widgets/layout/ui'
import Image from 'next/image'
import structure from '@/assets/images/tree.png'

const StructurePage = () => {
  return (
    <AboutLayout title={'Struktura'}>
      <Image style={{ width: '100%', height: 'auto' }} src={structure} alt={'T MED Struktura'} />
    </AboutLayout>
  )
}
export default StructurePage