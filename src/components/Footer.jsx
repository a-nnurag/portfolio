import { profile } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono footer__built">Built with React &amp; Framer Motion</span>
      </div>
    </footer>
  )
}
