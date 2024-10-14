import '~/css/global.scss'

import clsx from 'clsx'

import { BackgroundBeams } from '~/components/beamsbg'

import PostHogPageView from './utils/PostHogPageView'
import { PHProvider } from './utils/providers'
// import Threebg from '~/components/threebg'

export const metadata = {
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </head>
      <PHProvider>
        <body
          className={clsx(
            'bg-black leading-relaxed text-gray-400 antialiased selection:bg-cyan-300 selection:text-cyan-900'
          )}
        >
          <BackgroundBeams />
          <PostHogPageView />
          {/* <Threebg /> */}
          {children}
        </body>
      </PHProvider>
    </html>
  )
}

export default RootLayout
