'use client'

import React, { useEffect, useState } from 'react'

function Footer() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    setTime()
    const id = setInterval(setTime, 1000 * 60)
    return () => clearInterval(id)
  }, [])

  const setTime = () => {
    const str = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit'
    })
    setCurrentTime(str)
  }

  return (
    <footer className="pb-16 sm:pb-0 text-xs">
      <div className="text-base font-medium">{currentTime}</div>
      <p className="mt-1">Designed and developed by DevangSaklani</p>
      {/* <div className="text-[6vw] leading-none whitespace-nowrap">11:50 AM</div> */}
    </footer>
  )
}

export default Footer
