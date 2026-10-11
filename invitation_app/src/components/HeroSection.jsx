import { useEffect, useRef } from 'react'
import { weddingDetails } from '../data/weddingDetails.js'
import {
  CornerOrnament,
  GoldDivider,
  Mandala,
  Paisley,
  WeddingArch,
} from './DecorativeOrnaments.jsx'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

export function HeroSection() {
  const cardRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const card = cardRef.current
    if (!card || reducedMotion) return undefined

    function onMove(event) {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`
    }

    function onLeave() {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }

    card.addEventListener('pointermove', onMove)
    card.addEventListener('pointerleave', onLeave)
    return () => {
      card.removeEventListener('pointermove', onMove)
      card.removeEventListener('pointerleave', onLeave)
    }
  }, [reducedMotion])

  function scrollToEvents() {
    const events = document.getElementById('events')
    events?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <section className="hero" aria-labelledby="couple-names">
      <Mandala className="hero__mandala hero__mandala--left" />
      <Mandala className="hero__mandala hero__mandala--right" />
      <Paisley className="hero__paisley hero__paisley--left" />
      <Paisley className="hero__paisley hero__paisley--right" />
      <WeddingArch className="hero__arch" />

      <div className="hero__stage">
        <div className="hero__glow" aria-hidden="true" />
        <article ref={cardRef} className="invite-card">
          <CornerOrnament className="corner corner--tl" />
          <CornerOrnament className="corner corner--tr" />
          <CornerOrnament className="corner corner--bl" />
          <CornerOrnament className="corner corner--br" />

          <p className="blessing">{weddingDetails.blessing}</p>
          <p className="family-line">{weddingDetails.familyLine}</p>
          <GoldDivider className="divider" />

          <h1 id="couple-names" className="names">
            <span>{weddingDetails.groomsName}</span>
            <em className="names__amp">&</em>
            <span>{weddingDetails.bridesName}</span>
          </h1>

          <GoldDivider className="divider" />
          <p className="muted-caps">{weddingDetails.requestLine}</p>
          <p className="muted-caps muted-caps--soft">{weddingDetails.celebrateLine}</p>
          <p className="hero-date">{weddingDetails.weddingDateDisplay}</p>

          <button type="button" className="gold-button" onClick={scrollToEvents}>
            Explore Our Celebration
          </button>
        </article>
      </div>

      <a className="scroll-indicator" href="#beginning" aria-label="Scroll to our beautiful beginning">
        <span className="scroll-indicator__arrow" />
      </a>
    </section>
  )
}
