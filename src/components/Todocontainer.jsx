import Addtodoform from "./Addtodoform";
import Todolist from "./Todolist";

import { useState } from "react";

const Todocontainer = () => {

    const [activityArr, setactivityArr] = useState([{ id: 1, activity: "Wakeup at 6" }, { id: 2, activity: "Go for a walk" }]);

    return (
        <div>
            <div>
                <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr} />
                <Todolist activityArr={activityArr} setactivityArr={setactivityArr} />
            </div>
        </div>
    )
}

export default Todocontainer;