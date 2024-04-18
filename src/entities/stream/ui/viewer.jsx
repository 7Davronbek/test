'use client'
import {
  MeetingConsumer,
  Constants,
  MeetingProvider,
  useMeeting,
} from '@videosdk.live/react-sdk'
import { useEffect, useMemo, useRef } from 'react'
import Hls from 'hls.js'
import { authToken } from '@/shared/utils/createNewRoom'
import { useRouter } from 'next/navigation'
import Chat from '@/entities/stream/ui/chat'
import useLocalStorage from 'use-local-storage'
import { Loader, LocalstorageData, T_MED_DATA } from '@/shared'

const HLSPlayer = () => {
  const { hlsUrls, hlsState } = useMeeting()

  const playerRef = useRef(null)

  const hlsPlaybackHlsUrl = useMemo(() => hlsUrls.playbackHlsUrl, [hlsUrls])

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        maxLoadingDelay: 4,
        minAutoBitrate: 0,
        autoStartLoad: true,
        defaultAudioCodec: 'mp4a.40.2',
      })

      const player = document.querySelector('#hlsPlayer')

      hls.loadSource(hlsPlaybackHlsUrl)
      hls.attachMedia(player)
    } else {
      if (typeof playerRef.current?.play === 'function') {
        playerRef.current.src = hlsPlaybackHlsUrl
        playerRef.current.play()
      }
    }
  }, [hlsPlaybackHlsUrl, hlsState])

  return (
    <video
      ref={playerRef}
      id="hlsPlayer"
      autoPlay
      controls
      style={{ width: '70%', height: '70%' }}
      playsInline
      onError={(err) => console.log(err, 'hls video error')}
    ></video>
  )
}

import sx from './style/chat.module.scss'

const Viewer = ({ meetingId, setAppData }) => {
  const router = useRouter()
  const [data] = useLocalStorage(T_MED_DATA, { mode: '', meetingId: '', username: '' })
  if (meetingId === null || meetingId === '') {
    router.push('/en/stream')
  }
  const handleClick = () => {
    setAppData({ meetingId: '', mode: '' })
    router.push('/en/stream')
    router.refresh()
  }
  return (
    <MeetingProvider  token={authToken} config={{ meetingId, name: data.username, mode: 'VIEWER' }}
      joinWithoutUserInteraction
    >
      <button onClick={handleClick}>back</button>
      <MeetingConsumer>
        {({ hlsState }) =>
          hlsState === Constants.hlsEvents.HLS_PLAYABLE ? (
            <div className={sx.streamContainer}>
              <HLSPlayer />
              <Chat />
            </div>
          ) : (
            <Loader />
          )
        }
      </MeetingConsumer>
    </MeetingProvider>
  )
}

export default Viewer