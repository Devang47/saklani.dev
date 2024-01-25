import clsx from 'clsx'
import { usePostHog } from 'posthog-js/react'
import React from 'react'

import GithubIcon from '~/icons/github'
import GmailIcon from '~/icons/gmail'
import LinkedinIcon from '~/icons/linkedin'
import ReadcvIcon from '~/icons/readcv'
import TwitterIcon from '~/icons/twitter'
import UpworkIcon from '~/icons/upwork'

interface Props {
  title: string
  subtitle: string
  description: string
  gmailLink: string
  githubLink: string
  linkedinLink: string
  resumeLink: string
  twitterLink: string
  upworkLink: string
}

function Header({
  title,
  subtitle,
  description,

  gmailLink,
  githubLink,
  linkedinLink,
  resumeLink,
  twitterLink,
  upworkLink
}: Props) {
  const posthog = usePostHog()

  const handleClickOnSocialLink = (type: string) => {
    posthog.capture(`$${type}_click`)
    posthog.capture(`$social_link_click`)
  }

  return (
    <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="w-full">
        <a href="/" className="w-fit block">
          <h1 className="text-2xl w-fit font-bold text-gray-200 sm:text-4xl">
            {title}
          </h1>
        </a>
        <h3 className="mt-3 font-semibold text-gray-300 sm:text-lg">
          {subtitle}
        </h3>

        <p className="mt-4 text-sm max-w-xs leading-normal">{description}</p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-24 w-max">
            {['About', 'Experience', 'Projects'].map((item, i) => (
              <li key={i}>
                <a
                  className={clsx('group flex items-center py-3')}
                  aria-label={`Jump to ${item} section`}
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
        <a
          target="_blank"
          aria-label="mail me"
          title="send a mail to devang"
          href={gmailLink}
          onClick={() => handleClickOnSocialLink('gmail')}
        >
          <GmailIcon />
        </a>
        <a
          target="_blank"
          aria-label="linkedin url"
          title="linkedin profile url"
          href={linkedinLink}
          onClick={() => handleClickOnSocialLink('linkedin')}
        >
          <LinkedinIcon />
        </a>
        <a
          target="_blank"
          aria-label="twitter url"
          title="twitter profile url"
          className="hidden"
          href={twitterLink}
          onClick={() => handleClickOnSocialLink('twitter')}
        >
          <TwitterIcon />
        </a>
        <a
          target="_blank"
          aria-label="github url"
          title="github profile url"
          href={githubLink}
          onClick={() => handleClickOnSocialLink('github')}
        >
          <GithubIcon />
        </a>
        <a
          target="_blank"
          aria-label="upwork url"
          title="upwork profile url"
          href={upworkLink}
          onClick={() => handleClickOnSocialLink('upwork')}
        >
          <UpworkIcon />
        </a>
        <a
          target="_blank"
          aria-label="readcv url"
          className="-ml-1"
          title="readcv profile url"
          href={resumeLink}
          onClick={() => handleClickOnSocialLink('resume')}
        >
          <ReadcvIcon />
        </a>
      </div>
    </section>
  )
}

export { Header }
