import React, { useState, useEffect } from 'react'
import { getTimeToDeadline } from './helpers'

// Countdown funciton calculates the difference between today and the applications deadline date in days, hours, minutes and seconds. 
// Returns an array of remaining time and time units names.

export default function countdown(date) {
  const [timeLeftInUnits, setTimeLeftInUnits] = useState(getTimeToDeadline())

  useEffect(() => {
    const oneSecondInterval = setInterval(() => {
      setTimeLeftInUnits(getTimeToDeadline(date))
    }, 1000)

    return () => clearInterval(oneSecondInterval)
  }, [])

  const countdownComponents = []

  Object.keys(timeLeftInUnits).forEach(timeUnit => {
    countdownComponents.push([timeLeftInUnits[timeUnit], timeUnit])
    // [[21, "days"], [6, "hours"], [34, "minutes"], [31, "seconds"]]
  })

  return countdownComponents
}
