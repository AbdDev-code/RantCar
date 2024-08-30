import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const RouterLayout = () => {
  const location = useLocation();

  return (
    <>
      <header>
      <Footer />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {location.pathname === '/home' && <Navbar />}
        {location.pathname === '/add' && <Navbar />}
        {location.pathname === '/remont' && <Navbar />}
        {location.pathname === '/ijara' && <Navbar />}
        {location.pathname === '/cars' && <Navbar />}
        {location.pathname === '/finished' && <Navbar />}
        {location.pathname === '/bosh' && <Navbar />}
      </footer>
    </>
  )
}

export default RouterLayout
