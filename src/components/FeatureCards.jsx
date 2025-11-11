import { ShieldCheck, Lock, Globe2, GaugeCircle, Smartphone, Zap, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: ShieldCheck, title: 'Military-grade encryption', desc: 'AES-256, ChaCha20-Poly1305, and modern handshakes.' },
  { icon: Lock, title: 'Zero-logs policy', desc: 'Independent audits confirm no activity or connection logs.' },
  { icon: Globe2, title: 'Global ultra-fast servers', desc: '10Gbps nodes engineered for 2025 speeds.' },
  { icon: Smartphone, title: 'Multi-device access', desc: 'Windows, macOS, Android, iOS, and Linux.' },
  { icon: Zap, title: 'SmartConnect', desc: 'Instant best-server selection for speed and stability.' },
  { icon: GaugeCircle, title: '900+ Mbps performance', desc: 'Consistent high throughput and low latency.' },
]

export default function FeatureCards() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#f7f8fc] to-white text-slate-900">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Lightweight. Powerful. Effortless.</h2>
          <p className="mt-4 text-slate-600">Privacy without compromise.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 hover:border-sky-300/70 shadow-[0_10px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_14px_40px_rgba(2,6,23,0.09)] transition-all overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-purple-600/0 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-slate-600">{desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sky-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm">Audited. Optimized. Trusted.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
