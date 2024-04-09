import Image from 'next/image'
import efir from '@/assets/images/stream.png'
import sx from '../style/style.module.scss'

export const StreamCard = () => {
  return (
    <div className={sx.streamCard}>
      <div className={'container'}>
        <h4 className={'title'}>Jonli efir</h4>
        <Image src={efir} alt={'title'} />
      </div>
    </div>
  )
}