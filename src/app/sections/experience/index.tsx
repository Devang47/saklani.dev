import React from 'react'
import Job from '~/components/job'

function Experience() {
  return (
    <section className="">
      <div className="container mt-10 [&>p:not(:first-of-type)]:mt-4 [&>p]:px-6">
        <h2 className="uppercase font-bold py-5 sticky top-0 tracking-wider px-6 bg-[#0d1821]/50 backdrop-blur-md text-sm">
          Experience
        </h2>

        <div className="px-5 mt-4">
          <Job />
        </div>
      </div>
    </section>
  )
}

export { Experience }
