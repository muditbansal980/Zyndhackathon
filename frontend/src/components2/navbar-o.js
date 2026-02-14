import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar p-[20px] bg-[purple] w-[100%]">
            <nav className="flex justify-between w-[100%]">
                <div>
                    <h1 className="bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent  font-extrabold text-[24px]">GOVLAW</h1>
                </div>
                <div className="flex gap-[20px]">
                    <NavLink to="/Login"><button className="bg-[oklch(0.76_0.07_260.19)] text-white pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-[8px] hover:cursor-pointer">Login</button></NavLink>
                    <NavLink to="/SignUp"><button className="bg-[oklch(0.76_0.07_260.19)] text-white pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-[8px] hover:cursor-pointer">Get Started</button></NavLink>
                </div>
            </nav>
        </div>
    );
}