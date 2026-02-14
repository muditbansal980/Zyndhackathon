import rightarrow from "../assests/right-arrow.png"
import "../css/governmentscheme.css"
export default function GovernmentSchemes() {
    return (
        <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="flex justify-center items-center m-[30px]">
                <h1 className="government-schemes text-[44px] font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent text-center">Top Government Schemes</h1>

            </div>
            <div className="grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
                <div className="transform hover:scale-110 transition-all duration-200 relative border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)] ">
                    <div>
                        <h1 className="text-[32px] font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">PMAY</h1>
                        <p className="mt-[30px] text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis modi culpa ullam inventore a totam in veritatis libero! Blanditiis facere provident sit odio ut iusto minus expedita ab labore.</p>
                    </div>
                    <div className="absolute bottom-[10px] left-[10px] flex gap-[10px] m-[10px]">
                        <button className="font-bold hover:underline cursor-pointer">Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 relative border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div>
                        <h1 className="text-[32px] font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">Ayushman Bharat</h1>
                        <p className="mt-[30px] text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad ab ullam amet ipsa nobis incidunt distinctio nisi consequatur ut culpa, error labore quo adipisci voluptate explicabo ea exercitationem illo.</p>
                    </div>
                    <div className="absolute bottom-[10px] left-[10px] flex gap-[10px] m-[10px]">
                        <button className="font-bold hover:underline cursor-pointer">Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 relative border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div>
                        <h1 className="text-[32px] font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">PM Kisan</h1>
                        <p className="mt-[30px] text-center text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus a quos odit, tempore rem hic voluptatem natus totam aliquam cumque at aliquid itaque. Facere iure tenetur nobis ea voluptate.</p>
                    </div>
                    <div className="absolute bottom-[10px] left-[10px] flex gap-[10px] m-[10px]">
                        <button className="font-bold hover:underline cursor-pointer">Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 relative border-[2px] border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div>
                        <h1 className="text-[32px] font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">Scholarships </h1>
                        <p className="mt-[30px] text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore corporis quis obcaecati natus aliquam quia alias, deserunt possimus ad voluptatum vel cupiditate, dolorem at nulla! Cum non est quidem.</p>
                    </div>
                    <div className="absolute bottom-[10px] left-[10px] flex gap-[10px] m-[10px]">
                        <button className="font-bold hover:underline cursor-pointer">Apply Now</button>
                        <img className="w-[24px] " src={rightarrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}