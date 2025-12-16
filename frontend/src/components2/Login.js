
import { NavLink } from "react-router-dom";
// import { useState } from "react";

export default function SignUp() {
    // const [Display, setDisplay] = useState("");
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-[20px] ">
            <div className="flex flex-col justify-center items-center gap-[20px] bg-[purple] text-[white] pb-[20px] rounded-[10px]">
                <h1 className="w-[100%] bg-[#898af3] flex justify-center items-center p-[10px] rounded-tl-[10px] rounded-tr-[10px] text-[32px] font-bold">Welcome Back</h1>
                <div className="flex flex-col gap-[20px] p-[20px]">
                    <input type="text" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Username" required/>
                    <input type="password" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Password" required/>
                    <input type="email" className="outline-none border-b-[1px] border-white text-[20px] p-[10px]" placeholder="Email" required/>
                </div>
                <NavLink to="/Home" ><button  className="bg-[#898af3] p-[10px] rounded-[10px]">Login</button></NavLink>
                <p>Don't have an account? <NavLink to="/SignUp" className="underline">Sign Up</NavLink></p>
            </div>

        </div>
    )
}