import { useState } from 'react'

const faqs = [
  { q: 'Do you keep logs?', a: 'No. Our infrastructure is designed and audited to be incapable of storing activity or connection logs.' },
  { q: 'What speeds can I expect?', a: 'On modern connections, users regularly achieve 700–950 Mbps with WireGuard and Smart Routing.' },
  { q: 'How many devices are supported?', a: 'Up to 10 devices on Ultimate. Pro supports 5. Basic includes 1.' },
]

export default function Support(){
  const [open, setOpen] = useState(0)
  return (
    <div className="bg-white text-slate-900">
      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Support</h1>
          <p className="mt-2 text-slate-600">We’re here to help.</p>

          <div className="mt-8 divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white/70 backdrop-blur">
            {faqs.map((f,i)=> (
              <div key={i}>
                <button onClick={()=>setOpen(open===i? -1:i)} className="w-full flex items-center justify-between px-6 py-4">
                  <span className="text-lg font-semibold text-left">{f.q}</span>
                  <span className="text-sky-700">{open===i? '−' : '+'}</span>
                </button>
                {open===i && <div className="px-6 pb-4 text-slate-600">{f.a}</div>}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 bg-white/70 backdrop-blur border border-slate-200">
            <div className="text-xl font-semibold">Contact us</div>
            <form className="mt-4 grid sm:grid-cols-2 gap-3">
              <input required placeholder="Name" className="bg-white border border-slate-200 rounded-lg px-3 py-2"/>
              <input required type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-lg px-3 py-2"/>
              <textarea required placeholder="How can we help?" className="sm:col-span-2 bg-white border border-slate-200 rounded-lg px-3 py-2 h-28"/>
              <button className="sm:col-span-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 text-white">Send</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
