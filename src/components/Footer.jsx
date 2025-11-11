import { Link } from 'react-router-dom'
import { Twitter, Github, Shield, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
            <span className="font-semibold">Cryptora VPN</span>
          </div>
          <p className="mt-4 text-white/70 text-sm">Privacy without compromise. Speed without limits.</p>
          <div className="mt-4 flex items-center gap-4 text-white/60">
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5"/></a>
            <a href="#" aria-label="Github"><Github className="w-5 h-5"/></a>
            <a href="#" aria-label="Email"><Mail className="w-5 h-5"/></a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Insights</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Newsletter</div>
          <div className="flex gap-2">
            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Enter your email"/>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600">Join</button>
          </div>
          <p className="text-xs text-white/50 mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">© 2025 Cryptora VPN. All rights reserved.</div>
    </footer>
  )
}
