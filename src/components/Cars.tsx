import { useEffect, useState } from "react"
import { Car } from "../types/car"

const Cars = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [carIdx, setCarIdx] = useState<number>(0); 
    
    useEffect(() => {
        const fetchAuto = async () => {
            try {
               const res = await fetch("autok.json");
               const data = await res.json();
               setCars(data.autok);
            } catch (error) {
                console.error(error)
            }
        }

        fetchAuto();
    }, [])

    const Increase = () => {
        setCarIdx(prev => prev + 1 == cars.length ? 0 : prev + 1);
    }

    const Decrease = () => {
        setCarIdx(prev => prev - 1 < 0 ? cars.length - 1 : prev - 1);
    }

    return (
        <div>
            {cars.length > 0 && <>
                <button onClick={Decrease}>⬅️</button>
                <img src={cars[carIdx].img}/>
                <button onClick={Increase}>➡️</button>
            </>}
        </div>
    )
}

export default Cars