import { motion } from 'framer-motion'

export default function Terminos() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-white font-[Inter]">
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full -z-10" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Términos de Privacidad
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 leading-relaxed space-y-4 text-sm"
      >
        <p>
          Este sitio recopila información proporcionada voluntariamente a través del
          formulario de contacto. Los datos son utilizados únicamente con fines de
          respuesta y no se almacenan ni comparten con terceros.
        </p>
        <p>
          No hacemos seguimiento, análisis ni marketing basado en tu información.
          Este sitio no requiere registro ni cuenta.
        </p>
        <p>
          Al enviar el formulario, aceptas que podamos ponernos en contacto contigo
          para responder tu mensaje.
        </p>
        <p>
          Si tienes dudas sobre nuestra política de privacidad, puedes contactarnos
          directamente.
        </p>
      </motion.div>
    </main>
  )
}
