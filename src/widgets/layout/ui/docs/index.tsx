import { Content, DocsNavbar } from '@/widgets/layout/ui/docs/organisms'
import { FC, PropsWithChildren, Suspense } from 'react'
import { Loader } from '@/shared'

export const DocsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <DocsNavbar />
        <Content>
          {children}
        </Content>
      </div>
    </Suspense>
  )
}
