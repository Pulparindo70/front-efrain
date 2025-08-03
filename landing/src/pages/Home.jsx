import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import {
  AcademicCapIcon,
  CloudArrowDownIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
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

const testimonios = [
  {
    nombre: 'Ana Pérez',
    comentario: 'Gracias a esta plataforma aprendí lo básico de programación en pocas semanas.',
  },
  {
    nombre: 'Luis Martínez',
    comentario: 'Ideal para autodidactas, el contenido es claro y directo.',
  },
  {
    nombre: 'Carmen Ruiz',
    comentario: 'El profesor Rafael explica todo de forma sencilla. Recomiendo mucho esta web.',
  },
]



const cursos = [
  'Python desde cero', 'HTML & CSS', 'Git básico', 'JavaScript intermedio'
]




const tecnologias = [
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaDatabase,
]

export default function Home() {
  return (
    <main className="relative pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto text-white font-[Inter]">
      {/* Difuminado decorativo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full -z-10" />


 {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Aprende a programar <span className="text-cyan-400">desde cero</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Plataforma educativa moderna creada por el profesor Rafael. Gratuita, clara y confiable.
        </p>
        <a
          href="/cursos"
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Explorar cursos
        </a>
        <img
          src="/images/persona.png"
          alt="Persona"
          className="mx-auto mt-10 max-w-xs rounded-xl"
        />
      </motion.section>



      {/* Características */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            titulo: 'Contenido gratuito',
            descripcion: 'Accede a guías, ejercicios y material descargable sin costo alguno.',
            icono: CloudArrowDownIcon,
          },
          {
            titulo: 'Fácil de entender',
            descripcion: 'Explicaciones claras pensadas para quienes empiezan desde cero.',
            icono: LightBulbIcon,
          },
          {
            titulo: 'Material autodidacta',
            descripcion: 'Aprende a tu ritmo, sin presión y desde cualquier lugar.',
            icono: AcademicCapIcon,
          },
          {
            titulo: 'Proyectos reales',
            descripcion: 'Aplica tus conocimientos en pequeños retos prácticos.',
            icono: RocketLaunchIcon,
          },
          {
            titulo: 'Sin anuncios ni registros',
            descripcion: 'Acceso abierto, directo y sin distracciones.',
            icono: CloudArrowDownIcon,
          },
          {
            titulo: 'Hecho por un docente',
            descripcion: 'Creado por el profesor Rafael con más de 10 años de experiencia.',
            icono: AcademicCapIcon,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-cyan-400/20 transition"
          >
            <item.icono className="h-6 w-6 text-cyan-400 mb-3" />
            <h3 className="text-lg font-semibold mb-1">{item.titulo}</h3>
            <p className="text-gray-400 text-sm">{item.descripcion}</p>
          </motion.div>
        ))}
      </motion.section>

 {/* Tecnologías */}
      <section className="mb-16 my-12">
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



       {/* Testimonios */}
      <section className="my-20">
        <h2 className="text-center text-xl font-semibold text-cyan-400 mb-6">Lo que opinan los estudiantes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 shadow">
              <p className="text-sm text-gray-300 mb-3">"{t.comentario}"</p>
              <p className="text-cyan-400 font-semibold text-sm">- {t.nombre}</p>
            </div>
          ))}
        </div>
      </section>

     


      {/* CTA final */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-28 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="text-gray-400 mb-6">Explora cursos y da tu primer paso en el mundo del desarrollo.</p>
        <Link
          to="/cursos"
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Ver cursos disponibles
        </Link>
      </motion.section>
    </main>
  )
}
