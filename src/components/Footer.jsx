import { Link } from 'react-router-dom'
import { Twitter, Github, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_10px_30px_rgba(59,130,246,0.35)]" />
            <span className="font-semibold">Cryptora VPN</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">Privacy without compromise. Speed without limits.</p>
          <div className="mt-4 flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5"/></a>
            <a href="#" aria-label="Github"><Github className="w-5 h-5"/></a>
            <a href="#" aria-label="Email"><Mail className="w-5 h-5"/></a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Insights</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Newsletter</div>
          <div className="flex gap-2">
            <input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Enter your email"/>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">Join</button>
          </div>
          <p className="text-xs text-slate-500 mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-slate-200/80 py-4 text-center text-slate-500 text-sm">© 2025 Cryptora VPN. All rights reserved.</div>
    </footer>
  )
}
