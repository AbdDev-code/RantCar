import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/Context'
import { IoCheckmarkCircleSharp, IoCloseCircle } from 'react-icons/io5';
import { PiPhoneCallBold } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
const Ijara = () => {
    const {ijara, cars, deleteCar} = useAppContext();    
    
    const [openModal, setOpenmodal] =useState(false);
    const OpenModal = () => {
        setOpenmodal(prevOpen => !prevOpen);
    };
    const CloseModal = ()=>{
        setOpenmodal(false)
    };
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          setImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleCall = (phoneNumber) => {
          window.open(`tel:${phoneNumber}`);
        };
      
        const handleComplete = (id) => {
          
        };
      
        const handleDelete = (id) => {
          deleteCar(id);
        };
    

    const [image, setImage] = useState(null);
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [passport, setPassport] = useState('')
    const [arenda, setArenda] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [date, setDate] = useState('')
    const [clock, setClock] = useState('')
    const [zaklad, setZaklad] = useState('')
    const [jarima, setJarima] = useState('')

    const handleRemoveImage = () => {
        setImage(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const NewCarDate = {
            image,
            name,
            tel,
            passport,
            arenda,
            carNumber,
            date,
            clock,
            zaklad,
            jarima
        };
    
        const requiredFields = [
            NewCarDate.arenda,
            NewCarDate.image,
            NewCarDate.name,
            NewCarDate.tel,
            NewCarDate.passport,
            NewCarDate.carNumber,
            NewCarDate.date,
            NewCarDate.clock,
            NewCarDate.zaklad,
            NewCarDate.jarima
        ];
        
        
        const isFormValid = requiredFields.every(field => field !== '');
        
        if (!isFormValid) {
            alert("Formani to'liq to'ldiring");
            return; 
        }
        
    
        console.log(NewCarDate);
        setImage('');
    setName('');
    setTel('');
    setPassport('');
    setArenda('');
    setCarNumber('');
    setDate('');
    setClock('');
    setZaklad('');
    setJarima('');
        setOpenmodal(false)
    };
    
    
  return (
    <>
    {openModal && (
                <div className='top-0  left-0 absolute w-full h-[100%] flex justify-center items-center backdrop-blur-sm z-50 backdrop-brightness-50'>
                   <motion.form
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: -250 }}
                   transition={{ duration: 0.5 }}
                   onSubmit={handleSubmit}
                    className='bg-[#c9c6c6ef] mt-[30%]  w-[45%] h-[75%] rounded-2xl -translate-y-[250px] px-16 pt-16'>
                    <div
                    className='w-full flex justify-end items-end mb-10'>
                    <IoMdClose className='text-[23px] text-black' onClick={CloseModal}/>
                    </div>
                    <div className="container">
                    <motion.div
          className="flex flex-col items-center justify-center mb-6 w-[48%] h-[200px]  rounded-lg p-6 cursor-pointer bg-gray-50 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input 
            type="file" 
            accept="image/*" 
            multiple 
            className="hidden" 
            id="file-upload"
            onChange={handleImageChange}
          />
          <label htmlFor="file-upload" className="text-center">
            {image ? (
              <div className="relative">
                <img src={image} alt="Uploaded" className=" object-cover rounded-lg w-[150px] " />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
                >
                  ×
                </button>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-[#003049]"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M24 34l-8-8m0 0l8-8m-8 8h16M20 12l-4 4-4-4m8 0V4m0 8l-4 4-4-4m8 0V4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <p className="mt-1 text-sm text-[#003049]">
                  Rasmlarni bu yerga sudrang yoki bosing
                </p>
                <p className="mt-1 text-xs text-[#003049]">PNG, JPG, GIF (max 5 MB)</p>
              </>
            )}
          </label>
                    </motion.div>
                    <div className='w-[48%] mb-5'>
                    <input 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'  
                    placeholder='Ijarachining ismi'/>
                    </div>
                    <div className="flex w-[48%] justify-between items center gap-10 mb-5">
                    <input 
                    value={tel}
                    onChange={(e)=> setTel(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Telefon Raqami'/>
                    <input 
                    value={passport}
                    onChange={(e)=> setPassport(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Passport ID'/>
                    </div>
                    <div className="flex w-[48%] justify-between items center gap-10 mb-5">
                    <input
                    value={arenda}
                    onChange={(e) => setArenda(e.target.value)} 
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Arenda Turi'/>
                    <input 
                    value={carNumber}
                    onChange={(e)=> setCarNumber(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Mashina Raqami'/>
                    </div>
                    <div className="flex w-[48%] justify-between items center gap-10 mb-5">
                    <input 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Muddat'/>
                    <input 
                    value={clock}
                    onChange={(e) => setClock(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Muddatning Soati'/>
                    <input 
                    value={zaklad}
                    onChange={(e) => setZaklad(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder="Zaklad"/>
                    <input 
                    value={jarima}
                    onChange={(e) => setJarima(e.target.value)}
                    type="text" 
                    className='bg-transparent border-b-2 outline-none transition-all duration-300 border-slate-400 focus:border-b-slate-700 w-full py-3 placeholder:text-[#003049]'
                    placeholder='Jarima Foizi'/>
                    </div>
                    <div className='w-[48%] text-center'>
                        <button 
                        className='text-white bg-[#22577A] py-2 px-6 rounded-xl focus:bg-[#2f76a5]'
                        type='submit'

                        >
                            Qo'shish
                        </button>
                    </div>
                    </div>
                   </motion.form>
                </div>
            )}
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 py-3 bg-[#003049] text-white rounded-xl shadow-2xl w-[60%] mx-auto mt-24 pb-10 z-40"
    >
        <div className='w- text-right z-10'><button onClick={OpenModal} className='bg-[#003049]  text-white rounded-xl -translate-y-24 p-3 font-medium'>Qo'shish</button></div>
        
        <table className="min-w-full divide-y divide-gray-200 overflow-y-scroll scroll-m-3 pt-[38px]">
            <thead className="bg-[#002f49c4]  ">
                <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">№</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Ism Familiyasi</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Telefon raqami</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Muddat</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">To'lov</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Mashina</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Amal</th>
                </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200 overflow-y-auto pt-[50px]">
                {cars.map((car, index)=>(
                    <tr className='' key={car.id}>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{index}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.ism}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.tel}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.vaqt}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.tolov}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.mashina}</td>
                        <td  className='flex items-center justify-start text-white cursor-pointer px-1 py-4 whitespace-nowrap text-center text-[23px] gap-2 transition-all duration-300'><PiPhoneCallBold onClick={() => handleCall(car.phone)} className='hover:text-blue-300 transition-all duration-300'/><IoCloseCircle onClick={() => handleComplete(car.id)} className='hover:text-red-600 transition-all duration-300'/><IoCheckmarkCircleSharp onClick={() => handleDelete(car.id)} className='hover:text-green-600 transition-all duration-300'/><IoCloseCircle className='hover:text-red-600 transition-all duration-300'/> </td>
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
// import { useAppContext } from '../../context/Context';

// const Ijara = () => {
//   const { cars, deleteCar } = useAppContext();

//   const handleCall = (phoneNumber) => {
//     window.open(`tel:${phoneNumber}`);
//   };

//   const handleComplete = (id) => {
    
//   };

//   const handleDelete = (id) => {
//     deleteCar(id);
//   };

//   return (
//     <motion.div>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomi</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raqami</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harakatlar</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {cars.map(car => (
//             <tr key={car.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{car.carName}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{car.carNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button onClick={() => handleCall(car.phone)} className="text-blue-500 hover:text-blue-700">Qo'ng'iroq qilish</button>
//                 <button onClick={() => handleComplete(car.id)} className="text-green-500 hover:text-green-700 ml-4">Yakunlash</button>
//                 <button onClick={() => handleDelete(car.id)} className="text-red-500 hover:text-red-700 ml-4">O'chirish</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </motion.div>
//   );
// };

// export default Ijara;
