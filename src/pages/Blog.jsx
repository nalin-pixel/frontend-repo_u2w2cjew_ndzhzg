import { useState } from 'react'
import Page from '../components/Page'

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
    <div className="bg-white text-slate-900">
      <Page>
        <section className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Insights</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {['All', ...categories].map(c => (
              <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full border ${filter===c ? 'bg-white shadow border-sky-300/70' : 'border-slate-200 text-slate-600 hover:text-slate-900'}`}>{c}</button>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map(p => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white/70 backdrop-blur hover:bg-white transition-colors shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform"/>
                <div className="p-6">
                  <div className="text-sm text-sky-700">{p.category}</div>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <button className="mt-4 text-sky-700">Read →</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Page>
    </div>
  )
}
