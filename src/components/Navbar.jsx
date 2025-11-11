import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Shield, Download, BookOpen, HelpCircle, Layers, CreditCard } from 'lucide-react'

const navItems = [
  { to: '/features', label: 'Features', icon: Layers },
  { to: '/pricing', label: 'Pricing', icon: CreditCard },
  { to: '/download', label: 'Download', icon: Download },
  { to: '/about', label: 'About', icon: Shield },
  { to: '/blog', label: 'Insights', icon: BookOpen },
  { to: '/support', label: 'Support', icon: HelpCircle },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_10px_30px_rgba(59,130,246,0.35)]" />
            <span className="text-slate-900 font-semibold tracking-wide">Cryptora VPN</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-slate-900 bg-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Pricing</Link>
            <a href="#download" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_40px_rgba(59,130,246,0.45)] transition-shadow">Start Secure Browsing</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-700">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/70 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-slate-900 bg-white shadow' : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'}`}
              >
                <Icon className="w-4 h-4" /> {label}
              </NavLink>
            ))}
            <a href="#download" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-2">Start Secure Browsing</a>
          </div>
        </div>
      )}
    </header>
  )
}
