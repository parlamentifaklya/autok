import { useEffect, useState } from "react"
import { Car } from "../types/car"

const Cars = () => {
    const [cars, setCars] = useState<Car[]>([]);

    
    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const res = await fetch("autok.json");
                const data = await res.json();
                setCars(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAuto();
    }, [])


    return (
        <div>
            {cars.map((car) => (
                <div key={car.modell}>{car.modell}</div>
            ))}
        </div>
    )
}

export default Cars