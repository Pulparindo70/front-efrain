import { useEffect } from 'react'
import AppRoutes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Preload from './components/Preload'

function App() {
  useEffect(() => {
    // Verifica si el script de reCAPTCHA ya está disponible
    const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          console.log('✅ reCAPTCHA listo');
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Preload />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App
