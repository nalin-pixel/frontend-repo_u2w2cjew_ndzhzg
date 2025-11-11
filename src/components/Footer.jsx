import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 grid place-items-center border-2 border-slate-900 rounded-[6px]"><span className="text-[10px] font-extrabold leading-none">CR</span></div>
            <span className="font-semibold">Cryptora VPN</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">Faster. Safer. Borderless.</p>
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
          <div className="font-semibold mb-3">Get Cryptora</div>
          <Link to="/pricing" className="inline-block px-4 py-2 border border-slate-900 rounded-md hover:bg-slate-900 hover:text-white transition-colors">See plans</Link>
          <p className="text-xs text-slate-500 mt-2">30-day money-back guarantee</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-slate-500 text-sm">© 2025 Cryptora VPN. All rights reserved.</div>
    </footer>
  )
}
