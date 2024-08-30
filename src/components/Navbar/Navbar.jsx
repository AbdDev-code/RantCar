import { FaCarSide, FaParking } from 'react-icons/fa'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
import { IoCheckbox, IoHome } from 'react-icons/io5'
import { MdCarRental } from 'react-icons/md'
import { RiAddBoxFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center '>
        <div className="flex justify-center items-center absolute  bottom-0 bg-[#003049] py-[12px] rounded-t-2xl text-[white]  md:gap-14 px-10">
        <NavLink to='/home' className='focus:text-[#E1AA45]'><p className='flex flex-col justify-center items-center gap-1 transition-all duration-300 text-[15px]'><IoHome  className='text-[25px]'/>Asosiy</p></NavLink>
        <NavLink to='/add' className='focus:text-[#E1AA45]'><p className=' flex flex-col justify-center items-center gap-3 transition-all duration-300 text-[15px]'><RiAddBoxFill  className='text-[25px]'/>Qo'shish</p></NavLink>
        <NavLink to='/remont' className='focus:text-[#E1AA45]'><p className='focus:text-[#E1AA45] flex flex-col justify-center items-center gap-3 transition-all duration-300 text-[15px]'><HiWrenchScrewdriver  className='text-[25px]'/>Remont</p></NavLink>
        <NavLink to='/ijara' className='focus:text-[#E1AA45]'><p className='focus:text-[#E1AA45] flex flex-col justify-center items-center gap-3 transition-all duration-300 text-[15px]'><MdCarRental  className='text-[25px]'/>Ijara</p></NavLink>
        <NavLink to='/cars' className='focus:text-[#E1AA45]'><p className='focus:text-[#E1AA45] flex flex-col justify-center items-center gap-3 transition-all duration-300 text-[15px]'><FaCarSide  className='text-[25px]'/>Mashinalar</p></NavLink>
        <NavLink to='/finished' className='focus:text-[#E1AA45]'><p className='focus:text-[#E1AA45] flex flex-col justify-center items-center gap-3 transition-all duration-300 text-[15px]'><IoCheckbox  className='text-[25px]'/>Yakunlangan</p></NavLink>
        <NavLink to='/bosh' className='focus:text-[#E1AA45]'><p className='focus:text-[#E1AA45] flex flex-col justify-center items-center gap-3 transition-all duration-300 text-[15px]'><FaParking  className='text-[25px]'/>Bo'sh Mashinalar</p></NavLink>        </div>
    </div>
  )
}

export default Navbar