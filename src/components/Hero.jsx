import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            Privacy Reinvented. Speed Unleashed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
          >
            Cryptora VPN is the next evolution of digital freedom — powered by military-grade encryption, zero-log technology, and global servers engineered for 2025 speeds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-shadow">
              Start Secure Browsing
            </a>
            <a href="#download" className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors">
              Download App
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-sm text-white/70"
          >
            30-Day Money-Back Guarantee • Anonymous Crypto Payments • Trusted by 250K+ Users
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
