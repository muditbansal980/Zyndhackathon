export default function Profile() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-[10px]">
                <div className="flex  justify-between">
                    <div><h1>Profile</h1></div>
                    <div><h1>Edit</h1></div>
                </div>
                <div className="grid grid-cols-2 gap-[10px]">
                    <div className="grid grid-rows-auto">
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Name:</p>
                            <p>A</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Phone:</p>
                            <p>80923</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Email:</p>
                            <p>abcd@gmail.com</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Gender:</p>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-auto">
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Age:</p>
                            <p>100</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>State</p>
                            <p>UP</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Income</p>
                            <p>0.0</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Role</p>
                            <p>Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}