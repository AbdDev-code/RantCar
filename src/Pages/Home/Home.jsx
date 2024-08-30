import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
const Home = () => {
  const OptionSelector = () => {
    const [selectedOption, setSelectedOption] = useState("Kunlik");
    const [selectedSubOption, setSelectedSubOption] = useState(null);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setSelectedSubOption(null); // Reset suboption when a new main option is clicked
    };

    const handleSubOptionClick = (subOption) => {
      setSelectedSubOption(subOption);
    };

    const renderSubOptions = () => {
      if (selectedOption === "Kunlik") {
        return (
          <div className="flex flex-col justify-center space-y-2 mt-4">
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("Bugungi Sana")}>
              Bugungi Sana<IoIosArrowDown />
            </button>
            {selectedSubOption === "Bugungi Sana" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz Bugungi Sanani tanladingiz.
              </p>
            )}
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("Ertangi Sana")}>
              Ertangi Sana<IoIosArrowDown />
            </button>
            {selectedSubOption === "Ertangi Sana" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz Ertangi Sanani tanladingiz.
              </p>
            )}
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("Undan Keyingi Sana")}>
              Undan Keyingi Sana<IoIosArrowDown />
            </button>
            {selectedSubOption === "Undan Keyingi Sana" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz Undan Keyingi Sanani tanladingiz.
              </p>
            )}
          </div>
        );
      } else if (selectedOption === "Oylik") {
        return (
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("Yanvar")}>
              Yanvar<IoIosArrowDown />
            </button>
            {selectedSubOption === "Yanvar" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz Yanvar oyini tanladingiz.
              </p>
            )}
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("Fevral")}>
              Fevral<IoIosArrowDown />
            </button>
            {selectedSubOption === "Fevral" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz Fevral oyini tanladingiz.
              </p>
            )}
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("Mart")}>
              Mart<IoIosArrowDown />
            </button>
            {selectedSubOption === "Mart" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz Mart oyini tanladingiz.
              </p>
            )}
          </div>
        );
      } else if (selectedOption === "Nasiya") {
        return (
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("3 oy")}>
              3 oy<IoIosArrowDown />
            </button>
            {selectedSubOption === "3 oy" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz 3 oylik nasiyani tanladingiz.
              </p>
            )}
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("6 oy")}>
              6 oy<IoIosArrowDown />
            </button>
            {selectedSubOption === "6 oy" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz 6 oylik nasiyani tanladingiz.
              </p>
            )}
            <button className="bg-white flex justify-between items-center text-[#003049] px-4 py-2 rounded-lg focus:bg-[#E1AA45] focus:text-white w-full text-start" onClick={() => handleSubOptionClick("1 yil")}>
              1 yil<IoIosArrowDown />
            </button>
            {selectedSubOption === "1 yil" && (
              <p className="mt-2 text-yellow-400 font-bold">
                Siz 1 yillik nasiyani tanladingiz.
              </p>
            )}
          </div>
        );
      }
      return null;
    };

    return (
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }} className="text-start">
        <motion.button 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
          className={`px-4 py-2 rounded-lg mx-2 border border-transparent text-white focus:border-white`} 
          onClick={() => handleOptionClick("Kunlik")}
        >
          Kunlik
        </motion.button>
        <motion.button 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }} 
          className={`px-4 py-2 rounded-lg mx-2 border border-transparent text-white focus:border-white`} 
          onClick={() => handleOptionClick("Oylik")}
        >
          Oylik
        </motion.button>
        <motion.button 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
          className={`px-4 py-2 rounded-lg mx-2 border border-transparent text-white focus:border-white`} 
          onClick={() => handleOptionClick("Nasiya")}
        >
          Nasiya
        </motion.button>

        <div className="mt-5">{renderSubOptions()}</div>
      </motion.div>
    );
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} 
    className='w-full'>
      <div className='flex justify-center items-center mt-28'>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='w-[40vw] h-[40vh] bg-[#003049] text-white rounded-2xl p-6'>
          <OptionSelector />
        </motion.div>
      </div>
   
    </motion.div>
  );
};

export default Home;
