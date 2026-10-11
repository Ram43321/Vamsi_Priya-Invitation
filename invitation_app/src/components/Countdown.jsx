import { useEffect, useState } from 'react'
import { TIME_ZONE, weddingDetails } from '../data/weddingDetails.js'
import { GoldDivider } from './DecorativeOrnaments.jsx'

function getTimeParts(targetMs) {
  const diff = Math.max(0, targetMs - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    expired: totalSeconds <= 0,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

function pad(value) {
  return String(value).padStart(2, '0')
}

export function Countdown() {
  const targetMs = new Date(weddingDetails.weddingDateIso).getTime()
  const [parts, setParts] = useState(() => getTimeParts(targetMs))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setParts(getTimeParts(targetMs))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [targetMs])

  return (
    <section className="countdown" aria-labelledby="countdown-heading">
      <p className="script-line">Until we wed</p>
      <h2 id="countdown-heading" className="section-heading">
        Counting the Blessings
      </h2>
      <GoldDivider className="divider" />
      <p className="countdown__note">
        Live countdown to {weddingDetails.weddingDateDisplay}, midnight in {TIME_ZONE}.
      </p>

      {parts.expired ? (
        <p className="countdown__celebrate" role="status">
          The auspicious day is here. With love and blessings.
        </p>
      ) : (
        <div className="countdown__grid" aria-live="polite">
          {[
            { label: 'Days', value: parts.days },
            { label: 'Hours', value: pad(parts.hours) },
            { label: 'Minutes', value: pad(parts.minutes) },
            { label: 'Seconds', value: pad(parts.seconds) },
          ].map((unit) => (
            <div key={unit.label} className="count-cell">
              <span className="count-cell__value">{unit.value}</span>
              <span className="count-cell__label">{unit.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
