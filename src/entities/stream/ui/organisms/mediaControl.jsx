import { useMeeting, Constants } from '@videosdk.live/react-sdk'
import { useCallback, useEffect, useMemo } from 'react'
import useLocalStorage from 'use-local-storage'
import { LocalstorageData, T_MED_DATA } from '@/shared'
import { useRouter } from 'next/navigation'

const MediaControl = () => {
  const { toggleMic, toggleWebcam, startHls, stopHls, hlsState, meetingId } =
    useMeeting()

  const { isHlsStarted, isHlsStopped, isHlsPlayable } = useMemo(
    () => ({
      isHlsStarted: hlsState === Constants.hlsEvents.HLS_STARTED,
      isHlsStopped: hlsState === Constants.hlsEvents.HLS_STOPPED,
      isHlsPlayable: hlsState === Constants.hlsEvents.HLS_PLAYABLE,
    }),
    [hlsState],
  )
  const router = useRouter()

  useEffect(() => {

  }, [isHlsStarted, isHlsStopped, isHlsPlayable])

  const _handleToggleHls = useCallback(() => {
    if (isHlsStopped) {
      startHls({ quality: 'high' })
    } else {
      stopHls()
    }
  }, [isHlsStopped, startHls, stopHls])

  const [, setAppData] = useLocalStorage(T_MED_DATA, { mode: '', meetingId: '', username: '' })
  const handleClick = () => {
    setAppData({ meetingId: '', mode: '' })
    router.push('/en/stream')
    router.refresh()
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={handleClick}>back</button>
      <p>Meeting id: {meetingId}</p>
      <p>Xolati: {hlsState}</p>
      {isHlsStopped ? <h1>Stream is <span style={{ color: 'red' }}>stopped</span></h1> :
        <h1>Is streaming</h1>}
      <button onClick={() => toggleMic()}>Toggle Mic</button>
      <button onClick={() => toggleWebcam()}>Toggle Webcam</button>
      <button onClick={() => _handleToggleHls()}>
        {isHlsStarted ? 'Stop Hls' : 'Start Hls'}
      </button>
    </div>
  )
}

export default MediaControl