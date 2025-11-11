import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Cpu, Waves, Globe2, MonitorSmartphone } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Military-grade encryption', desc: 'AES-256 with ChaCha20-Poly1305 and cutting-edge handshakes.' },
  { icon: Lock, title: 'Zero-logs policy', desc: 'Audited architecture that cannot retain activity data.' },
  { icon: Cpu, title: 'WireGuard Core', desc: 'Minimal, fast, and secure protocol for 2025 speeds.' },
  { icon: Waves, title: 'Smart routing', desc: 'Dynamic network paths to avoid congestion and throttling.' },
  { icon: Globe2, title: 'Global coverage', desc: '10Gbps servers across 80+ countries with streaming unlock.' },
  { icon: MonitorSmartphone, title: 'One-tap apps', desc: 'Fluent UI on desktop and mobile with instant connect.' },
]

export default function Features(){
  return (
    <div className="bg-white text-slate-900">
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl sm:text-6xl font-extrabold">Built for Speed, Privacy, and Freedom</motion.h1>
          <p className="mt-4 text-slate-600">Engineered for the Next Internet.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {items.map(({icon:Icon,title,desc},i)=> (
              <motion.div key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-slate-200 hover:bg-white hover:shadow-lg hover:border-sky-300/70 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-slate-200">
              <h3 className="text-2xl font-semibold">Encryption Flow</h3>
              <p className="mt-2 text-slate-600">Modern cryptography with perfect forward secrecy.</p>
              <div className="mt-4 h-56 bg-white rounded-xl border border-slate-200 grid place-items-center text-slate-500">Animated Diagram</div>
            </motion.div>
            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-slate-200">
              <h3 className="text-2xl font-semibold">Privacy Tech</h3>
              <p className="mt-2 text-slate-600">No-logs architecture verified by independent audits.</p>
              <div className="mt-4 h-56 bg-white rounded-xl border border-slate-200 grid place-items-center text-slate-500">Animated Diagram</div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
