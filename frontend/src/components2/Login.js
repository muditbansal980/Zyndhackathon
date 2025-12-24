import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
export default function SignUp() {
    const [error, seterror] = useState(false)
    const [Errormsg, setErrormsg] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            seterror(false)
        }, 2000)
    }, [error])
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("https://zynd-hackathon.onrender.com/user/login", {
        // const res = await fetch("http://localhost:9005/user/login", {
            method: "POST",
            credentials: 'include', // <--- this
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            })
        }
        )
        if (res.status === 200) {
            navigate("/home")
        }
        else if (res.status === 401) {
            seterror(true)
            setErrormsg("User does not exist")
        }
        else if (res.status === 400) {
            seterror(true)
            setErrormsg("Please fill all the fields")
        }
    }
    // const [Display, setDisplay] = useState("");
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-[20px] ">
            <div className="flex flex-col justify-center items-center gap-[20px] bg-[purple] text-[white] pb-[20px] rounded-[10px]">
                <h1 className="w-[100%] bg-[#898af3] flex justify-center items-center p-[10px] rounded-tl-[10px] rounded-tr-[10px] text-[32px] font-bold">Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[20px] p-[20px]">
                        <input name="username" type="text" value={username} onChange={(e) => setusername(e.target.value)} className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Username" required />
                        <input name="password" type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Password" required />
                        <input name="email" type="email" value={email} onChange={(e) => setemail(e.target.value)} className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Email" required />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit"  className="bg-[#898af3] p-[10px] rounded-[10px] hover:cursor-pointer">Login</button>
                    </div>
                </form>
                <p>Don't have an account? <NavLink to="/SignUp" className="underline">Sign Up</NavLink></p>
            </div>
            <div className={`bg-red-500 text-white p-4 rounded fixed top-0 ${error ? "block" : "hidden"}`}>
                <h2>{Errormsg}</h2>
            </div>
        </div>
    )
}