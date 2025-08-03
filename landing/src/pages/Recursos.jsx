import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpenIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline'

const categorias = [
  { nombre: 'Todos', icono: ClipboardDocumentListIcon },
  { nombre: 'Libros', icono: BookOpenIcon },
  { nombre: 'Videos', icono: VideoCameraIcon },
  { nombre: 'Guías', icono: DocumentTextIcon },
  { nombre: 'Plantillas', icono: ClipboardDocumentListIcon },
]

const recursos = {
  Libros: [
    {
      nombre: 'Aprende Python',
      descripcion: 'Libro PDF completo para empezar desde cero.',
      enlace: '#',
      imagen: '/recursos/python.png',
    },
    {
      nombre: 'Bases de datos relacionales',
      descripcion: 'Todo sobre modelado y relaciones SQL.',
      enlace: '#',
      imagen: '/recursos/sql.png',
    },
  ],
  Videos: [
    {
      nombre: 'Curso Intro a HTML',
      descripcion: 'Video explicativo paso a paso para principiantes.',
      enlace: '#',
      imagen: '/recursos/htmlcss.png',
    },
    {
      nombre: '¿Qué es GitHub?',
      descripcion: 'Video corto para entender GitHub y sus usos.',
      enlace: '#',
      imagen: '/recursos/github.png',
    },
  ],
  Guías: [
    {
      nombre: 'Guía de lógica de programación',
      descripcion: 'Estructuras condicionales, bucles y más.',
      enlace: '#',
      imagen: '/recursos/logica.png',
    },
    {
      nombre: 'Cheat Sheet de HTML y CSS',
      descripcion: 'Acceso rápido a etiquetas y estilos.',
      enlace: '#',
      imagen: '/recursos/htmlcss.png',
    },
  ],
  Plantillas: [
    {
      nombre: 'Plantilla SQL Relacional',
      descripcion: 'Modelo para practicar relaciones entre tablas.',
      enlace: '#',
      imagen: '/recursos/sql.png',
    },
    {
      nombre: 'Estructura HTML5',
      descripcion: 'Archivos base para comenzar cualquier proyecto.',
      enlace: '#',
      imagen: '/recursos/htmlcss.png',
    },
  ],
}

export default function Recursos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const recursosFiltrados =
    categoriaActiva === 'Todos'
      ? Object.values(recursos).flat()
      : recursos[categoriaActiva] || []

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto text-white font-[Inter]">
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full -z-10" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-2"
      >
        Recursos gratuitos
      </motion.h1>

      <p className="text-center text-gray-400 mb-8">Categorías de recursos descargables</p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categorias.map(({ nombre, icono: Icono }) => (
          <button
            key={nombre}
            onClick={() => setCategoriaActiva(nombre)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition ${
              categoriaActiva === nombre
                ? 'bg-cyan-500 text-black font-semibold'
                : 'border-white/20 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Icono className="w-4 h-4" />
            {nombre}
          </button>
        ))}
      </div>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {recursosFiltrados.map((r, index) => (
            <motion.a
              key={r.nombre + index}
              href={r.enlace}
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/5 p-4 rounded-xl border border-white/10 hover:shadow-cyan-400/20 shadow-lg transition backdrop-blur cursor-pointer group flex flex-col"
            >
              <img
                src={r.imagen}
                alt={r.nombre}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white text-md font-semibold">{r.nombre}</h3>
                <ArrowDownTrayIcon className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition" />
              </div>
              <p className="text-gray-400 text-sm">{r.descripcion}</p>
            </motion.a>
          ))}
        </AnimatePresence>
      </section>
    </main>
  )
}
