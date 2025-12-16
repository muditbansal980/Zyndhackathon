import { useState } from "react"
import "../css/checkeligibility.css"
export default function CheckEligibility() {
    const [select, setSelect] = useState("Select Benefits")
    console.log(select)
    return (
        <div className=" overflw-y-scroll">
            <div className="flex justify-center items-center">
                <h className="check-eligibility" >Check Eligibility</h>
            </div>
            <form>
                <div className="m-[15px]">
                    <label className="text-white">Name:</label><br />
                    <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Name" /><br />
                </div>
                <div className="m-[15px]">
                    <label className="text-white">Email Id:</label><br />
                    <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Email Id" />
                </div>
            </form>
            <div className="m-[15px]">
                <label className="text-white"   >Select the type of Benefits you are looking for:</label><br />
                <select className="border-[2px] bg-[white] border-black p-[5px] outline-none" onChange={(e) => setSelect(e.target.value)}>
                    <option value="">Select Benefits</option>
                    <option value="Scholarship">Scholarship</option>
                    <option value="Job">Job</option>
                    <option value="Internship">Internship</option>
                    <option value="Government Schemes">Government Schemes</option>
                    <option value="Other Benefits">Other Benefits</option>
                </select>
            </div>
            {/* Conditional Rendering */}
            {select === "Scholarship" && (
                <div>
                    <form >
                        <div className="m-[15px]">
                            <label className="text-white">College</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="College Name"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Year</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Year"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Branch</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Branch"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Family Income</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Family Income"></input>
                        </div>
                    </form>
                </div>
            )}
            {select === "Job" && (
                <div>
                    <form>
                        <div className="m-[15px]">
                            <label className="text-white">Skills</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Skills"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Description of any Project(If any)</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Description of any project"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">LinkedIn</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="LinkedIn"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Github</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Github"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Experience(if any):</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Experience"></input>
                        </div>
                    </form>
                </div>
            )}
            {select === "Internship" && (
                <div>
                    <form>
                        <div className="m-[15px]">
                            <label className="text-white">Skills</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Skills"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Description of any Project(If any)</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Description of any project"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">LinkedIn</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="LinkedIn"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Github</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Github"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Experience(if any):</label><br />
                            <input className="border-[2px] bg-[white] border-black p-[5px] outline-none" type="text" placeholder="Experience"></input>
                        </div>
                    </form>
                </div>
            )}
            {select === "Government Schemes" && (
                <div>
                    <form>
                        <div className="m-[15px]">
                            <label className="text-white">Category</label><br />
                            <input className="border-1px outline-none" type="text" placeholder="Category"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Aadhar Number</label><br />
                            <input className="border-1px outline-none" type="text" placeholder="Aadhar Number"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Gender</label><br />
                            <input className="border-1px outline-none" type="text" placeholder="Gender"></input><br />
                        </div>
                        <div className="m-[15px]">
                            <label className="text-white">Family Income</label><br />
                            <input className="border-1px outline-none" type="text" placeholder="Family Income"></input>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}