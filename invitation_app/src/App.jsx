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

    let isMounted = true
    const removeInteractionListeners = () => {
      document.removeEventListener('pointerdown', startPlayback, true)
      document.removeEventListener('keydown', startPlayback, true)
    }
    const startPlayback = () => {
      audio.play().then(() => {
        if (!isMounted) return
        setMusicOn(true)
        removeInteractionListeners()
      }).catch(() => {
        if (isMounted) setMusicOn(false)
      })
    }

    audio.play().then(() => {
      if (isMounted) setMusicOn(true)
    }).catch(() => {
      if (!isMounted) return
      document.addEventListener('pointerdown', startPlayback, true)
      document.addEventListener('keydown', startPlayback, true)
    })

    return () => {
      isMounted = false
      removeInteractionListeners()
    }
  }, [])

  function handleOpenStart() {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.35
    audio.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false))
  }

  function handleOpened() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setOpened(true)
  }

  function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return

    if (musicOn) {
      audio.pause()
      setMusicOn(false)
      return
    }

    audio.volume = 0.35
    audio.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false))
  }

  return (
    <>
      <audio ref={audioRef} src="/mangalyam.mp3" autoPlay loop preload="auto" />

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

      {showIntro ? (
        <InvitationIntro onOpenStart={handleOpenStart} onOpened={handleOpened} />
      ) : null}

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
