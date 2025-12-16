import Sidebar from "./sidebar";
import profile from "../assests/user.png";
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchBox from "./Searchbox";
import searchicon from "../assests/search-icon.png";
// import Home from "./Home";
export default function Navbar() {
    return (
        <div className="navbar flex justify-between p-[20px] bg-[purple] w-[100%]">
            <SearchBox />
            <div className="logo flex justify-between sm:w-[auto]">
                <Sidebar />
                
                <h1 className="bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent  font-extrabold text-[24px]">GOVLAW</h1>
            </div>
            <div>
                <SearchBar />
            </div>
            <nav className="elements hidden sm:block">

                <ul className="flex gap-[30px] text-white items-center">
                    <li className="hidden max-[1400px]:block">
                        <button className="flex gap-[5px] items-center">
                            <img src={searchicon} className="w-[24px]" alt="search" />
                            <h1>Ctrl K</h1>
                        </button></li>
                    <li className="transform hover:scale-110 border-b-[white] hover:border-b-[2px] transition-all duration-200"><NavLink to="/Home" className={({ isActive }) => `hover:cursor-pointer  ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>
                        Home
                    </NavLink></li>
                    {/* <Link to="/" className= "hover:cursor-pointer">Home</Link> */}
                    <li className="transform hover:scale-110 border-b-[white] hover:border-b-[2px] transition-all duration-200"><NavLink to="/CheckEligibility" className={({ isActive }) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>Check Eligibility</NavLink></li>
                    <li className="transform hover:scale-110 border-b-[white] hover:border-b-[2px] transition-all duration-200"><NavLink to="/Benefits" className={({ isActive }) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>Benefits</NavLink></li>
                    <li className="transform hover:scale-110 border-b-[white] hover:border-b-[2px] transition-all duration-200"><NavLink to="/InterpretLaw" className={({ isActive }) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>Interpretation of Law</NavLink></li>
                    <li className="transform hover:scale-110 border-b-[white] hover:border-b-[2px] transition-all duration-200"><NavLink to="/MyApplications" className={({ isActive }) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>My Applications</NavLink></li>
                    <li className="transform hover:scale-110 border-b-[white] hover:border-b-[2px] transition-all duration-200"><NavLink to="/Profile" className={({ isActive }) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}><img className="w-[24px]" src={profile} alt="profile" /></NavLink></li>
                </ul>
            </nav>
        </div>
    );
}