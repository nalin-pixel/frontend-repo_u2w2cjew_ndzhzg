export default function FinalCTA(){
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-600/10">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.18),transparent_40%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-10 text-center shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Take Back Your Privacy. Get Cryptora Today.</h3>
          <p className="mt-3 text-slate-600">Engineered for the Next Internet.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_40px_rgba(59,130,246,0.45)] transition-shadow">Get Cryptora</a>
            <a href="#download" className="px-6 py-3 rounded-xl border border-sky-200 text-cyan-700 hover:bg-cyan-50 transition-colors">Download App</a>
          </div>
        </div>
      </div>
    </section>
  )
}
