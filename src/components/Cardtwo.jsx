import { useEffect, useState } from "react";

const Cardtwo = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);


        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="bg-red-400">
            <h1>{dateTime.toLocaleDateString("en-US", { month: "long", day: "numeric" })}</h1>
            <p>{dateTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default Cardtwo;