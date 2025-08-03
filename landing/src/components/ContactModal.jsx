/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react'

import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import SuccessModal from './SuccessModal'
import { useNavigate } from 'react-router-dom'

const RECAPTCHA_SITE_KEY = '6Lf2Mo8rAAAAAFpMeCoFp2Y05-bdw-GXNRo4qaIw'

export default function ContactModal({ onClose }) {
  const [captchaValido, setCaptchaValido] = useState(false)
  const recaptchaRef = useRef()
  const [enviado, setEnviado] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
    terminos: false,
  })

  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!formData.terminos) {
      alert('Debes aceptar los términos de privacidad.')
      return
    }

    const captchaToken = recaptchaRef.current.getValue()
    if (!captchaToken) {
      alert('Por favor completa el reCAPTCHA.')
      return
    }

    const payload = {
      nombre: formData.nombre,
      correo: formData.correo,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
      captchaToken,
    }

    try {
const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (res.ok) {
        setEnviado(true)
      } else {
        alert(data.error || 'Error al enviar el formulario.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error en la conexión.')
    }
  }

  if (enviado) return <SuccessModal onClose={onClose} />

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-4">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
            value={formData.correo}
            onChange={handleChange}
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows={4}
            required
            value={formData.mensaje}
            onChange={handleChange}
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />

          <div className="text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChange}
              />
              Acepto los{' '}
              <span
                className="text-cyan-400 cursor-pointer underline"
                onClick={() => navigate('/terminos')}
              >
                Términos de privacidad
              </span>
            </label>
          </div>

          <div className="mx-auto">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              theme="dark"
              onChange={() => setCaptchaValido(true)}
              onExpired={() => setCaptchaValido(false)}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 py-2 rounded-md font-semibold text-black hover:opacity-90 transition"
          >
            Enviar mensaje
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-400 hover:underline mt-2 text-center"
          >
            Cancelar
          </button>
        </form>
      </motion.div>
    </div>
  )
}
