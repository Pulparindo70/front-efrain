import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import {
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaDatabase,
} from 'react-icons/fa'

const experiencias = [
  {
    titulo: 'Profesor Universitario',
    descripcion: 'Más de 10 años enseñando programación y bases de datos.',
    icono: AcademicCapIcon,
  },
  {
    titulo: 'Desarrollador Freelance',
    descripcion: 'Proyectos web para pymes, landing pages y CRUDs.',
    icono: BriefcaseIcon,
  },
  {
    titulo: 'Mentor de proyectos finales',
    descripcion: 'Asesoría a más de 200 estudiantes en sus proyectos.',
    icono: CheckBadgeIcon,
  },
]

const tecnologias = [
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaDatabase,
]

export default function Nosotros() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto text-white font-[Inter]">
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full -z-10" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Sobre el profesor Rafael
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 text-md text-center max-w-3xl mx-auto mb-10"
      >
        Rafael es un apasionado docente con más de 10 años de experiencia
        enseñando fundamentos de programación, bases de datos y desarrollo
        web a jóvenes y adultos. Apoya el aprendizaje autodidacta con recursos
        claros, accesibles y gratuitos.
      </motion.p>

      {/* Experiencia profesional */}


            <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Experiencia profesional</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiencias.map((exp, index) => {
            const Icono = exp.icono
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md backdrop-blur"
              >
                <Icono className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white text-lg font-semibold">{exp.titulo}</h3>
                <p className="text-gray-400 text-sm">{exp.descripcion}</p>
              </motion.div>
            )
          })}
        </div>
      </section>
      {/* Tecnologías */}
      <section className="mb-16">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop
        >
          {tecnologias.map((TechIcon, i) => (
            <SwiperSlide key={i}>
              <div className="p-5 rounded-xl flex justify-center items-center hover:shadow-cyan-400/30 shadow-md transition">
                <TechIcon className="text-cyan-400 w-8 h-8" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* Imagen animada */}
      <section className="mb-16 text-center">
        <motion.img
  src="/images/persona.png"
          alt="Ilustración 3D de profesor"
          className="mx-auto w-60 md:w-80 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Números clave */}
      <section className="grid sm:grid-cols-3 gap-6 text-center mt-10">
        <div>
          <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
          <p className="text-gray-400">Años de experiencia</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-cyan-400">200+</h3>
          <p className="text-gray-400">Estudiantes asesorados</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-cyan-400">30+</h3>
          <p className="text-gray-400">Proyectos guiados</p>
        </div>
      </section>
    </main>
  )
}
