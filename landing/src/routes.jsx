import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Cursos from './pages/Cursos'
import Recursos from './pages/Recursos'
import Contacto from './pages/Contacto'
import CursoDetalle from './pages/CursoDetalle' // ✅ IMPORTANTE
import Terminos from './pages/Terminos' // al inicio


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/cursos/:id" element={<CursoDetalle />} /> {/* ✅ ESTA LÍNEA */}
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/terminos" element={<Terminos />} />

    </Routes>
  )
}
