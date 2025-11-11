import { useState, useEffect } from 'react'

const reviews = [
  { name: 'Ava', text: 'Blazing fast and truly private. Switched from another top VPN and never looked back.' },
  { name: 'Noah', text: 'Streaming is smooth, latency is low, and the apps feel premium across devices.' },
  { name: 'Liam', text: 'Finally a VPN that treats privacy seriously. Zero logs and it shows.' },
  { name: 'Sophia', text: 'Installation was effortless. SmartConnect gets me online in one tap.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-5xl font-bold">Trusted by 250K+ Users</h2>
          <div className="flex items-center gap-3 text-slate-500">
            <img alt="Trustpilot" className="h-6" src="https://images.unsplash.com/photo-1760442903597-6aeb6f23212f?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img alt="G2" className="h-6" src="https://images.unsplash.com/photo-1671814789275-d6c962ab649f?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${i===index ? 'bg-white shadow-lg border-sky-300/70' : 'bg-white/70 backdrop-blur border-slate-200'} transition-colors`}>
              <div className="text-lg">“{r.text}”</div>
              <div className="mt-4 text-slate-500">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
