import { CornerOrnament, Lotus } from './DecorativeOrnaments.jsx'

export function EventCard({ event }) {
  const featured = event.featured

  return (
    <article className={`event-card ${featured ? 'is-featured' : ''}`}>
      <CornerOrnament className="corner corner--tl" />
      <CornerOrnament className="corner corner--tr" />
      <CornerOrnament className="corner corner--bl" />
      <CornerOrnament className="corner corner--br" />
      <Lotus className="event-card__lotus" />
      {featured ? <p className="event-card__badge">Wedding Day</p> : null}
      <h3 className="event-card__title">{event.title}</h3>
      <p className="event-card__date">{event.date}</p>
      <p className="event-card__copy">{event.description}</p>
      <a
        className="gold-button gold-button--link"
        href={event.venueUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {event.buttonLabel}
      </a>
    </article>
  )
}
