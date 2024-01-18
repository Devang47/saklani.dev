import '~/css/global.scss'
import { GAScripts } from '~/lib/ga'
import { Analytics } from '@vercel/analytics/react'

import clsx from 'clsx'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          'bg-black leading-relaxed text-gray-400 antialiased selection:bg-cyan-300 selection:text-cyan-900'
        )}
      >
        {children}

        <GAScripts />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
