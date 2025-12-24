
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {

    const [Display, setDisplay] = useState("Choose Role");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [role, setrole] = useState("")
    const [income, setincome] = useState("")
    const [college, setcollege] = useState("")
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await fetch("https://zynd-hackathon.onrender.com/user/signup", {
            // const res = await fetch("http://localhost:9005/user/signup", {
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

            // const data = await res.json();
            // console.log("data", data);
            if (res.ok) {
                navigate('/Home');
            }
            else if (res.status === 401) {
                setError(true);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 2000)
    }, [error])
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-[20px] ">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center gap-[20px] bg-[purple] text-[white] pb-[20px] rounded-[10px]">
                    <h1 className="w-[100%] bg-[#898af3] flex justify-center items-center p-[10px] rounded-tl-[10px] rounded-tr-[10px] text-[32px] font-bold">Sign Up</h1>
                    <div className="flex flex-col gap-[20px] p-[20px]">

                        <input name="username" value={username} onChange={(e) => setusername(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Username" required />
                        <input name="password" value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Password" required />
                        <input name="email" value={email} onChange={(e) => setemail(e.target.value)} type="email" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Email" required />
                        <select name="role" value={role} onChange={(e) => { setrole(e.target.value); setDisplay(e.target.value) }} className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" required>

                            <option value="" disabled className="">Choose Role</option>
                            <option onChange={(e) => setrole(e.target.value)} value="Student" className="bg-[white] text-[black]">Student</option>
                        </select>
                        {Display === "Student" && (
                            <div className="flex flex-col gap-[20px]">
                                <input onChange={(e) => setincome(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Income" required></input>
                                <input onChange={(e) => setcollege(e.target.value)} type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="College/School Name" required></input>
                            </div>
                        )}

                    </div>

                    <button type="submit" className="bg-[#898af3] p-[10px] rounded-[10px] hover:cursor-pointer">Register</button>
                    <p>Already have an account? <NavLink to="/Login" className="underline">Login</NavLink></p>
                </div>
            </form>
            <div className={`bg-red-500 text-white p-4 rounded fixed top-0 ${error ? "block" : "hidden"}`}>
                <h2>Username or email already exists. Please try again with different credentials.</h2>
            </div>
        </div >
    )
}
