import { useState } from "react";

const Addtodoform = (props) => {

    const activityArr=props.activityArr;
    const setactivityArr=props.setactivityArr;

    const [newActivity,setnewActivity]=useState("");

    const handlenewactivity=(event)=>{
        setnewActivity(event.target.value);
    }

    const handleChange=()=>{
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}]);
        setnewActivity("");
    }

    return (
        <div className="text-center">
            <h1 className="text-2xl font-medium mt-2 mb-1">Manage Activity</h1>
            <div className="mb-3">
                <input type="text" value={newActivity} onChange={handlenewactivity} placeholder="Next Activity?" className="outline-2 p-1.5 my-2 rounded-md bg-transparent" style={{width:'40%'}} />
                <button onClick={handleChange} className="bg-black text-white px-2 py-1 ml-2 rounded-md">Add</button>
            </div>
        </div>
    );
}

export default Addtodoform;