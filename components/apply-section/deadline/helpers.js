// calculate time difference between today and the deadline
const getTimeToDeadline = date => {
  const difference = new Date(date) - new Date()
  let timeLeftInUnits = {}

  if (difference > 0) {
    timeLeftInUnits = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
      min: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
      sec: ('0' + Math.floor((difference / 1000) % 60)).slice(-2)
    }
  } else {
    timeLeftInUnits = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  return timeLeftInUnits
}

function fetcher(url) {
  return fetch(url).then(res => res.json())
}

export { getTimeToDeadline, fetcher }
