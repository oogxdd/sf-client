import { useState, useEffect } from 'react'
import useInteraction from './use-interaction'
import { Howl, Howler } from 'howler'

export default function useAudio(options) {
  const [audio, setAudio] = useState()

  const interacted = useInteraction()

  useEffect(() => {
    async function createAudoContext() {
      setAudio(new Howl(options))
    }

    if (interacted) {
      createAudoContext()
    }

    return () => {
      if (audio) {
        audio.unload()
      }
    }
  }, [options])

  const ready = Boolean(interacted && audio)

  return { audio, ready }
}
