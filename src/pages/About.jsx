import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2022', text: 'Vision sparks: privacy without compromise.' },
  { year: '2023', text: 'Core research and protocol optimization.' },
  { year: '2024', text: 'Global 10Gbps network rollout.' },
  { year: '2025', text: 'Cryptora 2.0 with cinematic UI and zero-logs audit.' },
]

export default function About(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl sm:text-6xl font-extrabold">We believe privacy is not a privilege — it’s your digital birthright.</motion.h1>
          <p className="mt-4 text-white/70 max-w-3xl">Our mission is simple: empower you with speed, privacy, and freedom. We build technology that fades into the background and protects what matters.</p>

          <div className="mt-16 grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              {timeline.map((t,i)=> (
                <div key={t.year} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                  <div className="text-cyan-300">{t.year}</div>
                  <div className="text-xl font-semibold mt-1">{t.text}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="text-2xl font-semibold">Our Vision</div>
              <p className="mt-2 text-white/70">No Logs. No Borders. No Limits.</p>
              <p className="mt-4 text-white/70">We design for resilience and transparency. The internet deserves privacy that is effortless and uncompromising.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
