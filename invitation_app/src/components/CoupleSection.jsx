import { weddingDetails } from '../data/weddingDetails.js'
import { FloralSpray, GoldDivider, Lotus } from './DecorativeOrnaments.jsx'

export function CoupleSection() {
  return (
    <section id="beginning" className="couple" aria-labelledby="beginning-heading">
      <Lotus className="couple__lotus couple__lotus--left" />
      <Lotus className="couple__lotus couple__lotus--right" />

      <p className="script-line">With devoted hearts</p>
      <h2 id="beginning-heading" className="section-heading">
        Our Beautiful Beginning
      </h2>
      <GoldDivider className="divider" />

      <div className="couple__names">
        <p>{weddingDetails.groomsName}</p>
        <span className="names__amp">&</span>
        <p>{weddingDetails.bridesName}</p>
      </div>

      <FloralSpray className="couple__spray" />
      <p className="couple__tagline">{weddingDetails.coupleTagline}</p>
    </section>
  )
}
