import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SuccessModal from '../components/SuccessModal'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto font-[Inter] text-white">
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full -z-10" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Contacto
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col gap-6 md:col-span-2"
        >
          <input
            type="text"
            placeholder="Nombre completo"
            required
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <textarea
            placeholder="Tu mensaje"
            rows={5}
            required
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />

          {/* Checkbox personalizado */}
          <label className="flex items-start gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              required
              className="accent-cyan-500 w-4 h-4 mt-1"
            />
            Acepto los{' '}
            <Link
              to="/terminos"
              className="text-cyan-400 underline hover:text-cyan-300 transition"
            >
              términos de privacidad
            </Link>
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 py-2 rounded-md font-semibold text-black hover:opacity-90 transition"
          >
            Enviar mensaje
          </button>
        </motion.form>

        {/* Columna derecha: imagen + info */}
        <div className="flex flex-col gap-6 h-full justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-md flex items-center justify-center"
          >
            <img
              src="/images/persona.png"
              alt="Persona"
              className="w-full h-auto rounded-xl max-w-sm object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md text-sm space-y-3"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <EnvelopeIcon className="w-5 h-5 text-cyan-400" />
              <span>rafael@utcancun.edu.mx</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <PhoneIcon className="w-5 h-5 text-cyan-400" />
              <span>+52 998 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPinIcon className="w-5 h-5 text-cyan-400" />
              <span>Cancún, Quintana Roo</span>
            </div>
          </motion.div>
        </div>
      </div>

      {enviado && <SuccessModal />}
    </main>
  )
}
