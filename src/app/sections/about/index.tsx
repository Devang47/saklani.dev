import React, { LegacyRef, forwardRef } from 'react'

const About = forwardRef(function About(_props, ref?: LegacyRef<HTMLElement>) {
  return (
    <section
      ref={ref}
      id="about"
      aria-label="about me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="container text-sm [&>p:not(:first-of-type)]:mt-4">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
            About
          </h2>
        </div>

        <p className="mt-6 lg:mt-0">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ea
          minus sint recusandae cum adipisci placeat consequuntur reprehenderit
          iste error, commodi asperiores doloremque natus ipsum magnam in atque
          ex.
        </p>
      </div>
    </section>
  )
})

export { About }
