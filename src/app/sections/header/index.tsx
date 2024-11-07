import clsx from 'clsx'
import { motion, stagger, useAnimate } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import React, { useEffect } from 'react'

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

  const staggerMenuItems = stagger(0.05, { startDelay: 0.5 })

  const [scope, animate] = useAnimate()
  const [scope2, animate2] = useAnimate()

  useEffect(() => {
    animate(
      'li, a',
      { opacity: 1, x: 0 },
      {
        duration: 0.4,
        delay: staggerMenuItems,
        type: 'spring'
      }
    )
    animate2(
      'a',
      { opacity: 1, y: 0 },
      {
        duration: 0.4,
        delay: staggerMenuItems,
        type: 'spring'
      }
    )
  }, [])

  return (
    <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-2xl w-fit font-bold text-neutral-200 sm:text-4xl"
        >
          {title}
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-2 md:mt-3 font-semibold text-neutral-300 text-sm sm:text-lg"
        >
          {subtitle}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 max-w-xs leading-normal text-neutral-400 text-[15px]"
        >
          {description}
        </motion.p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul ref={scope} className="mt-24 w-max">
            {['About', 'Experience', 'Projects'].map((item, i) => (
              <motion.li initial={{ opacity: 0, x: -60 }} key={i}>
                <a
                  className={clsx('group flex items-center py-3')}
                  aria-label={`Jump to ${item} section`}
                  href={'#' + item.toLowerCase()}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-neutral-600 transition-all group-hover:w-16 group-hover:bg-neutral-200 group-focus-visible:w-16 group-focus-visible:bg-neutral-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-neutral-200 group-focus-visible:text-neutral-200">
                    {item}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <motion.div
        ref={scope2}
        className="flex items-center gap-5 mt-8 [&>*]:p-1"
      >
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          target="_blank"
          rel="noreferrer"
          aria-label="mail me"
          title="send a mail to devang"
          href={gmailLink}
          onClick={() => handleClickOnSocialLink('gmail')}
        >
          <GmailIcon />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin url"
          title="linkedin profile url"
          href={linkedinLink}
          onClick={() => handleClickOnSocialLink('linkedin')}
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          target="_blank"
          rel="noreferrer"
          aria-label="twitter url"
          title="twitter profile url"
          className="hidden"
          href={twitterLink}
          onClick={() => handleClickOnSocialLink('twitter')}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          target="_blank"
          rel="noreferrer"
          aria-label="github url"
          title="github profile url"
          href={githubLink}
          onClick={() => handleClickOnSocialLink('github')}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          target="_blank"
          rel="noreferrer"
          aria-label="upwork url"
          title="upwork profile url"
          href={upworkLink}
          onClick={() => handleClickOnSocialLink('upwork')}
        >
          <UpworkIcon />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          target="_blank"
          rel="noreferrer"
          aria-label="readcv url"
          className="-ml-1"
          title="readcv profile url"
          href={resumeLink}
          onClick={() => handleClickOnSocialLink('resume')}
        >
          <ReadcvIcon />
        </motion.a>
      </motion.div>
    </section>
  )
}

export { Header }
