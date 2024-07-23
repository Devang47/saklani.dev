import React, { forwardRef, LegacyRef } from 'react'

const About = forwardRef(function About(
  { data }: { data: string },
  ref?: LegacyRef<HTMLElement>
) {
  return (
    <section
      ref={ref}
      id="about"
      aria-label="about me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="container">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
            About
          </h2>
        </div>

        <div
          className="text-[15px] [&>p:not(:first-of-type)]:mt-4 [&>p]:first-of-type:mt-6 [&>p]:first-of-type:lg:mt-0 [&_a]:underline underline-offset-2"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      </div>
    </section>
  )
})

export { About }
