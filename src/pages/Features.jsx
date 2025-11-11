import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Cpu, Waves, Globe2, MonitorSmartphone } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Military-Grade Encryption', desc: 'AES-256 with ChaCha20-Poly1305 and cutting-edge handshakes.' },
  { icon: Lock, title: 'Zero-Log by Design', desc: 'Audited architecture that cannot retain activity data.' },
  { icon: Cpu, title: 'WireGuard Core', desc: 'Minimal, fast, and secure protocol for 2025 speeds.' },
  { icon: Waves, title: 'Smart Routing', desc: 'Dynamic network paths to avoid congestion and throttling.' },
  { icon: Globe2, title: 'Global Coverage', desc: '10Gbps servers across 80+ countries with streaming unlock.' },
  { icon: MonitorSmartphone, title: 'One-Tap Apps', desc: 'Fluent UI on desktop and mobile with instant connect.' },
]

export default function Features(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl sm:text-6xl font-extrabold">Built for Speed, Privacy, and Freedom</motion.h1>
          <p className="mt-4 text-white/70">Engineered for the Next Internet.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {items.map(({icon:Icon,title,desc},i)=> (
              <motion.div key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/70">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold">Encryption Flow</h3>
              <p className="mt-2 text-white/70">Modern cryptography with perfect forward secrecy.</p>
              <div className="mt-4 h-56 bg-black/60 rounded-xl border border-white/10 grid place-items-center text-white/60">Animated Diagram</div>
            </motion.div>
            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold">Privacy Tech</h3>
              <p className="mt-2 text-white/70">No-logs architecture verified by independent audits.</p>
              <div className="mt-4 h-56 bg-black/60 rounded-xl border border-white/10 grid place-items-center text-white/60">Animated Diagram</div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
