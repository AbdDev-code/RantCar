import { createContext, useContext, useEffect, useState } from "react";
// import {HomePageCotegryCards, remont, ijara, bosh, finished} from '../data/data';

export const AppContext = createContext(null);

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

const AppContextProvider = ({ children }) => {
    const [cars, setCars] = useState([]);

    const addCar = (car) => {
      setCars(prevCars => [...prevCars, car]);
    };
  
    const updateCarAmal = (id, amal) => {
      setCars(prevCars =>
        prevCars.map(car =>
          car.id === id ? { ...car, amal } : car
        )
      );
    };
  
    const deleteCar = (id) => {
      setCars(prevCars => prevCars.filter(car => car.id !== id));
    };

    return (
        <AppContext.Provider value={{  cars, addCar, updateCarAmal, deleteCar }}>
            {children} 
        </AppContext.Provider>
    );
};

export { AppContextProvider, useAppContext };
