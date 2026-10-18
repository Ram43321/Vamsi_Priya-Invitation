import { weddingDetails } from '../data/weddingDetails.js'
import { GoldDivider, Mandala } from './DecorativeOrnaments.jsx'

export function Footer() {
  return (
    <footer className="site-footer">
      <Mandala className="footer__mandala" />
      <GoldDivider className="divider" />
      <p className="script-line">With Love & Blessings</p>
      <p className="footer__names">
        {weddingDetails.fatherName} & {weddingDetails.motherName}
      </p>
      <p className="footer__names footer__names--single">{weddingDetails.brotherName}</p>
      <p className="footer__copy">
        We look forward to celebrating these beautiful moments with you.
      </p>
      <p className="muted-caps">Save the Dates • October & November 2026</p>
    </footer>
  )
}
