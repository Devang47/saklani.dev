import '~/css/global.scss'

import clsx from 'clsx'

import { BackgroundBeams } from '~/components/beamsbg'

import PostHogPageView from './utils/PostHogPageView'
import { PHProvider } from './utils/providers'
// import Threebg from '~/components/threebg'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
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
