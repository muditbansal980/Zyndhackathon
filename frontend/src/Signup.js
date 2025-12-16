
import { NavLink } from "react-router-dom";
import { useState} from "react";
import { useNavigate} from "react-router-dom";


export default function SignUp() {

    const [Display, setDisplay] = useState("Choose Role");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [role, setrole] = useState("")
    const [income, setincome] = useState("")
    const [college, setcollege] = useState("")
    const navigate=useNavigate();

    const handleSubmit = async () => {
        const res = await fetch("https://localhost:9000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                role: role,
                income: income,
                college: college
            })
        });

        const data = await res.json();
        console.log(data);
        console.log(res.status)
        if(res.ok){
            navigate('/Home');
        }
        else{
            res.end("Registration Failed due to duplicate entries")
        }
    };
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-[20px] ">
            <form className="">
                <div className="flex flex-col justify-center items-center gap-[20px] bg-[purple] text-[white] pb-[20px] rounded-[10px]">
                    <h1 className="w-[100%] bg-[#898af3] flex justify-center items-center p-[10px] rounded-tl-[10px] rounded-tr-[10px] text-[32px] font-bold">Sign Up</h1>
                    <div className="flex flex-col gap-[20px] p-[20px]">

                        <input value={username} onChange={(e) => setusername(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Username" required />
                        <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Password" required />
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Email" required />
                        <select value={role} onChange={(e) => { setrole(e.target.value); setDisplay(e.target.value) }} className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" required>

                            <option value="" disabled selected className="">Choose Role</option>
                            <option onChange={(e) => setrole(e.target.value)} value="Student" className="bg-[white] text-[black]">Student</option>
                        </select>
                        {Display === "Student" && (
                            <div className="flex flex-col gap-[20px]">
                                <input onChange={(e) => setincome(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Income" required></input>
                                <input onChange={(e) => setcollege(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="College/School Name" required></input>
                            </div>
                        )}

                    </div>

                    <button onClick={handleSubmit} className="bg-[#898af3] p-[10px] rounded-[10px]">Register</button>
                    <p>Already have an account? <NavLink to="/Login" className="underline">Login</NavLink></p>
                </div>
            </form>
        </div >
    )
}