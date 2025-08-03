import { useState } from 'react';
import API from '../api';
import { guardarToken } from '../auth';
import { useNavigate } from 'react-router-dom';
import {
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';

export default function Login() {
  const [credenciales, setCredenciales] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const enviar = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/login', credenciales);
      guardarToken(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Credenciales incorrectas o error de conexión.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white overflow-hidden">
      <div className="absolute w-72 h-72 bg-[#3b82f6] rounded-full opacity-20 blur-3xl top-0 left-0 animate-spin-slow"></div>
      <div className="absolute w-96 h-96 bg-[#00bfff] rounded-full opacity-10 blur-2xl bottom-0 right-0 animate-spin-slow"></div>

      <div className="z-10 w-full max-w-sm bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
            <ArrowRightOnRectangleIcon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Accede al CRM</h2>
          <p className="text-sm text-white/70">Administra tus leads fácilmente</p>
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={enviar} className="space-y-4">
          <div className="flex items-center bg-white/10 border border-white/20 rounded px-3 py-2">
            <EnvelopeIcon className="w-5 h-5 text-white/70 mr-2" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="bg-transparent w-full outline-none text-white placeholder-white/60"
              value={credenciales.email}
              onChange={(e) =>
                setCredenciales({ ...credenciales, email: e.target.value })
              }
              required
            />
          </div>
          <div className="flex items-center bg-white/10 border border-white/20 rounded px-3 py-2">
            <LockClosedIcon className="w-5 h-5 text-white/70 mr-2" />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-transparent w-full outline-none text-white placeholder-white/60"
              value={credenciales.password}
              onChange={(e) =>
                setCredenciales({ ...credenciales, password: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00bfff] hover:bg-[#3b82f6] text-white font-semibold py-2 rounded transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-white/50">
          ¿Olvidaste tu acceso?{' '}
          <span className="text-[#00bfff] underline cursor-pointer">
            Contacta al admin
          </span>
        </div>
      </div>
    </div>
  );
}
