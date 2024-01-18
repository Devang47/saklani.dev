import '~/css/global.scss'
import type { Metadata } from 'next'
import { GAScripts } from '~/lib/ga'
import clsx from 'clsx'

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          'bg-black leading-relaxed text-gray-400 antialiased selection:bg-teal-300 selection:text-cyan-900'
        )}
      >
        {children}

        <GAScripts />
      </body>
    </html>
  )
}

export default RootLayout
