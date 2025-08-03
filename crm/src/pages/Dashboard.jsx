import { useEffect, useState } from "react";
import API from "../api";
import { cerrarSesion } from "../auth";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const ESTADOS = ["nuevo", "contactado", "descartado"];
const LEADS_POR_PAGINA = 5;

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPaginas = Math.ceil(leads.length / LEADS_POR_PAGINA);
  const inicio = (pagina - 1) * LEADS_POR_PAGINA;
  const fin = inicio + LEADS_POR_PAGINA;
  const leadsPaginados = leads.slice(inicio, fin);

  useEffect(() => {
    const obtenerLeads = async () => {
      try {
        setLoading(true);
        const res = await API.get("/leads");
        setLeads(res.data);
      } catch (err) {
        console.error("Error al obtener leads:", err);
      } finally {
        setLoading(false);
      }
    };
    obtenerLeads();
  }, []);

  const cambiarEstado = async (id, nuevoEstado) => {
    try {
      await API.patch(`/leads/${id}`, { estado: nuevoEstado });
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id ? { ...lead, estado: nuevoEstado } : lead
        )
      );
    } catch (err) {
      console.error("Error al cambiar estado:", err);
    }
  };

  const irAPagina = (num) => {
    if (num >= 1 && num <= totalPaginas) setPagina(num);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#0f172a] text-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur border-b border-white/20 shadow-sm">
        <h1 className="text-xl font-semibold">Mini CRM</h1>
        <button
          onClick={() => {
            cerrarSesion();
            window.location.href = "/";
          }}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm"
        >
          <ArrowRightOnRectangleIcon className="w-4 h-4" />
          Cerrar sesión
        </button>
      </nav>

      <main className="p-6 flex justify-center">
        <div className="w-full max-w-5xl bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-lg p-4">
          <h2 className="text-xl font-bold mb-4 px-2">Leads recibidos</h2>

          {loading ? (
            <p className="text-center text-white/60 py-10">Cargando leads...</p>
          ) : (
            <>
              <div className="overflow-auto rounded-md">
                <table className="w-full text-sm text-left table-auto border-separate border-spacing-y-2">
                  <thead className="text-white/70 bg-white/5">
                    <tr>
                      <th className="px-4 py-2">Nombre</th>
                      <th className="px-4 py-2">Correo</th>
                      <th className="px-4 py-2">Teléfono</th>
                      <th className="px-4 py-2">Mensaje</th>
                      <th className="px-4 py-2">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsPaginados.map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-white/5 rounded-lg transition"
                      >
                        <td className="px-4 py-2">{lead.nombre}</td>
                        <td className="px-4 py-2">{lead.correo}</td>
                        <td className="px-4 py-2">{lead.telefono}</td>
                        <td className="px-4 py-2">{lead.mensaje}</td>
                        <td className="px-4 py-2">
                          <select
                            className="bg-white/5 text-white border border-white/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors duration-200"
                            value={lead.estado}
                            onChange={(e) =>
                              cambiarEstado(lead.id, e.target.value)
                            }
                          >
                            {ESTADOS.map((estado) => (
                              <option
                                key={estado}
                                value={estado}
                                className="text-white bg-gray-800" // Para que se vea bien el dropdown
                              >
                                {estado}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-6 gap-2 text-sm">
                <button
                  onClick={() => irAPagina(pagina - 1)}
                  disabled={pagina === 1}
                  className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded disabled:opacity-30"
                >
                  ←
                </button>
                {Array.from({ length: totalPaginas }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => irAPagina(i + 1)}
                    className={`px-3 py-1 rounded ${
                      pagina === i + 1
                        ? "bg-blue-500 text-black"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => irAPagina(pagina + 1)}
                  disabled={pagina === totalPaginas}
                  className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded disabled:opacity-30"
                >
                  →
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
