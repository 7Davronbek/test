import { StreamCard } from '@/entities'
import { Suspense } from 'react'
import { Loader } from '@/shared'

const StreamPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <StreamCard />
    </Suspense>
  )
}

export default StreamPage