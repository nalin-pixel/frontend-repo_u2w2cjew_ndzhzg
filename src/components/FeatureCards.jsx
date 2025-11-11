import { ShieldCheck, Lock, Globe2, GaugeCircle, Smartphone, Zap, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: ShieldCheck, title: 'AES-256 + Next-Gen Protocols', desc: 'Military-grade encryption with WireGuard and modern ciphers.' },
  { icon: Lock, title: 'Zero-Log Verified', desc: 'Independent audits confirm no activity or connection logs.' },
  { icon: Globe2, title: '80+ Countries', desc: '10Gbps servers engineered for 2025 speeds worldwide.' },
  { icon: Smartphone, title: 'Multi-Device Support', desc: 'Windows, macOS, Android, iOS, and Linux with one-tap connect.' },
  { icon: Zap, title: 'SmartConnect', desc: 'Instant best-server selection for speed and stability.' },
  { icon: GaugeCircle, title: '900+ Mbps Performance', desc: 'Consistent high throughput with ultra-low latency.' },
]

export default function FeatureCards() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#0b0e14] to-black text-white">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Your Digital Shield in a Hyper-Connected World.</h2>
          <p className="mt-4 text-white/70">No Logs. No Borders. No Limits.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/0 via-blue-600/10 to-violet-600/0 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-black shadow-[0_0_25px_rgba(56,189,248,0.45)] group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/70">{desc}</p>
                <div className="mt-4 flex items-center gap-2 text-cyan-300/90">
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
