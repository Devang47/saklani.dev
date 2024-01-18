'use client'

import React, { useEffect, useRef, useState } from 'react'

import { About } from '~/app/sections/about'
import { Container } from '~/components/container'
import Threebg from '~/components/threebg'

import { Experience } from './sections/experience'
import { Header } from './sections/header'

// import { performRequest } from '~/lib/datocms'
import Projects from './sections/projects'
import Writing from './sections/writing'
import Footer from './sections/footer'

// const PAGE_CONTENT_QUERY = `
//   query Home {
//     homepage {
//       title
//       description {
//         value
//       }
//     }
//   }`

const HomePage = async () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const experienceSectionRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)

  // const [currentTime, setCurrentTime] = useState('')
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null)

  useEffect(() => {
    if (timer) clearInterval(timer)

    let navEl = document.querySelector('.nav')
    if (!navEl || window.innerWidth < 1024) return

    // const className = 'active'
    // const observer = new IntersectionObserver(
    //   (e) => {
    //     e.forEach((e) => {
    //       if (e.isIntersecting) {
    //         let s = navEl?.querySelector('a[href].'.concat(className))
    //         s?.classList.remove(className)
    //         let r = navEl?.querySelector('a[href="#'.concat(e.target.id, '"]'))
    //         r?.classList.add(className)
    //       }
    //     })
    //   },
    //   {
    //     rootMargin: '0% 0% -70% 0%',
    //     threshold: 0
    //   }
    // )

    // aboutSectionRef.current && observer.observe(aboutSectionRef.current)
    // experienceSectionRef.current &&
    //   observer.observe(experienceSectionRef.current)
    // projectsSectionRef.current && observer.observe(projectsSectionRef.current)

    setTimer(
      setInterval(() => {
        getCurrentTimeInIndia()
      }, 1000 * 60)
    )
  }, [])

  const getCurrentTimeInIndia = () => {
    // const str = new Date().toLocaleString('en-US', {
    //   timeZone: 'Asia/Kolkata',
    //   hour: '2-digit',
    //   minute: '2-digit'
    // })
    // setCurrentTime(str)
  }

  // const {
  //   data: { homepage }
  // } = await performRequest({ query: PAGE_CONTENT_QUERY })

  // console.log({ homepage })

  return (
    <div className="">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>

        <Container as="section" className="lg:flex lg:justify-between lg:gap-4">
          <Threebg />

          <Header />

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About ref={aboutSectionRef} />
            <Experience ref={experienceSectionRef} />
            <Projects ref={projectsSectionRef} />

            <Writing />
            <Footer />
          </main>
        </Container>
      </div>

      {/* <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <footer className="transition-fade footer_footer__dwlkH">


        <ul>  
          <li>  
            Explore
          </li>

          <li>  
            Home
          </li>
          <li>  
            Photography
          </li>
          <li>  
            
          </li>
        </ul>


                  </footer>
      </div> */}
    </div>
  )
}

export default HomePage
