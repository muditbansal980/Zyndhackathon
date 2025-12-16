import "../css/feature.css"
export default function features() {
    return (
        <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="flex justify-center items-center m-[30px]">
                <h1 className="features text-[44px] font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">Features</h1>
            </div>
            {/* <div className="grid min-[1600px]:grid-cols-4 min-[1200px]:grid-cols-3 grid-rows-1 min-[800px]:grid-cols-2 grid-rows-2 min-[0px]:grid-cols-1 grid-rows-4 gap-[20px]"> */}
            <div className="grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto">    
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300">📑 Policy Summaries</h1></div>
                    <div><p className="text-[20px] mt-[30px] text-center text-[white]">Government policies are too long and difficult to interpret</p></div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)] ">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300">📝 One‑Click Eligibility Checker</h1></div>
                    
                    <div><p className="text-[20px] mt-[30px] text-center text-[white]">People don’t know if they qualify for benefits.</p></div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300">💡 Smart Benefit Suggestions</h1></div>
                    
                    <div><p className="text-[20px] mt-[30px] text-center text-[white]">Applications require too many steps and documents.</p></div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300">📂 Application Helper</h1></div>
                    
                    <div><p className="text-[20px] mt-[30px] text-center text-[white]">Citizens lose benefits they deserve because the system is opaque.</p></div>
                </div>
                <div className="transform hover:scale-110 transition-all duration-200 border-[2px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-black p-[20px] w-full max-w-[350px] h-[350px] mx-auto rounded-[10px] shadow-[0px_14px_28px_rgba(14,13,96),_0px_10px_10px_rgba(0,0,0,0.22)]">
                    <div><h1 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-zinc-300">🔁 Recheck & Updates</h1></div>
                    
                    <div><p className="text-[20px] mt-[30px] text-center text-[white]">Citizens lose benefits they deserve because the system is opaque.</p></div>
                </div>
            </div>
        </div>
    )
}