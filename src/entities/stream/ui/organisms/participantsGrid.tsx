import { useMeeting } from '@videosdk.live/react-sdk'
import { useMemo } from 'react'
import SingleParticipant from '@/entities/stream/ui/molecules/singleParticipant'
import Chat from '@/entities/stream/ui/chat'

const ParticipantsGridContainer = () => {
  const { participants } = useMeeting()

  const participantIds = useMemo(
    () => [...participants.keys()],
    [participants],
  )

  return (
    <div>
      {participantIds.map((participantId) => (
        <div key={participantId}>
          <SingleParticipant
          {...{ participantId, key: participantId }}
        />
        </div>
      ))}
    </div>
  )
}

export default ParticipantsGridContainer