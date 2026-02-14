// import { useState } from "react"
import "../css/checkeligibility.css"
import Working from "./workinprogress/workinprogress";
export default function Recommendations() {
    // const [select, setSelect] = useState("Select Benefits")
    // console.log(select)
    return (
        <div className=" overflw-y-scroll">
            <div className="flex justify-center items-center">
                {/* <h className="recommendations" >Recommended for You</h> */}
                <Working />
            </div>
        </div>
    )
}