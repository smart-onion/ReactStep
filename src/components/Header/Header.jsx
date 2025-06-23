import "./Header.css";
import {useEffect, useState} from "react";
import weatherIcon from "../../assets/sun.png"


export function Header(){
    const [temperature, setTemperature] = useState(0);
    const lat = 46.47;
    const lon = 30.74;
    useEffect(() => {
        console.log("Mounting Header component, fetching weather data");
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setTemperature(data.current.temperature_2m);
            }catch(err) {
                console.error("Failed to fetch weather data:", err);
            }
        }
        let interval = setInterval(fetchWeather, 1000);
        return () => {
            console.log("Unmounting Header component, clearing interval");
            clearInterval(interval);
        }

    }, []);

    useEffect(() => {console.log("temperature changed")}, [temperature]);
    return(
        <div className="Header">
            <div className="title">
                <img src="https://whc.unesco.org/uploads/thumbs/site_1703_0003-750-750-20230206105558.jpg" alt="logo" />
                <h4>Odesa</h4>
            </div>
            <div className={"weather"}>
                <img src={weatherIcon} alt="weather" />
                <span className="temperature">{temperature}°C</span>
            </div>
        </div>
    )
}