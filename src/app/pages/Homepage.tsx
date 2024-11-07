'use client'

import React, { useEffect, useRef } from 'react'

import { About } from '~/app/sections/about'

import { QueryResponse } from '../../..'
import { Experience } from '../sections/experience'
import { Header } from '../sections/header'
import Projects from '../sections/projects'
import Writing from '../sections/writing'

function Homepage({ data }: { data: QueryResponse }) {
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const experienceSectionRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const navEl = document.querySelector('.nav')
    if (!navEl || window.innerWidth < 1024) return

    const className = 'active'
    const observer = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          if (e.isIntersecting) {
            const s = navEl?.querySelector('a[href].'.concat(className))
            s?.classList.remove(className)
            const r = navEl?.querySelector(
              'a[href="#'.concat(e.target.id, '"]')
            )
            r?.classList.add(className)
          }
        })
      },
      {
        rootMargin: '0% 0% -70% 0%',
        threshold: 0
      }
    )

    aboutSectionRef.current && observer.observe(aboutSectionRef.current)
    experienceSectionRef.current &&
      observer.observe(experienceSectionRef.current)
    projectsSectionRef.current && observer.observe(projectsSectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-scooter-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      <section className="lg:flex lg:justify-between lg:gap-4">
        <Header
          title={data.titleH1}
          description={data.description}
          subtitle={data.subtitleH2}
          gmailLink={data.gmailLink}
          githubLink={data.githubLink}
          linkedinLink={data.linkedinLink}
          resumeLink={data.resumeLink}
          twitterLink={data.twitterLink}
          upworkLink={data.upworkLink}
        />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About data={data.about} ref={aboutSectionRef} />
          <Experience jobs={data.jobExperiences} ref={experienceSectionRef} />
          <Projects projects={data.projects} ref={projectsSectionRef} />

          <Writing blogs={data.blogs} />
        </main>
      </section>
    </div>
  )
}

export default Homepage
