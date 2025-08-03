import {
  EnvelopeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-white/10 bg-neutral-950 text-gray-300 font-[Inter]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Descripción */}
        <div className="col-span-2">
          <h2 className="text-white font-bold text-xl mb-2">Raf.app</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Plataforma educativa gratuita creada por el profesor Rafael. Aprende desde cero con material confiable, claro y accesible.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-cyan-400 transition">
              <EnvelopeIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <AcademicCapIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <BookOpenIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <UserGroupIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Contenido</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/cursos" className="hover:text-cyan-400 transition">Cursos</a></li>
            <li><a href="/recursos" className="hover:text-cyan-400 transition">Recursos</a></li>
            <li><a href="/nosotros" className="hover:text-cyan-400 transition">Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="text-xs text-gray-500 border-t border-white/10 text-center py-4 px-6">
        © {new Date().getFullYear()} Raf.app. Todos los derechos reservados.
      </div>
    </footer>
  )
}
