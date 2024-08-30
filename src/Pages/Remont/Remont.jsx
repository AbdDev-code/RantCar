
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/Context';

const Remont = () => {
  const { cars, updateCarAmal } = useAppContext();
  const [carList, setCarList] = useState(cars);

  const toggleAmal = (id) => {
    const updatedAmal = carList.find(car => car.id === id).amal === "Faol" ? "Remont" : "Faol";
    updateCarAmal(id, updatedAmal);
    setCarList(prev => prev.map(car => car.id === id ? { ...car, amal: updatedAmal } : car));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-[#003049] text-white rounded-xl shadow-2xl max-w-3xl mx-auto mt-10 pb-10"
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">№</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nomi</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Raqami</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Turi</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Holat</th>
          </tr>
        </thead>
        <tbody className="bg-transparent divide-y divide-gray-200">
          {carList.map((car, index) => (
            <tr key={car.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{car.carName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{car.carNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{car.rentalType}</td>
              <td
                onClick={() => toggleAmal(car.id)}
                className={`px-6 py-4 whitespace-nowrap text-sm font-medium cursor-pointer ${car.amal === "Faol" ? 'text-green-400' : 'text-red-600'}`}
              >
                {car.amal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.form>
  );
};

export default Remont;
