import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/download', label: 'Download' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Insights' },
  { to: '/support', label: 'Support' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 grid place-items-center border-2 border-slate-900 rounded-[6px]"><span className="text-[10px] font-extrabold leading-none">CR</span></div>
            <span className="text-slate-900 font-semibold tracking-tight">Cryptora VPN</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-slate-900 underline underline-offset-4' : 'text-slate-700 hover:text-slate-900'}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-slate-900 border border-slate-900 rounded-md hover:bg-slate-900 hover:text-white transition-colors">Get Cryptora</Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-900">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-slate-900 underline underline-offset-4' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/pricing" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-md border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors mt-2">Get Cryptora</Link>
          </div>
        </div>
      )}
    </header>
  )
}
