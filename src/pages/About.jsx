import { motion } from 'framer-motion'
import Page from '../components/Page'

const timeline = [
  { year: '2022', text: 'Vision sparks: privacy without compromise.' },
  { year: '2023', text: 'Core research and protocol optimization.' },
  { year: '2024', text: 'Global 10Gbps network rollout.' },
  { year: '2025', text: 'Cryptora 2.0 with cinematic UI and zero-logs audit.' },
]

export default function About(){
  return (
    <div className="bg-white text-slate-900">
      <Page>
        <section className="max-w-7xl mx-auto px-6">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl sm:text-6xl font-extrabold">We believe privacy is not a privilege — it’s your digital birthright.</motion.h1>
          <p className="mt-4 text-slate-600 max-w-3xl">Our mission is simple: empower you with speed, privacy, and freedom. We build technology that fades into the background and protects what matters.</p>

          <div className="mt-16 grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              {timeline.map((t)=> (
                <div key={t.year} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-slate-200">
                  <div className="text-sky-700">{t.year}</div>
                  <div className="text-xl font-semibold mt-1">{t.text}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-slate-200">
              <div className="text-2xl font-semibold">Our Vision</div>
              <p className="mt-2 text-slate-600">No Logs. No Borders. No Limits.</p>
              <p className="mt-4 text-slate-600">We design for resilience and transparency. The internet deserves privacy that is effortless and uncompromising.</p>
            </div>
          </div>
        </section>
      </Page>
    </div>
  )
}
