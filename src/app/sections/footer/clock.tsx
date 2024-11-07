import * as HoverCard from '@radix-ui/react-hover-card'
import React, { useEffect } from 'react'

function Clock() {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [currentTime, setCurrentTime] = React.useState('')

  useEffect(() => {
    setTime()
    const id = setInterval(setTime, 1000)
    return () => clearInterval(id)
  }, [])

  const setTime = () => {
    const str = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23'
    })

    setCurrentTime(
      new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit'
      })
    )

    divRef.current?.style.setProperty('--now-h', str.split(':')[0])
    divRef.current?.style.setProperty('--now-m', str.split(':')[1])
    divRef.current?.style.setProperty('--now-s', str.split(':')[2])
  }

  return (
    <div className="">
      <HoverCard.Root openDelay={900}>
        <HoverCard.Trigger asChild>
          <div ref={divRef} className="footer_clock" aria-hidden="true">
            <div className="footer_second"></div>
            <div className="footer_minute"></div>
            <div className="footer_hour"></div>
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            sideOffset={8}
            className="bg-neutral-900 shadow py-1 px-2 rounded-lg border border-neutral-600 text-xs"
          >
            {currentTime} IST
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  )
}

export default Clock
