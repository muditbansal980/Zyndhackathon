import Instagram from "../assests/instagram.png";
import Linkedin from "../assests/linkedin.png";
import Twitter from "../assests/twitter.png";
import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer bg-[oklch(0.21_0.06_258.54)] grid grid-cols-3 grid-rows-2 mt-[40px] p-[30px] w-[100%] ">
            <div className="text-[white]">
                <h className="font-bold">Let us help you</h>    
                <ul>
                    <NavLink to="/Home"><li className="hover:cursor-pointer">Home</li></NavLink>
                    <NavLink to="/CheckEligibility"><li className="hover:cursor-pointer">Check Eligibility</li></NavLink>
                    <NavLink to="/Benefits"><li className="hover:cursor-pointer">Benefits</li></NavLink>
                    <NavLink to="/MyApplications"><li className="hover:cursor-pointer">My Applications</li></NavLink>
                    <NavLink to="/Profile"><li className="hover:cursor-pointer">Profile</li></NavLink>
                </ul>
            </div>
            <div className="text-[white]">
                <h className="font-bold hover:cursor-pointer">Terms & Conditions</h>
                <ul>
                    <li className="hover:cursor-pointer">Legal</li>
                    <li className="hover:cursor-pointer">Terms</li>
                    <li className="hover:cursor-pointer">Services</li>
                </ul>
            </div>
            <div className="text-[white]">
                <h className="font-bold hover:cursor-pointer">Some Important Links</h>
                <ul>
                    <li className=" hover:cursor-pointer"><a href="https://www.mygov.in/">MyGov.in</a></li>
                </ul>
            </div>
            <div className="connect gap-[10px] col-span-3 justify-center items-center">
                <div className="flex justify-center items-center">
                    <h className="text-[white] m-[10px] font-bold">Connect with us</h>
                </div>
                <div className="flex gap-[10px] justify-center items-center">
                    <img className="w-[32px] hover:cursor-pointer " src={Instagram} alt="instagram" />
                    <img className="w-[32px] hover:cursor-pointer " src={Linkedin} alt="linkedin" />
                    <img className="w-[32px] hover:cursor-pointer invert" src={Twitter} alt="twitter" />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}