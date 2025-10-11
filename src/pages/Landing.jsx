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
                <div className='flex justify-between gap-7 flex-wrap '>
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