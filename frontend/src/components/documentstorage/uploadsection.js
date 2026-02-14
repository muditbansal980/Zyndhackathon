export default function UploadArea() {
    return (
        <div className="max-w-xl mx-auto my-12 px-4 ">
            <div className="border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer relative overflow-hidden border-slate-300 bg-slate-50 ">
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <div className="text-6xl sm:text-7xl">📤</div>

                    <p className="text-slate-600">
                        <input type="file" className="text-indigo-600 font-medium flex flex-col justify-center items-center" />
                    </p>

                    <p className="text-sm text-slate-500 ">
                        Supports multiple files • Any file type
                    </p>
                </div>
            </div>
        </div>
    );
};

