import React, { LegacyRef, forwardRef } from 'react'
import Project from '~/components/project'
import { IProject } from '../../../..'

const Projects = forwardRef(function Projects(
  { projects }: { projects: IProject[] },
  ref?: LegacyRef<HTMLElement>
) {
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="container mt-10 [&>p:not(:first-of-type)]:mt-4">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
            Projects
          </h2>
        </div>

        <ul className="group/list">
          {projects?.map((data, i) => <Project data={data} key={i} />)}
        </ul>
      </div>
    </section>
  )
})

export default Projects
