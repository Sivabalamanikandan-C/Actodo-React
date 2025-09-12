import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";

import Cardone from "../components/Cardone";

const Landing = () => {

    const data = useLocation();

    return (
        <div className='bg-black p-14'>
            <div className='bg-[#efefef] p-10 rounded-md'>
                <Header data={data.state.users} />

                <div className='flex justify-between gap-7 flex-wrap'>
                    {/* <Card bgcolor={"#8272DA"} title={"23°C"} subtitle={"Madurai"} /> */}
                    <Cardone />

                    <Card bgcolor={"#Fd6663"} title={"May 29"} subtitle={"15:18:06"} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React JS"} />
                </div>

                <Todocontainer />
            </div>
        </div>
    );
}

export default Landing;