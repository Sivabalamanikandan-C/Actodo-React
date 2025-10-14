import Header from "../components/Header";

import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";

import Cardone from "../components/Cardone";
import Cardtwo from "../components/Cardtwo";
import Cardthree from "../components/Cardthree";

const Landing = () => {

    const data = useLocation();

    return (
        <div className='bg-black p-10'>
            <div className='bg-[#efefef] p-8 rounded-md'>
                <Header data={data.state.users} />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center"'>
                    <Cardone />
                    <Cardtwo />
                    <Cardthree />
                </div>
                <Todocontainer />
            </div>
        </div>
    );
}

export default Landing;