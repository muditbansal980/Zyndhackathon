import menu from "../assests/menu.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {  
    const [display, setDisplay]=useState(false);
    return (
        <div className="sidebar sm:hidden">
            <div className="logo hover:cursor-pointer transform hover:scale-110 transition-all duration-200">
                <img onClick={()=> setDisplay(o=>!o)} className="w-[24px]" src={menu} alt="sidebar" />
            </div>
            <div className={`items ${display ? '' : 'hidden'}`}>
                <ul className="text-white">
                    <li className="hover:cursor-pointer transform hover:scale-110 transition-all duration-200">
                        <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`} to="/Home">Home</NavLink>
                    </li>
                    <li className="hover:cursor-pointer transform hover:scale-110 transition-all duration-200">
                        <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`} to="/CheckEligibility">Check Eligibility</NavLink>
                    </li>
                    <li className="hover:cursor-pointer transform hover:scale-110 transition-all duration-200   ">
                        <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`} to="/Benefits">Benefits</NavLink>
                    </li>
                    <li className="hover:cursor-pointer transform hover:scale-110 transition-all duration-200">
                        <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`} to="/InterpretLaw">Interpretation of Law</NavLink>
                    </li>
                    <li className="hover:cursor-pointer transform hover:scale-110 transition-all duration-200">
                        <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}   to="/MyApplications">My Applications</NavLink>
                    </li>
                    <li className="hover:cursor-pointer transform hover:scale-110 transition-all duration-200">
                        <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`} to="/Profile">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}