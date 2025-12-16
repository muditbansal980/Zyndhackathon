import AtalYojana from '../assests/atalyojana.png';
import Ayushman from "../assests/AyushmanBharatYojna.webp"
import Pradhanmantri from "../assests/Pradhanmantri.jpg"
import Mudrayojana from "../assests/Mudrayojana.jpg"
export default function Benefits() {
    return (
        <div className="flex  flex-col items-center">
            <div className="mb-[20px] mt-[20px]">
                <h1 className="text-[2rem] font-bold text-white text-center">Discover your Benefits</h1>
            </div>
            <div className="cards grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4 auto-rows-auto w-[100%] p-[20px] ">
                <div className="bg-white rounded-[8px] p-[10px] relative min-[1675px]:w-[400px] max-[1675px]:max-w-[400px] h-[400px]">
                    <div className="image h-[60%] overflow-y-hidden"><img className="h-full w-full object-cover" src={AtalYojana} alt="Atal Yojana" /></div>
                    <div className="description">
                        <h1 className="text-[1.2rem]">Atal Pension Yojana</h1>
                        <ul className="list-disc list-inside">
                            <li>For 18 to 40 years old</li>
                        </ul>
                    </div>
                    <div className="Apply flex justify-center items-center mt-[10px] absolute bottom-[10px] left-[40%]">
                        <button className="bg-blue-500 text-white px-[10px] py-[5px] rounded-[5px] hover:bg-blue-600">Apply Now</button>
                    </div>
                </div>
                <div className="bg-white rounded-[8px] p-[10px] relative min-[1675px]:w-[400px] max-[1675px]:max-w-[400px]  h-[400px]">
                    <div className="image h-[60%] overflow-y-hidden border-[1px] border-[black] "><img className="h-full w-full object-cover" src={Ayushman} alt="Ayushman Bharat Yojana" /></div>
                    <div className="description">
                        <h1 className="text-[1.2rem]">Ayushman Bharat Yojana</h1>
                        <ul className="list-disc list-inside">
                            <li>Health insurance for poor families</li>
                        </ul>
                    </div>
                    <div className="Apply flex justify-center items-center mt-[10px] absolute bottom-[10px] left-[40%]">
                        <button className="bg-blue-500 text-white px-[10px] py-[5px] rounded-[5px] hover:bg-blue-600 ">Apply Now</button>
                    </div>

                </div>
                <div className="bg-white rounded-[8px] p-[10px] relative min-[1675px]:w-[400px] max-[1675px]:max-w-[400px] h-[400px]">
                    <div className="image h-[60%] overflow-y-hidden"><img className="h-full w-full object-cover" src={Pradhanmantri} alt="Pradhan Mantri Awas Yojana" /></div>
                    <div className="description">
                        <h1 className="text-[1.2rem]">Ayushman Bharat Yojana</h1>
                        <ul className="list-disc list-inside">
                            <li>Health insurance for poor families</li>
                        </ul>
                    </div>
                    <div className="Apply flex justify-center items-center mt-[10px] absolute bottom-[10px] left-[40%]">
                        <button className="bg-blue-500 text-white px-[10px] py-[5px] rounded-[5px] hover:bg-blue-600">Apply Now</button>
                    </div>
                </div>
                <div className="bg-white rounded-[8px] p-[10px] relative min-[1675px]:w-[400px] max-[1675px]:max-w-[400px] h-[400px]">
                    <div className="image h-[60%] overflow-y-hidden"><img className="h-full w-full object-cover" src={Mudrayojana} alt="Mudra Yojana" /></div>
                    <div className="description">
                        <h1 className="text-[1.2rem]">Ayushman Bharat Yojana</h1>
                        <ul className="list-disc list-inside">
                            <li>Health insurance for poor families</li>
                        </ul>
                    </div>
                    <div className="Apply flex justify-center items-center mt-[10px] absolute bottom-[10px] left-[40%]">
                        <button className="bg-blue-500 text-white px-[10px] py-[5px] rounded-[5px] hover:bg-blue-600">Apply Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}