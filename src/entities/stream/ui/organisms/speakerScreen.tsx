import { MeetingProvider } from '@videosdk.live/react-sdk'
import { authToken } from '@/shared/utils/createNewRoom'
import ParticipantsGridContainer from '@/entities/stream/ui/organisms/participantsGrid'
import MediaControl from '@/entities/stream/ui/organisms/mediaControl'
import Chat from '@/entities/stream/ui/chat'


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SpeakerScreen = ({ meetingId }) => {
  const date = new Date()
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <MeetingProvider  token={authToken!} config={{ meetingId, name: `Streamer ${date.getTime()}`, micEnabled: true,webcamEnabled: true,  }} joinWithoutUserInteraction>
      <Chat />
      <MediaControl />
      <ParticipantsGridContainer />
    </MeetingProvider>
  )
}

export default SpeakerScreen