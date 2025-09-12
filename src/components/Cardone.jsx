import React, { useEffect, useState } from "react";
import axios from "axios";

const Cardone = () => {
    const [weather, setWeather] = useState(null);
    const [place, setPlace] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const apiKey = "dfa5304a5169fdd05cecd449d7252ebf";
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

                    try {
                        const res = await axios.get(url);
                        setWeather(res.data.main?.temp ?? "N/A");
                        setPlace(res.data.name ?? "Unknown");
                    } catch (error) {
                        setWeather("N/A");
                        setPlace("Unknown");
                    }
                },
                (error) => {
                    setWeather("N/A");
                    if (error.code === 1) {
                        setPlace("Location denied");
                    } else {
                        setPlace("Unable to get location");
                    }
                }
            );
        } else {
            setWeather("N/A");
            setPlace("Geolocation not supported");
        }
    }, []);

    return (
        <div style={{ backgroundColor: "#8272DA", padding: "20px", borderRadius: "10px", color: "white" }}>
            <h1>{weather !== null ? `${weather}°C` : "Loading..."}</h1>
            <p>{place || "Loading..."}</p>
        </div>
    );
};

export default Cardone;
