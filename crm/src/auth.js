export function guardarToken(token) {
  localStorage.setItem('token', token);
}

export function obtenerToken() {
  return localStorage.getItem('token');
}

export function cerrarSesion() {
  localStorage.removeItem('token');
}
