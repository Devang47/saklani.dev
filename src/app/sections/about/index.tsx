import { motion, stagger, useAnimate } from 'framer-motion'
import React, { forwardRef, Ref, useEffect } from 'react'

const About = forwardRef(function About(
  { data }: { data: string },
  ref?: Ref<HTMLElement>
) {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.4 })

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      'p',
      { opacity: [0, 1], y: [40, 0] },
      {
        duration: 0.4,
        type: 'spring',
        delay: staggerMenuItems
      }
    )
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      aria-label="about me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="container">
        <div className="sticky top-0 bg-neutral-900/60 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:opacity-0">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="font-bold tracking-widest text-neutral-200 lg:sr-only"
          >
            About
          </motion.h2>
        </div>

        <div
          ref={scope}
          className="text-[15px] [&>p:not(:first-of-type)]:mt-4 [&>p]:first-of-type:mt-6 [&>p]:first-of-type:lg:mt-0 [&_a]:underline underline-offset-2 [&>p]:opacity-0"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      </div>
    </section>
  )
})

export { About }
