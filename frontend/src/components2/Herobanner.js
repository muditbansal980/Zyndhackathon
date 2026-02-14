import { NavLink } from "react-router-dom"
import "./App.css"
export default function HeroBanner() {
    return (
        <div className="herobanner w-[100%]  text-white pt-[100px] pb-[100px] pr-[20px] pl-[20px] flex flex-col gap-[40px] bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] relative sm:flex ">
            <ul className="circles  w-full h-full overflow-hidden">
                <li className="circle circle1"></li>
                <li className="circle circle2"></li>
                <li className="circle circle3"></li>
                <li className="circle circle4"></li>
                <li className="circle circle5"></li>
                <li className="circle circle6"></li>
                <li className="circle circle7"></li>
                <li className="circle circle8"></li>
                <li className="circle circle9"></li>
                <li className="circle circle10"></li>
            </ul>
            <div className="top-[0px] left-[5px]  sm:block">
                <h1 className="text-[50px] font-[bold] bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent font-extrabold pr-[50px]">Your AI Government<br /> Benefits Assistant</h1>
                <div className="top-[150px] text-[1.5rem] p-[10px] left-[5px]  sm:block">
                    <p>Never miss out on government benefits again. We simplify complex policies, verify your eligibility, and guide you through every step</p>
                </div>
            </div>
            {/* <div className="top-[150px] left-[5px]  sm:block">
                <p>Never miss out on government benefits again. We simplify complex policies, verify your eligibility, and guide you through every step</p>
            </div> */}
            <div className="bottom-[20px] left-[5px] sm:block">
                <NavLink to="/CheckEligibility"><button className="transform hover:scale-110 transition-all duration-200 hover:cursor-pointer bg-[oklch(0.76_0.07_260.19)] p-[20px] rounded-[20px]">START ELEGIBILITY CHECK</button></NavLink>
            </div>
        </div>
    )
}