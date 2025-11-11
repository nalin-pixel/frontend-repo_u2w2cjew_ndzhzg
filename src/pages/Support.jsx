import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const faqs = [
  { q: 'Do you keep logs?', a: 'No. Our infrastructure is designed and audited to be incapable of storing activity or connection logs.' },
  { q: 'What speeds can I expect?', a: 'On modern connections, users regularly achieve 700–950 Mbps with WireGuard and Smart Routing.' },
  { q: 'How many devices are supported?', a: 'Up to 10 devices on Ultimate. Pro supports 5. Basic includes 1.' },
]

export default function Support(){
  const [open, setOpen] = useState(0)
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Support</h1>
          <p className="mt-2 text-white/70">We’re here to help.</p>

          <div className="mt-8 divide-y divide-white/10 border border-white/10 rounded-2xl">
            {faqs.map((f,i)=> (
              <div key={i}>
                <button onClick={()=>setOpen(open===i? -1:i)} className="w-full flex items-center justify-between px-6 py-4">
                  <span className="text-lg font-semibold text-left">{f.q}</span>
                  <span className="text-cyan-300">{open===i? '−' : '+'}</span>
                </button>
                {open===i && <div className="px-6 pb-4 text-white/70">{f.a}</div>}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="text-xl font-semibold">Contact us</div>
            <form className="mt-4 grid sm:grid-cols-2 gap-3">
              <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2"/>
              <input required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2"/>
              <textarea required placeholder="How can we help?" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 h-28"/>
              <button className="sm:col-span-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
