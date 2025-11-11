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
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Download Cryptora</h1>
          <p className="mt-2 text-slate-600">Fast setup. One-tap connect.</p>

          <div className="mt-8 flex gap-2 overflow-x-auto border-b border-slate-200">
            {platforms.map(p => (
              <button key={p.key} onClick={()=>setActive(p.key)} className={`px-4 py-2 rounded-t-lg ${active===p.key ? 'bg-white text-slate-900 border-x border-t border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>{p.name}</button>
            ))}
          </div>

          <div className="rounded-b-2xl p-6 bg-white/70 backdrop-blur border border-slate-200">
            <div className="text-xl font-semibold">{platforms.find(p=>p.key===active)?.name}</div>
            <p className="mt-2 text-slate-600">1) Download • 2) Install • 3) Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 text-white">Download</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-white">Setup Guide</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
