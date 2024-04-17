import { MeetingProvider } from '@videosdk.live/react-sdk'
import { authToken } from '@/shared/utils/createNewRoom'
import ParticipantsGridContainer from '@/entities/stream/ui/organisms/participantsGrid'
import MediaControl from '@/entities/stream/ui/organisms/mediaControl'
import Chat from '@/entities/stream/ui/chat'


const SpeakerScreen = ({ meetingId }) => {
  const date = new Date()
  return (
    <MeetingProvider
      token={authToken}
      config={{
        meetingId,
        name: `Streamer ${date.getTime()}`,
        micEnabled: true,
        webcamEnabled: true,
      }}
      joinWithoutUserInteraction
    >
      <Chat />
      <MediaControl />
      <ParticipantsGridContainer />
    </MeetingProvider>
  )
}

export default SpeakerScreen