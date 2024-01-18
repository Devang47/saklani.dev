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
      hour: 'numeric',
      minute: '2-digit'
    })
    setCurrentTime(str)
  }

  return (
    <footer className="pb-16 sm:pb-0 text-xs">
      <div className="text-base lg:text-xl font-semibold tracking-wider">
        {currentTime}
      </div>
      <p className="mt-1">Designed and developed by Devang</p>
    </footer>
  )
}

export default Footer
