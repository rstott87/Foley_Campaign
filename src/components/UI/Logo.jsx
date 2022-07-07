
const Logo = function () {
    return (
        <div className="mx-auto mb-20 mt-10 w-7/12 bg-gradient-to-r from-blue-500 to-blue-400  shadow-md shadow-slate-900 rounded-md font-bold p-6 text-neutral-200">
            <div className="flex justify-evenly">
                <p className="w-full border bg-blue-200 font-bold text-xl text-center tracking-wide text-slate-900">ELECT</p>
                <p className=" w-full text-center font-bold text-2xl">Dave</p>
            </div>
            <p className=" text-neutral font-black text-center text-4xl my-1">FOLEY</p>
            <div className="flex">
                <div className="w-full  bg-green-700 h-1"></div>
                <div className="text-2xl mx-2 leading-4">*</div>
                <div className=" w-full bg-green-700 h-1"></div>
            </div>
            <p className="text-center text-lg leading-4">Local 509</p>
            <p className="text-center text-2xl" >President</p>
        </div>
    )
}

export default Logo; 