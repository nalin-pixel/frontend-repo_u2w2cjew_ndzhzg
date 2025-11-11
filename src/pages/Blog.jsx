import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const categories = ['Security','Privacy','Tech','Guides']
const posts = Array.from({length:8}).map((_,i)=> ({
  id: i+1,
  title: `The State of Privacy ${2020+i}`,
  category: categories[i%categories.length],
  image: `https://picsum.photos/seed/cryptora${i}/800/500`,
}))

export default function Blog(){
  const [filter, setFilter] = useState('All')
  const visible = posts.filter(p => filter==='All' || p.category===filter)

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Insights</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {['All', ...categories].map(c => (
              <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full border ${filter===c ? 'bg-white/10 border-cyan-400/40' : 'border-white/10 text-white/70 hover:text-white'}`}>{c}</button>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map(p => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform"/>
                <div className="p-6">
                  <div className="text-sm text-cyan-300">{p.category}</div>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <button className="mt-4 text-cyan-300">Read →</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
