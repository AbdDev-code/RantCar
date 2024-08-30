import { IoIosLogOut } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
  return (
    <div className='z-30'>
        <div className=' bg-[#003049] w-[100vw] z-30'>
            <div className="flex flex-col items-center justify-center w-full py-2">
                <img className='w-[20vw] max-md:w-[80vw] md:[30vw]' src="src/assets/Navbar Image.png" alt="" />
                <NavLink to='/'>{location.pathname === '/home' && <p className='flex gap-1 text-white items-center transition-all duration-300 hover:text-[#E1AA45]'><IoIosLogOut />Chiqish</p>}</NavLink>
                <NavLink to='/'>{location.pathname === '/add' && <p className='flex gap-1 text-white items-center transition-all duration-300 hover:text-[#E1AA45]'><IoIosLogOut />Chiqish</p>}</NavLink>
                <NavLink to='/'>{location.pathname === '/ijara' && <p className='flex gap-1 text-white items-center transition-all duration-300 hover:text-[#E1AA45]'><IoIosLogOut />Chiqish</p>}</NavLink>
                <NavLink to='/'>{location.pathname === '/cars' && <p className='flex gap-1 text-white items-center transition-all duration-300 hover:text-[#E1AA45]'><IoIosLogOut />Chiqish</p>}</NavLink>
                <NavLink to='/'>{location.pathname === '/finished' && <p className='flex gap-1 text-white items-center transition-all duration-300 hover:text-[#E1AA45]'><IoIosLogOut />Chiqish</p>}</NavLink>
                <NavLink to='/'>{location.pathname === '/bosh' && <p className='flex gap-1 text-white items-center transition-all duration-300 hover:text-[#E1AA45]'><IoIosLogOut />Chiqish</p>}</NavLink>
            </div>
        </div>
        
    </div>
  )
}

export default Footer