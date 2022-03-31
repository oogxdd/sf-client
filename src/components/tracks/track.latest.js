import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, startSong, stopSong } =
    useContext(AppContext)
  const [isPlaying, setPlaying] = useState(
    selectedTrack && selectedTrack.title === track.title,
  )

  console.log(track)

  useEffect(() => {
    if (selectedTrack && selectedTrack.title === track.title) {
      startSong(track.url)
      setPlaying(true)
    } else {
      stopSong()
      setPlaying(false)
    }
  }, [selectedTrack, track, startSong, stopSong])

  return (
    <div className="flex flex-col items-center mb-4" style={{ minHeight: 180 }}>
      <div
        className={`flex flex-col items-center justify-center w-24 h-24 rounded-full group cursor-pointer ${
          isPlaying ? 'rotating-cover' : ''
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
          // if (!Tone.started) {

          // Tone.start()
          // }
          // Tone.start()
          setSelectedTrack(track)
        }}
      >
        {isPlaying ? (
          <div className="opacity-0 group-hover:opacity-100">Stop</div>
        ) : (
          <div className="opacity-0 group-hover:opacity-100">Play</div>
        )}
      </div>
      <div className={`flex items-center truncate text-xs mt-2`}>
        <span className="text-base mr-0.5">🏴‍☠️ </span>
        {`${track.author.nickname} - ${track.title}`}
      </div>
      {isPlaying && (
        <>
          <div className="text-xs mt-0.5 text-violet-700">
            30/100$ is collected
          </div>
          <button
            className="text-xs mt-2.5 border px-3 py-0.0 text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white text-base"
            style={{ paddingBottom: 1 }}
          >
            donate
          </button>
        </>
      )}
    </div>
  )
}

export default Track
