import React from 'react'

import { performRequest } from '~/lib/datocms'
import Homepage from './Homepage'

const PAGE_CONTENT_QUERY = `
  query Home {
    homepage {
      title
      description {
        value
      }
    }
  }`

const Home = async () => {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY })

  console.log({ data })

  return (
    <div className="">
      <Homepage />
    </div>
  )
}

export default Home
