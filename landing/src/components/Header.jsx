import { useState } from 'react'
import ContactModal from './ContactModal'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Recursos gratuitos', href: '/recursos' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-10">
        <div className="bg-white/10 backdrop-blur rounded-full border border-white/10 shadow-md flex justify-between items-center py-3 px-5 md:px-8 max-w-6xl mx-auto">
          <h1 className="font-bold text-white font-[Inter] text-lg">Daniapp</h1>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full px-5 py-2 hover:opacity-90 transition"
            >
              Contáctanos
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/10 backdrop-blur rounded-xl border border-white/10 shadow-md px-6 py-4 max-w-6xl mx-auto text-white flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false)
                setShowModal(true)
              }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full px-5 py-2 hover:opacity-90 transition"
            >
              Contáctanos
            </button>
          </div>
        )}
      </header>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  )
}
