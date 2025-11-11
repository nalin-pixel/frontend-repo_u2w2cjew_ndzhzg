import { useEffect, useState } from 'react'
import { Gauge } from 'lucide-react'

export default function SpeedTest() {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let t = 0
    const id = setInterval(() => {
      t += 0.05
      const simulated = Math.floor(900 + Math.sin(t)*50 + Math.random()*20)
      setValue(simulated)
    }, 100)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-gradient-to-b from-black via-[#0a0d12] to-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold">900+ Mbps Performance</h2>
          <p className="mt-4 text-white/70">Speed and Security — Perfectly Aligned.</p>
          <ul className="mt-6 space-y-2 text-white/80 list-disc list-inside">
            <li>10Gbps backbone with smart routing</li>
            <li>WireGuard and next-gen ciphers</li>
            <li>Optimized for streaming and gaming</li>
          </ul>
        </div>
        <div className="relative rounded-2xl p-8 bg-white/5 border border-white/10">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-blue-600/10 to-violet-600/0 blur-2xl" aria-hidden/>
          <div className="relative">
            <div className="flex items-center gap-3">
              <Gauge className="w-6 h-6 text-cyan-300" />
              <span className="text-white/80">Real-time Throughput</span>
            </div>
            <div className="mt-6 h-48 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center">
              <div className="text-6xl font-bold tracking-tight">
                <span className="text-cyan-300">{value}</span>
                <span className="text-white/70 text-2xl ml-2">Mbps</span>
              </div>
            </div>
            <div className="mt-6 w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 animate-pulse" style={{ width: `${Math.min(100, (value/10))}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
