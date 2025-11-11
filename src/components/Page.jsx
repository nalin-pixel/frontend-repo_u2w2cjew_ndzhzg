import { motion } from 'framer-motion'

export default function Page({ children }){
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 pb-20"
    >
      {children}
    </motion.main>
  )
}
