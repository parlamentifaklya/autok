import { useEffect, useState } from "react"
import { Car } from "../types/car"

const Cars = () => {
    const [cars, setCars] = useState<Car[]>([]);

    
    useEffect(() => {
        const fetchAuto = async () => {
            try {
                await fetch("autok.json").then(res => res.json()).then(data => {
                    let apiCars = data.autok;
                    apiCars = apiCars.sort(() => Math.random() - 0.5);
                    apiCars = apiCars.slice(0, 4);
                    setCars(apiCars);
                });
            } catch (error) {
                console.error(error);
            }
        }

        fetchAuto();
    }, [])

    return (
        <div>
            {cars.map((car, idx) => (
                <div>
                    <img src={`https://picsum.photos/id/${Math.floor(Math.random())}/600/400`} style={{ width: 600, height: 400}}/>
                    <div style={{color: car.sebessegvalto === "automata" ? "blue" : "red"}} key={idx}>{car.marka} {car.modell} - {car.sebessegvalto}</div>

                </div>
            ))}
        </div>
    )
}

export default Cars