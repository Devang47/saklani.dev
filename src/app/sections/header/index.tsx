import clsx from 'clsx'
import React from 'react'

import GithubIcon from '~/icons/github'
import GmailIcon from '~/icons/gmail'
import LinkedinIcon from '~/icons/linkedin'
import TwitterIcon from '~/icons/twitter'
import UpworkIcon from '~/icons/upwork'

function Header() {
  return (
    <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="w-full">
        <h1 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Devang Saklani
        </h1>
        <h2 className="mt-3 font-semibold tracking-tight text-gray-300 sm:text-lg">
          Experienced Web developer
        </h2>

        <p className="mt-4 text-sm max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-24 w-max">
            {['About', 'Experience', 'Projects'].map((item, i) => (
              <li key={i}>
                <a
                  className={clsx('group flex items-center py-3')}
                  href={'#' + item.toLowerCase()}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-5 mt-8 [&>*]:p-1">
        <a target="_blank" href="">
          <GmailIcon />
        </a>
        <a target="_blank" href="">
          <LinkedinIcon />
        </a>
        <a target="_blank" href="">
          <TwitterIcon />
        </a>
        <a target="_blank" href="">
          <GithubIcon />
        </a>
        <a target="_blank" href="">
          <UpworkIcon />
        </a>
      </div>
    </section>
  )
}

export { Header }
