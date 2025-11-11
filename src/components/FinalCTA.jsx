export default function FinalCTA(){
  return (
    <section className="relative py-20 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-violet-600/20">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.25),transparent_40%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_50px_rgba(99,102,241,0.25)]">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Take Back Your Privacy. Get Cryptora Today.</h3>
          <p className="mt-3 text-white/70">Engineered for the Next Internet.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-shadow">Get Cryptora</a>
            <a href="#download" className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Download App</a>
          </div>
        </div>
      </div>
    </section>
  )
}
