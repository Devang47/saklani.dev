import React, { forwardRef, LegacyRef } from 'react'

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
        <div className="sticky top-0 bg-neutral-900/60 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:opacity-0">
          <h2 className="font-bold tracking-widest text-neutral-200 lg:sr-only">
            Projects
          </h2>
        </div>

        <ul className="group/list">
          {projects?.map((data, i) => <Project data={data} key={i} />)}
        </ul>

        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium text-sm leading-tight text-neutral-400 hover:text-neutral-200 group"
            aria-label="View Full Project Archive"
            href="https://github.com/Devang47?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-scooter-300 motion-reduce:transition-none">
              View Full Project Archive
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
})

export default Projects
