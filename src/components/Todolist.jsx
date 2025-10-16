import { useState } from "react";
import Todoitem from "./Todoitem";

const Todolist = (props) => {

    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow md:ml-6">
            <h1 className="text-2xl font-medium mb-3.5 text-center md:text-left">Today's Activity</h1>
            {
                activityArr.length === 0 ? <p>You haven't added anything yet...</p> :
                    <div>
                        {
                            activityArr.map((item, ind) => {
                                return <Todoitem key={ind} item={item} ind={ind} activityArr={activityArr} setactivityArr={setactivityArr} />
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default Todolist;