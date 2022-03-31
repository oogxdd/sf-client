import { useState, useContext, useEffect } from 'react'
import { AppContext, AuthContext } from 'context'
import { Howl } from 'howler'
import { useMutation } from 'urql'
import { countries } from 'data'
import Spinner from 'components/ui/spinner'
import gql from 'graphql-tag'

const DeleteSongMutation = gql`
  mutation ($id: Int!) {
    deleteOneSong(where: { id: $id }) {
      id
    }
  }
`

const Track = ({ track }) => {
  const [isLoaded, setLoaded] = useState(false)
  const { user } = useContext(AuthContext)
  const { selectedTrack, setSelectedTrack, setShowDonateModal } =
    useContext(AppContext)
  const [isPlaying, setPlaying] = useState(
    selectedTrack && selectedTrack.title === track.title,
  )
  const [, deleteSong] = useMutation(DeleteSongMutation)

  const [audio] = useState(
    new Howl({
      src: track.url,
      interrupt: true,
      loop: true,
      onload: () => setLoaded(true),
    }),
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.title === track.title) {
      // audio.play()
      // setPlaying(true)
    } else {
      audio.stop()
      setPlaying(false)
    }
  }, [selectedTrack, track])

  // return <div>ok</div>

  return (
    <div className="flex flex-col items-center mb-4" style={{ minHeight: 180 }}>
      <div
        className={`flex flex-col items-center justify-center w-24 h-24 rounded-full group cursor-pointer ${
          isPlaying && isLoaded ? 'rotating-cover' : ''
        }`}
        style={
          track.cover
            ? {
                backgroundImage: `url("${track.cover}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#F5F5F5',
              }
            : {
                backgroundImage: `url("/audio.png")`,
                backgroundSize: '91%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#F5F5F5',
              }
        }
        onClick={() => {
          if (isPlaying) {
            audio.stop()
            setPlaying(false)
          } else {
            audio.play()
            setPlaying(true)
            setSelectedTrack(track)
          }
        }}
      >
        {isPlaying ? (
          isLoaded ? (
            <div className="opacity-0 group-hover:opacity-100 select-none">
              Stop
            </div>
          ) : (
            <Spinner />
          )
        ) : (
          <div className="opacity-0 group-hover:opacity-100 select-none">
            Play
          </div>
        )}
      </div>
      <div className={`flex items-center truncate text-xs mt-2 track-title`}>
        {track.author.country && countries[track.author.country] && (
          <span className="text-base mr-0.5">
            {countries[track.author.country].emoji}
          </span>
        )}
        {`${track.author.nickname} - ${track.title}`}
      </div>
      {isPlaying && isLoaded && (
        <>
          <div className="text-xs mt-0.5 text-violet-700">
            {`${track.donations ? track.donations.sum : 0}/${
              track.sum
            }$ is collected`}
          </div>
          <button
            className="text-xs mt-2 border px-3 py-0.0 text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white"
            style={{ paddingBottom: 1 }}
            onClick={() => {
              // setSelectedTrack(track)
              setShowDonateModal(true)
            }}
          >
            donate
          </button>
          {user && track.author.id === user.id && (
            <button
              className="text-xs mt-2 border px-3 py-0.0 text-red-600 border-red-500 hover:bg-red-500 hover:text-white"
              style={{ paddingBottom: 1 }}
              onClick={() => {
                const conf = window.confirm('Remove track?')
                if (conf) {
                  deleteSong({ id: parseInt(track.id) })
                  audio.stop()
                }
              }}
            >
              delete
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Track
