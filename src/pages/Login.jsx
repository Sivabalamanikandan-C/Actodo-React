import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const users = props.users;
    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const [ecpassword, setEcpassword] = useState("");
    const [ruser, setRuser] = useState(true);
    const navigate = useNavigate();

    const handleEusername = (event) => {
        setEusername(event.target.value);
    }

    const handleEpassword = (event) => {
        setEpassword(event.target.value);
    }

    const checkUser = () => {
        var foundUser = false;
        users.forEach((items) => {
            if (items.username === eusername && items.password === epassword) {
                console.log("Login Successfully");
                foundUser = true;
                navigate("/landing", { state: { users: eusername } });
            }

            if (foundUser === false) {
                console.log("Login Failed");
                setRuser(false);
            }
        });
    }

    return (
        <div className="p-10 bg-black">
            <div className="p-10 bg-[#EFEFEF]">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                {(ruser) ? <p>I help you to manage your activity after you Login :)</p> : <p className="text-red-600">Please signup before you Login or Enter valid Username and Password</p>}

                <div className="my-3 flex flex-col">
                    <input value={eusername} onChange={handleEusername} type="text" placeholder="Username" className="border border-black bg-transparent p-1 rounded-md w-52 mb-3" />
                    <input value={epassword} onChange={handleEpassword} type="text" placeholder="Password" className="border border-black bg-transparent p-1 rounded-md w-52 mb-3" />
                    <button onClick={checkUser} className="p-1 rounded-md bg-[#8272DA] w-24 mb-3">Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;