import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CodeBracketIcon,
  ServerStackIcon,
  GlobeAltIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'

const categorias = [
  { nombre: 'Todos', icono: Squares2X2Icon },
  { nombre: 'Programación', icono: CodeBracketIcon },
  { nombre: 'Bases de Datos', icono: ServerStackIcon },
  { nombre: 'Desarrollo Web', icono: GlobeAltIcon },
  { nombre: 'Control de Versiones', icono: Squares2X2Icon },
]

const cursos = {
  'Programación': [
    { id: 'python-desde-cero', titulo: 'Python desde cero', descripcion: 'Aprende sintaxis y lógica básica con Python.' },
    { id: 'java-basico', titulo: 'Java básico', descripcion: 'Crea programas con orientación a objetos desde cero.' },
    { id: 'logica-de-programacion', titulo: 'Lógica de programación', descripcion: 'Domina condiciones, ciclos y estructuras.' },
    { id: 'estructuras-de-datos', titulo: 'Estructuras de Datos', descripcion: 'Listas, pilas, colas y árboles explicados fácil.' },
    { id: 'algoritmos-clasicos', titulo: 'Algoritmos clásicos', descripcion: 'Ordenamiento, búsqueda y recursividad.' },
    { id: 'c-para-principiantes', titulo: 'C para principiantes', descripcion: 'Explora cómo funcionan los lenguajes compilados.' },
  ],
  'Bases de Datos': [
    { id: 'mysql-basico', titulo: 'MySQL básico', descripcion: 'Crea, consulta y organiza tus bases de datos.' },
    { id: 'modelado-relacional', titulo: 'Modelado relacional', descripcion: 'Diseña bases de datos bien estructuradas.' },
    { id: 'sqlite-movil', titulo: 'SQLite en proyectos móviles', descripcion: 'Base de datos ligera para apps.' },
    { id: 'normalizacion', titulo: 'Normalización de datos', descripcion: 'Evita errores y redundancias con buenas prácticas.' },
    { id: 'postgresql-avanzado', titulo: 'PostgreSQL avanzado', descripcion: 'Consultas complejas, triggers y funciones.' },
  ],
  'Desarrollo Web': [
    { id: 'html-css', titulo: 'HTML & CSS', descripcion: 'Crea páginas web responsivas desde cero.' },
    { id: 'react-moderno', titulo: 'React moderno', descripcion: 'Construye interfaces dinámicas con React.' },
    { id: 'js-intermedio', titulo: 'JavaScript Intermedio', descripcion: 'Manipula el DOM y crea experiencias interactivas.' },
    { id: 'tailwind', titulo: 'Tailwind CSS', descripcion: 'Estiliza sin escribir CSS puro.' },
    { id: 'vite-react', titulo: 'Vite + React', descripcion: 'Entornos rápidos y modernos.' },
    { id: 'firebase-deploy', titulo: 'Deploy a Firebase', descripcion: 'Publica tu web sin complicaciones.' },
  ],
  'Control de Versiones': [
    { id: 'git-basico', titulo: 'Git básico', descripcion: 'Versiona tu código localmente con confianza.' },
    { id: 'github-colaborativo', titulo: 'GitHub colaborativo', descripcion: 'Trabaja en equipo con ramas y pull requests.' },
    { id: 'markdown', titulo: 'Markdown profesional', descripcion: 'Documenta tus proyectos correctamente.' },
    { id: 'git-terminal', titulo: 'Git desde terminal', descripcion: 'Domina los comandos más importantes.' },
    { id: 'github-pages', titulo: 'GitHub Pages', descripcion: 'Publica portafolios estáticos gratuitos.' },
  ],
}

export default function Cursos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const cursosFiltrados =
    categoriaActiva === 'Todos'
      ? Object.values(cursos).flat()
      : cursos[categoriaActiva] || []

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
        Cursos
      </motion.h1>

      <p className="text-center text-gray-400 mb-8">Categorías</p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categorias.map(({ nombre }) => (
          <button
            key={nombre}
            onClick={() => setCategoriaActiva(nombre)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              categoriaActiva === nombre
                ? 'bg-cyan-500 text-black font-semibold'
                : 'border-white/20 text-gray-300 hover:bg-white/10'
            }`}
          >
            {nombre}
          </button>
        ))}
      </div>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {cursosFiltrados.map((curso, index) => {
            const Icono =
              categorias.find(cat => cat.nombre === categoriaActiva)?.icono ||
              Squares2X2Icon

            return (
              <motion.div
                key={curso.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:shadow-cyan-400/20 shadow-lg transition backdrop-blur"
              >
                <Icono className="w-6 h-6 text-cyan-400 mb-3" />
                <Link
                  to={`/cursos/${curso.id}`}
                  className="text-white text-lg font-semibold mb-1 hover:underline block"
                >
                  {curso.titulo}
                </Link>
                <p className="text-gray-400 text-sm">{curso.descripcion}</p>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </section>
    </main>
  )
}
