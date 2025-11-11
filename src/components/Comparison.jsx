import { useState } from 'react'
import { motion } from 'framer-motion'

const competitors = [
  { name: 'Cryptora', speed: 95, privacy: 98, transparency: 96 },
  { name: 'Nord', speed: 92, privacy: 94, transparency: 92 },
  { name: 'Proton', speed: 90, privacy: 97, transparency: 95 },
  { name: 'Express', speed: 91, privacy: 93, transparency: 90 },
]

export default function Comparison() {
  const [index, setIndex] = useState(0)
  const current = competitors[index]

  return (
    <section className="relative py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold">Why Cryptora Leads</h2>
            <p className="mt-3 text-slate-600">Compare speed, privacy, and transparency.</p>
          </div>
          <input
            type="range"
            min={0}
            max={competitors.length - 1}
            value={index}
            onChange={(e) => setIndex(parseInt(e.target.value))}
            className="w-full md:w-80 accent-sky-500"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {competitors.map((c, i) => (
            <motion.div key={c.name} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className={`rounded-2xl p-6 border ${i===index ? 'bg-white shadow-lg border-sky-300/70' : 'bg-white/60 backdrop-blur border-slate-200'} transition-colors`}>
              <div className="text-sm text-slate-500">Provider</div>
              <div className="text-2xl font-semibold mt-1">{c.name}</div>
              <div className="mt-4 space-y-2">
                <Bar label="Speed" value={c.speed} active={i===index} />
                <Bar label="Privacy" value={c.privacy} active={i===index} />
                <Bar label="Transparency" value={c.transparency} active={i===index} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bar({ label, value, active }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-900">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div className={`h-full rounded-full ${active ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600' : 'bg-slate-300'}`} style={{ width: `${value}%`}} />
      </div>
    </div>
  )
}
