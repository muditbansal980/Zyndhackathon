// import AtalYojana from '../assests/atalyojana.png';
// import Ayushman from "../assests/AyushmanBharatYojna.webp"
// import Pradhanmantri from "../assests/Pradhanmantri.jpg"
// import Mudrayojana from "../assests/Mudrayojana.jpg"
import { useEffect, useState } from 'react';
export default function Benefits() {
    const [benefitsData, setBenefitsData] = useState([]);
    const [placeholder1, setPlaceholder1] = useState([{ BasicFilter: ["Select Category", "Select Ministry"] }, { Location: ["Select State", "Select State Category"] }, { Eligibility: ["Select Gender", "Select Age"] }]);
    useEffect(() => {
        async function fetchBenefits() {
            const res = await fetch("https://zynd-hackathon.onrender.com/benefits/schemes", {
            // const res = await fetch("http://localhost:9005/benefits/schemes", {
                method: "GET",
                credentials: 'include', // <--- this
                headers: {
                    "Content-Type": "application/json"
                }
            }

            )
            if (res.status === 200) {
                const data = await res.json();
                console.log("Benefits data:", data);
                setBenefitsData(data);
            }
        }
        fetchBenefits();
    }, [])
    function handlefilter(e) {
        if (e.target.id === "basic-filters") {
            setPlaceholder1([{ BasicFilter: ["Select Category", "Select Ministry"] }])
            console.log(placeholder1)
        }
        else if (e.target.id === "location") {
            setPlaceholder1([{ Location: ["Select State", "Select State Category"] }])
            console.log(placeholder1)
        }
        else if (e.target.id === "eligibility") {
            setPlaceholder1([{ Eligibility: ["Select Gender", "Select Age"] }])
            console.log(placeholder1)
        }
    }
    // console.log("Benefitsdata huhuhuhu:-", benefitsData);
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-[20px] mt-[20px]">
                <h1 className="text-[2rem] font-bold text-white text-center">Find Benefits for you</h1>
            </div>
            <div className="m-[20px] bg-white p-[10px] rounded-[8px] w-[70%] text-center">

                <input type="text" placeholder="Search Benefits..." className="outline-none w-[100%] p-[10px] text-[1rem] rounded-[8px] border-[1px] border-[gray]" />
                <div className="grid grid-rows-2 grid-cols-auto">
                    <div className="grid grid-cols-4 gap-[10px] mt-[10px] mb-[10px]">
                        <div id="basic-filters" className=""><button id="basic-filters" type="button" onClick={handlefilter} className="border-none hover:cursor-pointer rounded-[5px] w-[100%] px-[10px] py-[5px]">Basic Filter</button></div>
                        <div id="location" className=" "><button id="location" type="button" onClick={handlefilter} className="border-none hover:cursor-pointer rounded-[5px] w-[100%] px-[10px] py-[5px]">Location</button></div>
                        <div id="eligibility" className="hover:cursor-pointer"><button id="eligibility" type="button" onClick={handlefilter} className="border-none hover:cursor-pointer rounded-[5px] w-[100%] px-[10px] py-[5px]">Eligibility</button></div>
                        <div id="date" className="hover:cursor-pointer"><button id="date" type="button" onClick={handlefilter} className="border-none hover:cursor-pointer rounded-[5px] w-[100%] px-[10px] py-[5px]">Date</button></div>
                    </div><hr />
                    <div className="grid grid-cols-2">
                        <div>
                            <input type="text" placeholder={`${placeholder1[0][Object.keys(placeholder1[0])[0]][0]}`} className="outline-none w-[80%] p-[5px] text-[1rem] rounded-[8px] border-[1px] border-[gray]" />
                        </div>
                        <div>
                            <input type="text" placeholder={`${placeholder1[0][Object.keys(placeholder1[0])[0]][1]}`} className="outline-none w-[80%] p-[5px] text-[1rem] rounded-[8px] border-[1px] border-[gray]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-h-[800px] overflow-y-auto bg-[lightgray] rounded-[10px] w-[90%]'>
                <div className='font-bold text-[3rem] text-white flex justify-center'><h>SCHEMES</h></div>
                <div className="cards grid gap-[20px] max-[640px]:grid-cols-1 sm:grid-cols-2 max-[1464px]:grid-cols-3 lg:grid-cols-4   auto-rows-auto w-[100%] p-[20px] ">

                    {/* <div className="bg-white rounded-[8px] p-[10px] relative min-[1675px]:w-[400px] max-[1675px]:max-w-[400px] h-[400px]">
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
            </div> */}

                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="bg-white rounded-[8px] p-[10px] relative min-[1675px]:w-[350px] max-[1675px]:max-w-[380px] min-h-[500px]">
                            <div className="image h-[50%] overflow-y-hidden border-[1px] border-black text-black"><img className="h-full w-full object-cover" src={benefit.imageUrl} alt={benefit.title} /></div>
                            <div className="description ">
                                <h1 className="text-[1.5rem] font-bold ">{benefit.title}</h1>
                                <p>{benefit.about}</p>
                            </div>
                            <div className="Apply flex justify-center items-center mt-[30px] absolute bottom-[10px] left-[40%]">
                                <button className="bg-blue-500 text-white px-[10px] py-[5px] rounded-[5px] hover:bg-blue-600">Apply Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
