import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursoDetalle() {
  const { id } = useParams()
  const [curso, setCurso] = useState(null)
  const [otrosCursos, setOtrosCursos] = useState([])

  useEffect(() => {
    fetch('/cursos.json')
      .then(res => res.json())
      .then(data => {
        const seleccionado = data.find(c => c.id === id)
        const recomendaciones = data.filter(c =>
          seleccionado?.recomendaciones?.includes(c.id)
        )
        setCurso(seleccionado)
        setOtrosCursos(recomendaciones)
      })
  }, [id])

  if (!curso) {
    return (
      <main className="pt-32 text-center text-white">
        <h1 className="text-2xl font-bold">Curso no encontrado</h1>
        <Link to="/cursos" className="text-cyan-400 hover:underline">
          ← Volver a cursos
        </Link>
      </main>
    )
  }

  return (
    <main className="text-white font-[Inter]">
      {/* Banner del curso */}
      <section
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${curso.imagen})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end p-6 md:p-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-5xl font-bold mb-2"
            >
              {curso.titulo}
            </motion.h1>
            <p className="text-gray-300">{curso.descripcion}</p>
          </div>
        </div>
      </section>

      {/* Contenido básico */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Contenido básico</h2>
        {curso.contenido.map((item, i) => (
          <div key={i} className="mb-8 flex flex-col md:flex-row gap-6">
            <img
              src={item.imagen}
              alt={curso.titulo}
              className="rounded-xl max-w-md w-full h-52 object-cover"
            />
            <p className="text-white/90 text-base">{item.texto}</p>
          </div>
        ))}
      </section>

      {/* Recomendaciones */}
      {otrosCursos.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-xl font-semibold mb-4">También te puede interesar</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {otrosCursos.map(curso => (
              <Link
                to={`/cursos/${curso.id}`}
                key={curso.id}
                className="bg-white/5 p-4 rounded-xl hover:scale-105 transition border border-white/10"
              >
                <img
                  src={curso.imagen}
                  alt={curso.titulo}
                  className="rounded-md mb-3 h-36 w-full object-cover"
                />
                <h3 className="text-white font-semibold">{curso.titulo}</h3>
                <p className="text-gray-400 text-sm">{curso.descripcion}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
