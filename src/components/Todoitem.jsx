import { RiDeleteBin6Line } from "react-icons/ri";

const Todoitem = (props) => {

    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;

    const handleDelete = (deleteId) => {
        var finalArr = activityArr.filter((item) => {
            if (item.id === deleteId) {
                return false;
            }
            else {
                return true;
            }
        })

        setactivityArr(finalArr);
    }

    return (
        <div className="flex justify-between">
            <p>{props.ind + 1}.{props.item.activity}</p>
             <RiDeleteBin6Line size={24} color="red" className="mt-3 cursor-pointer" onClick={() => { handleDelete(props.item.id) }} />
        </div>

    );
}
export default Todoitem;