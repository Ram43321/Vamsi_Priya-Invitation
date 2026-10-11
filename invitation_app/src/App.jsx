import { useEffect, useState } from 'react'
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
  const showIntro = !reducedMotion && !opened

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showIntro])

  function handleOpened() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setOpened(true)
  }

  return (
    <>
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
