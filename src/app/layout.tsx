import '~/css/global.scss'

import type { Metadata } from 'next'
import { siteURL } from '~/lib/constants'

import { AppHooks } from './app-hooks'
import { Providers } from './providers'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    default: 'next-typescript | basement.studio',
    template: '%s | basement.studio'
  },
  metadataBase: siteURL,
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'next-typescript | basement.studio',
    creator: '@basementstudio',
    siteId: '@basementstudio'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          'bg-black leading-relaxed text-gray-400 antialiased selection:bg-teal-300 selection:text-teal-900'
        )}
      >
        <Providers>
          {children}
          <AppHooks />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
