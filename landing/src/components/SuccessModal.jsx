import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-sm text-center border border-white/10"
      >
        <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h2>
        <p className="text-gray-400 mb-4">Gracias por contactarnos. Te responderemos pronto.</p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 rounded-full text-black font-semibold hover:opacity-90 transition"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  )
}
