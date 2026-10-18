import { useEffect, useRef, useState } from 'react'
import { weddingDetails } from '../data/weddingDetails.js'
import { CornerOrnament, Mandala, SealMandala } from './DecorativeOrnaments.jsx'

export function InvitationIntro({ onOpenStart, onOpened }) {
  const [opening, setOpening] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function handleOpen() {
    if (opening) return
    setOpening(true)
    onOpenStart()
    timeoutRef.current = window.setTimeout(() => {
        onOpened()
    }, 1800)
  }

  return (
    <div className={`intro ${opening ? 'is-opening' : ''}`}>
      <div className="intro__glow" aria-hidden="true" />
      <Mandala className="intro__mandala" />

      <h1 className="intro__heading">A Wedding Invitation</h1>
      <p className="intro__sub">You are cordially invited</p>

      <button
        type="button"
        className={`gold-button ${opening ? 'is-hidden' : ''}`}
        onClick={handleOpen}
        aria-label="Open the wedding invitation"
        aria-hidden={opening}
        tabIndex={opening ? -1 : 0}
      >
        Open Invitation
      </button>

      <div className="intro__scene">
        <div className="envelope" aria-hidden={opening}>
          <div className="envelope__back" />
          <div className="envelope__card">
            <CornerOrnament className="corner corner--tl" />
            <CornerOrnament className="corner corner--tr" />
            <CornerOrnament className="corner corner--bl" />
            <CornerOrnament className="corner corner--br" />
            <p className="blessing">{weddingDetails.blessing}</p>
            <p className="envelope__names">
              {weddingDetails.groomsName}
              <span> & </span>
              {weddingDetails.bridesName}
            </p>
            <p className="muted-caps">{weddingDetails.weddingDateDisplay}</p>
          </div>
          <div className="envelope__front" />
          <div className="envelope__flap">
            <SealMandala className="envelope__seal" />
          </div>
        </div>
      </div>

    </div>
  )
}
