'use client'
import sx from '../style/style.module.scss'
import { useTranslations } from 'next-intl'
import { FormEvent, useState } from 'react'
import { createNewRoom } from '@/shared/utils/createNewRoom'
import useLocalStorage from 'use-local-storage'
import { CONFERENCE, LocalstorageData, T_MED_DATA, VIEWER } from '@/shared'
import { useRouter } from 'next/navigation'

export const WelcomeScreen = () => {
  const [meetingId, setMeetingId] = useState('')
  const [username, setUsername] = useState('')

  const [appData, setAppData] = useLocalStorage<LocalstorageData>(T_MED_DATA, { meetingId: '', mode: '', username: '' })
  const router = useRouter()

  const createClick = async () => {
    const meetingId = await createNewRoom()
    setAppData({ meetingId, mode: CONFERENCE, username })
    router.push('/en/stream/room')
  }
  const viewerClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAppData({ meetingId, mode: VIEWER, username })
    router.push('/en/stream/room')
  }
  const t = useTranslations('Main')
  return (
    <div className={sx.streamCard}>
      <div className={'container'}>
        <h4 className={'title'}>{t('stream')}</h4>

        <button onClick={createClick}>Create new Meeting</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={viewerClick}>
          <input
            required={true}
            placeholder="Enter meetingId"
            onChange={(e) => setMeetingId(e.target.value)}
            value={meetingId}
          />
          <p>{'\n\n'}</p>
          <input
            required={true}
            placeholder="Enter full name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <p>{'\n\n'}</p>
          <button type={'submit'}>Join As Viewer</button>

        </form>
      </div>
    </div>
  )
}