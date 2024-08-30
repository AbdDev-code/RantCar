import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/Context'
import { IoCheckmarkCircleSharp, IoCloseCircle } from 'react-icons/io5';
import { PiPhoneCallBold } from 'react-icons/pi';
const Ijara = () => {
    const {cars} = useAppContext();  
    const [search, setSearch] = useState('');
    const handleSearchChange = (e)=>{
        setSearch(e.target.value)
    }  
    const filteredIjara = cars.filter(car => 
        (car.ism && car.ism.toLowerCase().includes(search.toLowerCase())) ||
        (car.tel && car.tel.toLowerCase().includes(search.toLowerCase())) ||
        (car.vaqt && car.vaqt.toLowerCase().includes(search.toLowerCase())) ||
        (car.tolov && car.tolov.toLowerCase().includes(search.toLowerCase())) ||
        (car.mashina && car.mashina.toLowerCase().includes(search.toLowerCase())) ||
        (car.name && car.name.toLowerCase().includes(search.toLowerCase()))
    );
    
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 py-3 bg-[#003049] text-white rounded-xl shadow-2xl w-[60%] mx-auto mt-24 pb-10 z-40"
    >
        <div className='w- text-right z-10 relative'><input value={search} onChange={handleSearchChange} className='absolute -top-16 -right-8 px-5 py-2 rounded-lg bg-[#003049] placeholder:text-white outline-none' type="search" name="Search" placeholder='Qidiruv'/></div>
        
        <table className="min-w-full divide-y divide-gray-200 overflow-y-scroll scroll-m-3 pt-[38px]">
            <thead className="bg-[#002f49c4]  ">
                <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">№</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Ism Familiyasi</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Telefon raqami</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Muddat</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">To'lov</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Mashina</th>
                </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200 overflow-y-auto pt-[50px]">
                {filteredIjara.map((car, index)=>(
                    <tr className='' key={car.id}>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{index}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.ism}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.tel}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.vaqt}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.tolov}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.mashina}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
           
        </div>
    </motion.div>
    </>
    
  )
}

export default Ijara