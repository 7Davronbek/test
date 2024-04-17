import { useMeeting } from '@videosdk.live/react-sdk'
import { useMemo } from 'react'
import SingleParticipant from '@/entities/stream/ui/molecules/singleParticipant'

const ParticipantsGridContainer = () => {
  const { participants } = useMeeting()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const participantIds = useMemo(() => [...participants.keys()], [participants])

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