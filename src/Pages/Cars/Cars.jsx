import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/Context'

const Cars = () => {
    const { cars } = useAppContext();
    

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    

    return (
        <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="p-8 bg-[#003049] text-white rounded-xl shadow-2xl max-w-3xl mx-auto mt-10 pb-10 "
        >
            <table className="min-w-full divide-y divide-gray-200 overflow-y-scroll max-h-[200px]">
                <thead className="bg-[#003049]">
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">№</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Nomi</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Nomeri</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Turi</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Holati</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 overflow-y-auto">
                    {cars.map((car, index) => (
                        <tr className='' key={car.id}>
                            <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{index + 1}</td>
                            <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.name}</td>
                            <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.number}</td>
                            <td className="px-6 py-2 whitespace-nowrap text-center text-sm text-white">{car.turi}</td>
                            <td
                                
                                className={`${car.amal === "Faol" ? 'bg-green-400 text-gray-900' : 'bg-[red] text-white'} cursor-pointer px-1 py-4 w-0 h-0 whitespace-nowrap text-center text-sm `}
                            >
                                {car.amal}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.form>
    );
}

export default Cars;
