import { useMeeting, Constants } from '@videosdk.live/react-sdk'
import { useCallback, useEffect, useMemo } from 'react'

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

  useEffect(() => {

  }, [isHlsStarted, isHlsStopped, isHlsPlayable])

  const _handleToggleHls = useCallback(() => {
    if (isHlsStopped) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      startHls({ quality: 'high' })
    } else {
      stopHls()
    }
  }, [isHlsStopped, startHls, stopHls])


  return (
    <div>
      <p>MeetingId: {meetingId}</p>
      <p>HLS state: {hlsState}</p>
      {isHlsStopped && <p>Viewers will now be able to watch the stream.</p>}
      <button onClick={() => toggleMic()}>Toggle Mic</button>
      <button onClick={() => toggleWebcam()}>Toggle Webcam</button>
      <button onClick={() => _handleToggleHls()}>
        {isHlsStarted ? 'Stop Hls' : 'Start Hls'}
      </button>
    </div>
  )
}

export default MediaControl