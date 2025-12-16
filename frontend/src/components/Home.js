// import Navbar from "./navbar";
import Batchicon from "../assests/batch-processing.png";
import ZigZag from "../assests/line-ascendant-graphic-of-zigzag-arrow.png";
import Applications from "../assests/resume.png";
import searchicon from "../assests/search-icon.png";
export default function Home() {
    return (
        <div className="w-[100%] p-[30px] flex flex-col justify-center">
            <div className="flex  justify-center sm:justify-between  items-center">
                <div>
                    <h1 className="text-[40px] font-bold text-[white] text-center">Welcome User!,</h1>
                    <p className="text-[white] text-center">Your benefits overview</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center bg-[white] rounded-[8px] p-[5px] pl-[10px] pr-[10px] hidden sm:block">
                        <ul className="flex gap-[10px] items-center ">
                            <li className="w-[24px]"><img src={searchicon} alt="search icon" /></li>
                            <li className="text-[18px] text-center ">Discover More</li>
                        </ul>
                    </button>
                </div>
            </div>
            <div className="cards-1">
                <div className="bg-white rounded-[8px] p-[10px] flex flex-col justify-center gap-[10px] m-[10px]">
                    <ul>
                        <li className="w-[40px]"><img src={Applications} alt="Applications" /></li>
                        <li>0</li>
                        <li>Applications</li>
                    </ul>
                </div>
                <div className="bg-white rounded-[8px] p-[10px] flex flex-col justify-center gap-[10px] m-[10px]">
                    <ul>
                        <li className="w-[40px]"><img src={Batchicon} alt="Benefits" /></li>
                        <li>5</li>
                        <li>Benefits</li>
                    </ul>
                </div>
                <div className="bg-white rounded-[8px] p-[10px] flex flex-col justify-center gap-[10px] m-[10px]">
                    <ul>
                        <li className="w-[40px]"><img src={ZigZag} alt="Eligibility" /></li>
                        <li>8</li>
                        <li>Eligibility Checked</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="bg-white rounded-[8px] p-[10px] flex flex-col justify-center gap-[10px] m-[10px]">
                    <h1>Your Applications</h1>
                    <div>
                        <div className="flex justify-between border-[1px] border-[black] rounded-[8px] p-[10px]">
                            <ul>
                                <li>Name of the application</li>
                                <li><p>date applied</p></li>
                                <li>if any recertification or anything</li>
                            </ul>
                            <div>
                                Status
                            </div>
                        </div>
                        <div className="flex justify-between border-[1px] border-[black] rounded-[8px] p-[10px] mt-[10px]">
                            <ul>
                                <li>Name of the application</li>
                                <li><p>date applied</p></li>
                                <li>if any recertification or anything</li>
                            </ul>
                            <div>
                                Status
                            </div>
                        </div>
                        <div className="flex justify-between border-[1px] border-[black] rounded-[8px] p-[10px] mt-[10px]">
                            <ul>
                                <li>Name of the application</li>
                                <li><p>date applied</p></li>
                                <li>if any recertification or anything</li>
                            </ul>
                            <div>
                                Status
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-[purple] text-[white] p-[10px] rounded-[8px] mt-[10px]">View All Applications</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
