import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Signup = (props) => {

    const users = props.users;
    const setUsers = props.setUsers;
    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const [ecpassword, setEcpassword] = useState("");
    const [validInp, setValidinp] = useState(true);
    const navigate = useNavigate();

    const handleEusername = (event) => {
        setEusername(event.target.value);
    }

    const handleEpassword = (event) => {
        setEpassword(event.target.value);
    }

    const handleEcpassword = (event) => {
        setEcpassword(event.target.value);
    }

    const addUser = () => {
        if (eusername === "" || epassword === "" || epassword !== ecpassword) {
            console.log("Invalid Input");
            navigate("/signup");
            setValidinp(false);
        }
        else {
            console.log("Valid Input");
            navigate("/");
        }
        const newUser = [...users, { username: eusername, password: epassword }];
        setUsers(newUser);
        console.log(newUser);
    }

    return (
        <div className="p-10 bg-black">
            <div className="p-10 bg-[#EFEFEF]">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                {(validInp) ? <p>Signup here :)</p> : <p className="text-red-600">Please enter valid Username and Password</p>}

                <div className="my-3 flex flex-col">
                    <input value={eusername} onChange={handleEusername} type="text" placeholder="Username" className="border border-black bg-transparent p-1 rounded-md w-52 mb-3" />
                    <input value={epassword} onChange={handleEpassword} type="text" placeholder="Password" className="border border-black bg-transparent p-1 rounded-md w-52 mb-3" />
                    <input value={ecpassword} onChange={handleEcpassword} type="text" placeholder="Conform Password" className="border border-black bg-transparent p-1 rounded-md w-52 mb-3" />
                    <button onClick={addUser} className="p-1 rounded-md bg-[#FCA201] w-24 mb-3">Signup</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;