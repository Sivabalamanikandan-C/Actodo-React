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
        <div className='bg-red-400 md:px-10 py-5 border rounded-md my-3 text-center flex-grow'>
            <h1 className="text-2xl font-medium mb-1">{dateTime.toLocaleDateString("en-US", { month: "long", day: "numeric" })}</h1>
            <p className="text-xl">{dateTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default Cardtwo;