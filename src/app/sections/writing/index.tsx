import { useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

import { Blog } from '../../../..'

function Writing({ blogs }: { blogs: Blog[] }) {
  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Blog posts"
    >
      <div className="sticky top-0 bg-neutral-900/60 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:opacity-0">
        <h2 className="font-bold tracking-widest text-neutral-200 lg:sr-only">
          Writing
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {blogs?.map((data, i) => <BlogItem data={data} key={i} />)}
        </ul>
      </div>
    </section>
  )
}

const BlogItem = ({ data }: { data: Blog }) => {
  const container = useRef(null)
  const isInView = useInView(container)
  return (
    <li
      ref={container}
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1)'
      }}
      className="mb-12"
    >
      <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        <Image
          alt={data.title}
          src={data.image.url}
          width="200"
          height="48"
          className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
        />

        <div className="z-10 col-span-6">
          <p className="-mt-1 text-sm font-semibold leading-6">{data.year}</p>
          <h3 className="-mt-1">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-scooter-300 focus-visible:text-scooter-300  group/link text-base"
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
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
          </h3>
        </div>
      </div>
    </li>
  )
}

export default Writing
