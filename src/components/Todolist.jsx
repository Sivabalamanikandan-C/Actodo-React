import { useState } from "react";
import Todoitem from "./Todoitem";

const Todolist = (props) => {

    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;

    return (
       <div className="bg-[#BDB4EA] border rounded-md p-4.5 w-11/12 sm:w-10/12 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto mt-4">
            <h1 className="text-2xl font-medium mb-3 text-center md:text-left">Today's Activity</h1>

            {activityArr.length === 0 ? (
                <p className="text-center md:text-left">You haven't added anything yet...</p>
            ) : (
                <div className="space-y-2">
                    {activityArr.map((item, ind) => (
                        <Todoitem
                            key={ind}
                            item={item}
                            ind={ind}
                            activityArr={activityArr}
                            setactivityArr={setactivityArr}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Todolist;