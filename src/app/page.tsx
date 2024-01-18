import React from 'react'

import { performRequest } from '~/lib/datocms'
import Homepage from './Homepage'
import { QueryResponse } from '../..'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Devang Saklani | Software Engineer',
  description:
    'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
  openGraph: {
    type: 'website',
    title: 'Devang Saklani | Software Engineer',
    description:
      'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
    url: 'https://saklani.dev',
    images: [{ url: 'https://saklani.dev/og.png' }]
  },
  icons: [
    {
      url: '/favicon/favicon.svg'
    }
  ],
  twitter: {
    card: 'summary_large_image',
    site: '@devangsaklani',
    title: 'Devang Saklani | Software Engineer',
    description:
      'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
    images: {
      url: 'https://saklani.dev/og.png',
      alt: 'Devang Saklani | Software Engineer'
    }
  }
}

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
    <div className="">
      <Homepage data={data?.home} />
    </div>
  )
}

export default Home
