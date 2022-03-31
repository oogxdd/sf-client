import { useEffect, useState } from 'react'

const events = ['mousemove', 'touchstart']

export default function useInteraction() {
  const [ready, setReady] = useState(false)

  const listener = () => {
    if (ready === false) {
      setReady(true)
    }
  }

  useEffect(() => {
    if (!ready) {
      events.forEach((event) => {
        document.addEventListener(event, listener)
      })
    }

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener)
      })
    }
  }, [])

  return ready
}
