import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const platforms = [
  { key: 'windows', name: 'Windows' },
  { key: 'mac', name: 'macOS' },
  { key: 'ios', name: 'iOS' },
  { key: 'android', name: 'Android' },
  { key: 'linux', name: 'Linux' },
]

function detectOS(){
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'windows'
  if (/Macintosh|Mac OS X/i.test(ua)) return 'mac'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  if (/Linux/i.test(ua)) return 'linux'
  return 'windows'
}

export default function Download(){
  const [active, setActive] = useState('windows')
  useEffect(()=>{ setActive(detectOS()) }, [])
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Download Cryptora</h1>
          <p className="mt-2 text-white/70">Fast setup. One-tap connect.</p>

          <div className="mt-8 flex gap-2 overflow-x-auto border-b border-white/10">
            {platforms.map(p => (
              <button key={p.key} onClick={()=>setActive(p.key)} className={`px-4 py-2 rounded-t-lg ${active===p.key ? 'bg-white/10 text-white border-x border-t border-white/10' : 'text-white/60 hover:text-white'}`}>{p.name}</button>
            ))}
          </div>

          <div className="rounded-b-2xl p-6 bg-white/5 border border-white/10">
            <div className="text-xl font-semibold">{platforms.find(p=>p.key===active)?.name}</div>
            <p className="mt-2 text-white/70">1) Download • 2) Install • 3) Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600">Download</button>
              <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10">Setup Guide</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
