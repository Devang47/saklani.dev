import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import React from 'react'

import { JobExperience } from '../..'

function Job({ data }: { data: JobExperience }) {
  const posthog = usePostHog()

  const handleClickOnJob = () => {
    posthog.capture('$job_click', {
      job_title: data.title
    })
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.6 }}
      className="mb-12"
    >
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2"
          aria-label="2018 to Present"
        >
          {data.startingAndEndingYear}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-neutral-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-scooter-300 focus-visible:text-scooter-300  group/link text-base"
                href={data.link}
                onClick={handleClickOnJob}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Lead Engineer at Upstatement (opens in a new tab)"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {data.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="text-neutral-500 text-sm mt-1" aria-hidden="true">
              {data.role}
            </div>
          </h3>

          <div
            className="mt-2 text-sm leading-normal"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {data.techUsed.split(' ').map((data, i) => (
              <li className="mr-1.5 mt-2" key={i}>
                <div className="flex items-center rounded-full bg-scooter-400/10 px-3 py-1 text-xs font-medium leading-5 text-scooter-300 ">
                  {data}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.li>
  )
}

export default Job
