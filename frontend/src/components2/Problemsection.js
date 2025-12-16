import "../css/problems.css"
export default function Problems() {
    return (
        <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="flex justify-center items-center m-[30px]">
                <h1 className="key-challenges text-[44px] font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent text-center">Key Challenges</h1>
            </div>
            <div className="grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
                <div className="transform  hover:scale-110  transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">Complex Policies</h1></div>
                    <div className="text-[28px] flex justify-center items-center">
                        <p>📄⚠️</p>
                    </div>
                    <div><p className="text-[20px] text-[white] mt-[20px] text-center">Government policies are too long and difficult to interpret</p></div>
                    {/* <div class="transition-all ease-out bg-white opacity-40 absolute w-[10px] h-[300px] top-0 -skew-x-60 -translate-x-40 group-hover:translate-x-70"></div> */}
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">Eligibility Confusion</h1></div>
                    <div className="text-[28px]  flex justify-center items-center">❓🧩</div>
                    <div><p className="text-[20px] text-[white] mt-[20px] text-center">People don’t know if they qualify for benefits.</p></div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300  text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">Bureaucratic Hassle</h1></div>
                    <div className="text-[28px] flex justify-center items-center"> 🏢⏳</div>
                    <div><p className="text-[20px] text-[white] mt-[20px] text-center">Applications require too many steps and documents.</p></div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300 ">Missed Benefits</h1></div>
                    <div className="text-[28px] flex justify-center items-center"> 🚫💰</div>
                    <div><p className="text-[20px] text-[white] mt-[20px] text-center">Citizens lose benefits they deserve because the system is opaque.</p></div>
                </div>
            </div>
        </div>
    )
}