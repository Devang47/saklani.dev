import '~/css/global.scss'
import clsx from 'clsx'
import { PHProvider } from './providers'
import PostHogPageView from './PostHogPageView'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <PHProvider>
        <body
          className={clsx(
            'bg-black leading-relaxed text-gray-400 antialiased selection:bg-cyan-300 selection:text-cyan-900'
          )}
        >
          <PostHogPageView />
          {children}
        </body>
      </PHProvider>
    </html>
  )
}

export default RootLayout
