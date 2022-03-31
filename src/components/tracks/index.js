import { useContext, useState } from 'react'
import { AppContext, AuthContext } from 'context'
import { useQuery } from 'urql'
import gql from 'graphql-tag'

import Track from 'components/tracks/track'
import tracks from 'data/tracks'

const SongsQuery = gql`
  query {
    songs(orderBy: { createdAt: desc }) {
      id
      title
      url
      cover
      sum
      timeToComplete
      author {
        id
        nickname
        country
      }
    }
  }
`

export default () => {
  const [{ data, fetching, error }, reexecuteQuery] = useQuery({
    query: SongsQuery,
  })

  if (fetching) {
    return <div>loading...</div>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-8 max-w-3xl">
      {data.songs.map((track) => (
        <Track track={track} key={track.id} />
      ))}
    </div>
  )
}
