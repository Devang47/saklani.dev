import React, { forwardRef, LegacyRef } from 'react'

import Job from '~/components/job'

import { JobExperience } from '../../../..'

const Experience = forwardRef(function Experience(
  { jobs }: { jobs: JobExperience[] },
  ref?: LegacyRef<HTMLElement>
) {
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="container mt-10 [&>p:not(:first-of-type)]:mt-4">
        <div className="sticky top-0 bg-neutral-900/60 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:opacity-0">
          <h2 className="font-bold tracking-widest text-neutral-200 lg:sr-only">
            Experience
          </h2>
        </div>

        <ul className="group/list">
          {jobs?.map((data) => <Job data={data} key={data.id} />)}
        </ul>
      </div>
    </section>
  )
})

export { Experience }
