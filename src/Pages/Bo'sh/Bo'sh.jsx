import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/Context';

const Bosh = () => {
    const { bosh } = useAppContext(); 
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (!bosh) return; 

        const deletedCars = JSON.parse(localStorage.getItem('deletedCars')) || [];

        const filteredCars = bosh.filter(car => !deletedCars.includes(car.id));
        setCars(filteredCars);
    }, [bosh]);

    const deleteCar = (id) => {
        setCars(prevCars => {
            const updatedCars = prevCars.filter(car => car.id !== id);
            
            const deletedCars = JSON.parse(localStorage.getItem('deletedCars')) || [];
            deletedCars.push(id);
            localStorage.setItem('deletedCars', JSON.stringify(deletedCars));
            
            return updatedCars;
        });
    };

    const toggleAmal = (id) => {
        setCars(prevCars =>
            prevCars.map(car =>
                car.id === id
                    ? { ...car, amal: !car.amal }
                    : car
            )
        );
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCars = cars.filter(car =>
        (car.number && car.number.toLowerCase().includes(search.toLowerCase().trim())) ||
        (car.name && car.name.toLowerCase().includes(search.toLowerCase().trim()))
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -12 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-[#003049] text-white rounded-xl shadow-2xl max-w-xl mx-auto mt-28 pb-10"
        >
            <div className='w- text-right z-10 relative -translate-y-7'>
                <input
                    value={search}
                    onChange={handleSearchChange}
                    className='absolute -top-16 -right-8 px-5 py-2 rounded-lg bg-[#003049] placeholder:text-white outline-none'
                    type="search"
                    name="Search"
                    placeholder='Qidiruv'
                />
            </div>
            <table className="min-w-full divide-y divide-gray-200 overflow-y-scroll max-h-[180px]">
                <thead className="bg-[#003049]">
                    <tr>
                        <th className="px-4 py-2 text-center text-xs font-medium text-white uppercase tracking-wider">№</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-white uppercase tracking-wider">Nomi</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-white uppercase tracking-wider">Nomeri</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-white uppercase tracking-wider">Amal</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 overflow-y-auto">
                    {filteredCars.map((car, index) => (
                        <tr className='' key={car.id}>
                            <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-white">{index + 1}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-white">{car.name}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-white">{car.number}</td>
                            <td
                                onClick={() => {
                                    toggleAmal(car.id);
                                    if (car.amal) {
                                        deleteCar(car.id);
                                    }
                                }}
                                className={`${car.amal ? 'bg-green-400 text-gray-900' : 'bg-red-600 text-white'} cursor-pointer px-1 py-[9px] w-0 h-0 whitespace-nowrap text-center text-sm`}
                            >
                                {car.amal ? "Faol" : "Nofaol"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default Bosh;
