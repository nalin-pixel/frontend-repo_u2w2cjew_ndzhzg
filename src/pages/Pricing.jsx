import { useState } from 'react'
import Page from '../components/Page'

const plans = [
  { name: 'Basic', priceM: 9, priceY: 69, features: ['Unlimited bandwidth','AES-256 + WireGuard','1 device'], highlight: false },
  { name: 'Pro', priceM: 12, priceY: 99, features: ['All Basic features','No-logs verified','5 devices','Streaming unlock'], highlight: true },
  { name: 'Ultimate', priceM: 16, priceY: 129, features: ['All Pro features','10 devices','Priority network','Static IP (optional)'], highlight: false },
]

export default function Pricing(){
  const [yearly, setYearly] = useState(true)

  return (
    <div className="bg-white text-slate-900">
      <Page>
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl sm:text-6xl font-extrabold">Choose Your Plan</h1>
            <label className="flex items-center gap-3 text-slate-700">
              <span>Monthly</span>
              <input type="checkbox" checked={yearly} onChange={()=>setYearly(!yearly)} className="accent-sky-500"/>
              <span>Yearly</span>
            </label>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {plans.map(p => (
              <div key={p.name} className={`${p.highlight ? 'bg-white shadow-lg border-sky-300/70' : 'bg-white/70 backdrop-blur border-slate-200'} rounded-2xl p-6 border`}>
                <div className="text-sm text-slate-500">{p.name}</div>
                <div className="mt-2 text-5xl font-bold tracking-tight">${yearly ? p.priceY : p.priceM}<span className="text-lg text-slate-500 ml-1">{yearly ? '/yr' : '/mo'}</span></div>
                <ul className="mt-6 space-y-2 text-slate-700">
                  {p.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <button className="mt-8 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 text-white">Get Started</button>
                <div className="mt-3 text-xs text-slate-500">30-Day Money-Back Guarantee • Pay with Crypto, Card, PayPal</div>
              </div>
            ))}
          </div>
        </section>
      </Page>
    </div>
  )
}
