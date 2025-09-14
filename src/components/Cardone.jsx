import React, { useEffect, useState } from "react";
import axios from "axios";

const Cardone = () => {
    const [weather, setWeather] = useState(null);
    const [place, setPlace] = useState(null);
    const apiKey = "dfa5304a5169fdd05cecd449d7252ebf";
    const getLocationByIP = async () => {

        try {
            const ipRes = await axios.get("https://ipapi.co/json/");
            const { latitude, longitude, city } = ipRes.data;
            console.log("IP-based location:", latitude, longitude, city);

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            const weatherRes = await axios.get(url);

            setWeather(weatherRes.data.main?.temp ?? "N/A");
            setPlace(city || weatherRes.data.name || "Unknown");

        } catch (error) {
            console.error("IP-based location error:", error);
            setWeather("N/A");
            setPlace("Unknown");
        }
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    console.log("GPS success:", position);
                    const { latitude, longitude } = position.coords;
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

                    try {
                        const res = await axios.get(url);
                        setWeather(res.data.main?.temp ?? "N/A");
                        setPlace(res.data.name ?? "Unknown");
                    } catch (error) {
                        console.error("Weather API error:", error);
                        setWeather("N/A");
                        setPlace("Unknown");
                    }
                },
                (error) => {
                    console.error("GPS error:", error);
                    getLocationByIP();
                }
            );
        } else {

            getLocationByIP();
        }
    }, []);

    return (
        <div style={{ backgroundColor: "#8272DA" }} className="px-10 py-5 border rounded-md my-3 text-center flex-grow">

            <h1>{place || "Loading..."}</h1>
            <p>{weather !== null ? `${weather}°C` : "Loading..."}</p>
        </div>
    );
};

export default Cardone;
