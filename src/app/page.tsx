import React from 'react'

import { performRequest } from '~/lib/datocms'

import { QueryResponse } from '../..'
import Homepage from './pages/Homepage'

const PAGE_CONTENT_QUERY = `
query Home {
  home {
    upworkLink
    twitterLink
    titleH1
    subtitleH2
    description
    about(markdown: true)
    githubLink
    gmailLink
    resumeLink
    linkedinLink
    seo {
      description
      twitterCard
      title
      image {
        alt
        url
      }
    }
    projects {
      link
      techUsed
      title
      description
      id
      image {
        alt
        url
        title
      }
    }
    jobExperiences {
      id
      link
      role
      startingAndEndingYear
      techUsed
      title
      description(markdown: true)
    }
    blogs {
      id
      image {
        alt
        url
      }
      link
      title
      year
    }
  }
}`

const Home = async () => {
  const { data }: { data: { home: QueryResponse } } = await performRequest({
    query: PAGE_CONTENT_QUERY
  })

  return (
    <>
      <div className="">
        <Homepage data={data?.home} />
      </div>
    </>
  )
}

export default Home
