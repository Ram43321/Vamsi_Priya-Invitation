import { weddingDetails } from '../data/weddingDetails.js'
import { GoldDivider } from './DecorativeOrnaments.jsx'
import { EventCard } from './EventCard.jsx'

export function EventSection() {
  return (
    <section id="events" className="events" aria-labelledby="events-heading">
      <p className="script-line">Save these dates</p>
      <h2 id="events-heading" className="section-heading">
        Our Celebration
      </h2>
      <GoldDivider className="divider" />
      <div className="events__grid">
        {weddingDetails.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
