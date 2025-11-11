import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const plans = [
  { name: 'Basic', priceM: 9, priceY: 69, features: ['Unlimited bandwidth','AES-256 + WireGuard','1 device'], highlight: false },
  { name: 'Pro', priceM: 12, priceY: 99, features: ['All Basic features','No-logs verified','5 devices','Streaming unlock'], highlight: true },
  { name: 'Ultimate', priceM: 16, priceY: 129, features: ['All Pro features','10 devices','Priority network','Static IP (optional)'], highlight: false },
]

export default function Pricing(){
  const [yearly, setYearly] = useState(true)

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl sm:text-6xl font-extrabold">Choose Your Plan</h1>
            <label className="flex items-center gap-3 text-white/80">
              <span>Monthly</span>
              <input type="checkbox" checked={yearly} onChange={()=>setYearly(!yearly)} className="accent-cyan-400"/>
              <span>Yearly</span>
            </label>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-6 border ${p.highlight ? 'bg-white/10 border-cyan-400/40 shadow-[0_0_30px_rgba(56,189,248,0.25)]' : 'bg-white/5 border-white/10'}`}>
                <div className="text-sm text-white/60">{p.name}</div>
                <div className="mt-2 text-5xl font-bold tracking-tight">${yearly ? p.priceY : p.priceM}<span className="text-lg text-white/60 ml-1">{yearly ? '/yr' : '/mo'}</span></div>
                <ul className="mt-6 space-y-2 text-white/80">
                  {p.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <button className="mt-8 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600">Get Started</button>
                <div className="mt-3 text-xs text-white/60">30-Day Money-Back Guarantee • Pay with Crypto, Card, PayPal</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
