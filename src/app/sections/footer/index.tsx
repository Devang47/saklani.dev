'use client'

import React, { Suspense, useEffect } from 'react'
import Clock from './clock'
import { lazy } from 'react'
import posthog from 'posthog-js'

function Loading() {
  return (
    <div className="text-sm text-center text-gray-400 py-20">Loading...</div>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const [hidden, setHidden] = React.useState(true)

  useEffect(() => {
    if (!hidden) {
      posthog.capture(`$$open_hidden_game`)
    }
  }, [hidden])

  const Game = lazy(() => import('../Game'))

  return (
    <>
      <footer className="border-y border-neutral-800 text-xs text-neutral-500">
        <div className="flex items-center justify-between max-w-screen-xl px-6 md:px-12 lg:px-24 mx-auto py-4">
          <div>Designed and developed by Devang.</div>
          <div className="flex items-center gap-4">
            <p>{year}</p>
            <button onClick={() => setHidden((val) => !val)}>
              <Clock />
            </button>
          </div>
        </div>
      </footer>

      {!hidden && (
        <Suspense fallback={<Loading />}>
          <div className="py-10 text-center text-neutral-400 text-sm">
            <Game />
          </div>
        </Suspense>
      )}
    </>
  )
}

export default Footer
