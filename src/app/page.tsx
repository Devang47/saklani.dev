import React from 'react'

import { About } from '~/app/sections/about'
import { Container } from '~/components/container'
import Threebg from '~/components/threebg'

import { Experience } from './sections/experience'
import { Header } from './sections/header'

const HomePage = () => {
  return (
    <>
      <Container
        as="section"
        className="grid grid-cols-1 gap-6 md:w-[85%] max-w-6xl mx-auto my-12 lg:pt-10 lg:grid-cols-2"
      >
        <Threebg />

        <Header />

        <div className="">
          <About />
          <Experience />
        </div>
      </Container>
    </>
  )
}

export default HomePage
