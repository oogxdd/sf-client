import { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import { Howl } from 'howler'
import Spinner from 'components/ui/spinner'

const Track = ({ track }) => {
  const [isLoaded, setLoaded] = useState(false)
  const { selectedTrack, setSelectedTrack, setShowDonateModal } =
    useContext(AppContext)
  const [isPlaying, setPlaying] = useState(
    selectedTrack && selectedTrack.title === track.title,
  )

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

  return (
    <div className="flex flex-col items-center mb-4" style={{ minHeight: 180 }}>
      <div
        className={`flex flex-col items-center justify-center w-24 h-24 rounded-full group cursor-pointer ${
          isPlaying && isLoaded ? 'rotating-cover' : ''
        }`}
        style={{
          backgroundImage: `url("/audio.png")`,
          // backgroundSize: 'contain',
          backgroundSize: '91%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          backgroundColor: '#F5F5F5',
        }}
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
      <div className={`flex items-center truncate text-xs mt-2`}>
        <span className="text-base mr-0.5">🏴‍☠️ </span>
        {`max - ${track.title}`}
      </div>
      {isPlaying && isLoaded && (
        <>
          <div className="text-xs mt-0 text-violet-700">
            30/100$ is collected
          </div>
          <button
            className="text-xs mt-2 border px-3 py-0.0 text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white"
            style={{ paddingBottom: 1 }}
            onClick={() => setShowDonateModal(true)}
          >
            donate
          </button>
        </>
      )}
    </div>
  )
}

export default Track
