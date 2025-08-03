import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preload() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-neutral-950 text-white flex items-center justify-center z-[9999]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-xl font-bold tracking-wide font-[Inter]">Cargando...</div>
            <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse mx-auto" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
