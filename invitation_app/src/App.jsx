import { useEffect, useRef, useState } from 'react'
import { CoupleSection } from './components/CoupleSection.jsx'
import { Countdown } from './components/Countdown.jsx'
import { EventSection } from './components/EventSection.jsx'
import { FloatingDecor } from './components/FloatingDecor.jsx'
import { Footer } from './components/Footer.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { InvitationIntro } from './components/InvitationIntro.jsx'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion.js'

function App() {
  const reducedMotion = usePrefersReducedMotion()
  const [opened, setOpened] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef(null)
  const showIntro = !reducedMotion && !opened

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showIntro])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.35

    if (musicOn) {
      audio.play().catch(() => {})
      return
    }

    audio.pause()
  }, [musicOn])

  function handleOpened() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setOpened(true)
    setMusicOn(true)

    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.35
      audio.currentTime = 0
      audio.play().catch(() => {})
    }
  }

  function toggleMusic() {
    setMusicOn((current) => !current)
  }

  return (
    <>
      <audio ref={audioRef} src="/mangalyam.mp3" loop preload="auto" />

      <button
        type="button"
        className={`music-toggle ${musicOn ? 'is-on' : 'is-off'}`}
        aria-label={musicOn ? 'Pause music' : 'Play music'}
        onClick={toggleMusic}
      >
        <span className="music-toggle__waves" aria-hidden="true">
          <span className="music-toggle__bar music-toggle__bar--1" />
          <span className="music-toggle__bar music-toggle__bar--2" />
          <span className="music-toggle__bar music-toggle__bar--3" />
          <span className="music-toggle__bar music-toggle__bar--4" />
        </span>
      </button>

      <a className="skip-link" href="#couple-names">
        Skip to invitation
      </a>

      {showIntro ? <InvitationIntro onOpened={handleOpened} /> : null}

      <div
        className={`site ${showIntro ? 'is-veiled' : 'is-revealed'}`}
        inert={showIntro ? true : undefined}
        aria-hidden={showIntro}
      >
      
        <FloatingDecor />
        <HeroSection />
        <CoupleSection />
        <Countdown />
        <EventSection />
        <Footer />
      </div>
    </>
  )
}

export default App
