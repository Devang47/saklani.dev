import React from 'react'

import { performRequest } from '~/lib/datocms'

import { QueryResponse } from '../..'
import Homepage from './pages/Homepage'
import Head from 'next/head'

const metadata = {
  title: 'Devang Saklani | Software Engineer',
  description:
    'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
  openGraph: {
    type: 'website',
    title: 'Devang Saklani | Software Engineer',
    description:
      'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
    url: 'https://saklani.dev',
    images: 'https://saklani.dev/og.png'
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
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images} />
        
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images.url} />
        {metadata.icons.map((icon, index) => (
          <link key={index} rel="icon" href={icon.url} />
        ))}
        <link rel="manifest" href="https://saklani.dev/manifest.webmanifest" />
      </Head>

      <div className="">
        <Homepage data={data?.home} />
      </div>
    </>
  )
}

export default Home
