import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#f9f9fb]">
      {/* Light animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(1000px_600px_at_90%_0%,rgba(139,92,246,0.14),transparent_55%)]" />
      </div>

      {/* Spline scene with bright finishes */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Frosted glass overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/70 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900"
          >
            Privacy Reinvented. Speed Unleashed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600"
          >
            Experience 2025-level security with Cryptora VPN — built for privacy, speed, and total online freedom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_14px_40px_rgba(59,130,246,0.45)] transition-shadow">
              Start Secure Browsing
            </a>
            <a href="#download" className="px-6 py-3 rounded-xl border border-sky-200 text-cyan-700 hover:bg-cyan-50 transition-colors">
              Download App
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-sm text-slate-500"
          >
            30-Day Money-Back Guarantee • Anonymous Crypto Payments • Trusted by 250K+ Users
          </motion.p>
        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
