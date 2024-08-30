// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Add = () => {
//   const [carName, setCarName] = useState('');
//   const [carCondition, setCarCondition] = useState('');
//   const [carPassport, setCarPassport] = useState('');
//   const [carYear, setCarYear] = useState('');
//   const [carNumber, setCarNumber] = useState('');
//   const [rentalType, setRentalType] = useState('Kunlik');
//   const [image, setImage] = useState(null);

//   const handleRentalTypeChange = (e) => {
//     setRentalType(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleRemoveImage = () => {
//     setImage(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const carData = {
//       carName,
//       carCondition,
//       carPassport,
//       carYear,
//       carNumber,
//       rentalType,
//       image
//     };
//     console.log(carData);
    
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       onSubmit={handleSubmit}
//       className="p-8 bg-[#003049] text-white rounded-xl shadow-2xl max-w-3xl mx-auto mt-10 pb-20 overflow-y-auto "
//     >
//       <motion.h2
//         className="text-4xl font-bold text-white mb-8 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         Mashina Qo'shish
//       </motion.h2>

//       <div className="mb-6">
//         <label className="block text-white font-medium mb-2">Mashina Rasmlari</label>
//         <motion.div
//           className="flex flex-col items-center justify-center  rounded-lg p-6 cursor-pointer bg-gray-50 transition"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <input 
//             type="file" 
//             accept="image/*" 
//             multiple 
//             className="hidden" 
//             id="file-upload"
//             onChange={handleImageChange}
//           />
//           <label htmlFor="file-upload" className="text-center">
//             {image ? (
//               <div className="relative">
//                 <img src={image} alt="Uploaded" className="w-[100%] h-24 object-cover rounded-lg" />
//                 <button
//                   type="button"
//                   onClick={handleRemoveImage}
//                   className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
//                 >
//                   ×
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <svg
//                   className="mx-auto h-12 w-12 text-[#003049]"
//                   stroke="currentColor"
//                   fill="none"
//                   viewBox="0 0 48 48"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M24 34l-8-8m0 0l8-8m-8 8h16M20 12l-4 4-4-4m8 0V4m0 8l-4 4-4-4m8 0V4"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                   />
//                 </svg>
//                 <p className="mt-1 text-sm text-[#003049]">
//                   Rasmlarni bu yerga sudrang yoki bosing
//                 </p>
//                 <p className="mt-1 text-xs text-[#003049]">PNG, JPG, GIF (max 5 MB)</p>
//               </>
//             )}
//           </label>
//         </motion.div>
//       </div>


//       <div className="h-[150px]">
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           <div>
//             <label className="block text-white font-medium mb-2">Mashina Nomi</label>
//             <input
//               type="text"
//               value={carName}
//               onChange={(e) => setCarName(e.target.value)}
//               className=" border-b border-gray-300  p-3 bg-transparent text-white outline-none"
//               placeholder="Mashina nomi"
//             />
//           </div>

//           <div>
//             <label className="block text-white font-medium mb-2">Mashina Holati</label>
//             <input
//               type="text"
//               value={carCondition}
//               onChange={(e) => setCarCondition(e.target.value)}
//               className=" border-b border-gray-300  p-3 bg-transparent text-white outline-none"
//               placeholder="Mashina holati"
//             />
//           </div>
//           <div>
//             <label className="block text-white font-medium mb-2">Mashina Texpasport Raqami</label>
//             <input
//               type="text"
//               value={carPassport}
//               onChange={(e) => setCarPassport(e.target.value)}
//               className="border-b border-gray-300  p-3 bg-transparent text-white outline-none"
//               placeholder="Mashina texpasport raqami"
//             />
//           </div>
          
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-5"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//             <div>
//             <label className="block text-white font-medium mb-2">Mashina Yili</label>
//             <input
//               type="number"
//               value={carYear}
//               onChange={(e) => setCarYear(e.target.value)}
//               className="border-b border-gray-300  p-3 bg-transparent text-white outline-none"
//               placeholder="Mashina yili"
//             />
//           </div>
//           <div>
//             <label className="block text-white font-medium mb-2">Mashina Nomeri</label>
//             <input
//               type="text"
//               value={carNumber}
//               onChange={(e) => setCarNumber(e.target.value)}
//               className="border-b border-gray-300  p-3 bg-transparent text-white outline-none"
//               placeholder="Mashina nomeri"
//             />
//           </div>

//           <div>
//             <label className="block text-white font-medium mb-2">Ijara Turi</label>
//             <select
//               value={rentalType}
//               onChange={handleRentalTypeChange}
//               className="border-b border-gray-300  p-3 bg-transparent text-white outline-none"
//             >
//               <option className='bg-[white] text-[#003049]' value="Kunlik">Kunlik</option>
//               <option className='bg-[white] text-[#003049]' value="Oylik">Oylik</option>
//               <option className='bg-[white] text-[#003049]' value="Nasiya">Nasiya</option>
//             </select>
//           </div>
//         </motion.div>
//       </div>
//       <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold translate-y-14 hover:bg-blue-700 transition duration-200"
        
//             >
//               Mashinani qo'shish
//             </button>
      
//     </motion.form>
//   );
// };

// export default Add;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/Context';

const Add = () => {
  const { addCar } = useAppContext();
  const [carName, setCarName] = useState('');
  const [carCondition, setCarCondition] = useState('');
  const [carPassport, setCarPassport] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [rentalType, setRentalType] = useState('Kunlik');
  const [image, setImage] = useState(null);

  const handleRentalTypeChange = (e) => {
    setRentalType(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      id: Date.now(),
      carName,
      carCondition,
      carPassport,
      carYear,
      carNumber,
      rentalType,
      image,
      amal: "Faol"
    };
    addCar(carData);
    setCarName('');
    setCarCondition('');
    setCarPassport('');
    setCarYear('');
    setCarNumber('');
    setRentalType('Kunlik');
    setImage(null);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="p-8 bg-[#003049] text-white rounded-xl shadow-2xl max-w-3xl mx-auto mt-10 pb-20 overflow-y-auto"
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Mashina Qo'shish
      </motion.h2>
      <div className="mb-6">
        <label className="block text-white font-medium mb-2">Mashina Rasmlari</label>
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg p-6 cursor-pointer bg-gray-50 transition"
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
                <img src={image} alt="Uploaded" className="w-[100%] h-24 object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
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
      </div>
      <div className="h-[150px]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div>
            <label className="block text-white font-medium mb-2">Mashina Nomi</label>
            <input
              type="text"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              className="border-b border-gray-300 p-3 bg-transparent text-white outline-none"
              placeholder="Mashina nomi"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Mashina Holati</label>
            <input
              type="text"
              value={carCondition}
              onChange={(e) => setCarCondition(e.target.value)}
              className="border-b border-gray-300 p-3 bg-transparent text-white outline-none"
              placeholder="Mashina holati"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Mashina Texpasport Raqami</label>
            <input
              type="text"
              value={carPassport}
              onChange={(e) => setCarPassport(e.target.value)}
              className="border-b border-gray-300 p-3 bg-transparent text-white outline-none"
              placeholder="Mashina texpasport raqami"
            />
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div>
            <label className="block text-white font-medium mb-2">Mashina Yili</label>
            <input
              type="number"
              value={carYear}
              onChange={(e) => setCarYear(e.target.value)}
              className="border-b border-gray-300 p-3 bg-transparent text-white outline-none"
              placeholder="Mashina yili"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Mashina Nomeri</label>
            <input
              type="text"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              className="border-b border-gray-300 p-3 bg-transparent text-white outline-none"
              placeholder="Mashina nomeri"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Ijara Turi</label>
            <select
              value={rentalType}
              onChange={handleRentalTypeChange}
              className="border-b border-gray-300 p-3 bg-transparent text-white outline-none"
            >
              <option className='bg-[white] text-[#003049]' value="Kunlik">Kunlik</option>
              <option className='bg-[white] text-[#003049]' value="Oylik">Oylik</option>
              <option className='bg-[white] text-[#003049]' value="Nasiya">Nasiya</option>
            </select>
          </div>
        </motion.div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold translate-y-14 hover:bg-blue-700 transition duration-200"
      >
        Mashinani qo'shish
      </button>
    </motion.form>
  );
};

export default Add;
