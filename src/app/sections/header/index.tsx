import React from 'react'

import GithubIcon from '~/icons/github'
import GmailIcon from '~/icons/gmail'
import LinkedinIcon from '~/icons/linkedin'
import TwitterIcon from '~/icons/twitter'

function Header() {
  return (
    <section className="px-6">
      <h1 className="text-4xl font-bold text-white">Devang Saklani</h1>
      <h2 className="mt-3 text-lg">Experienced Web developer</h2>

      <p className="mt-4">
        I build exceptional and accessible digital experiences for the web.
      </p>

      <div className="flex items-center gap-5 mt-8">
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
      </div>
    </section>
  )
}

export { Header }
