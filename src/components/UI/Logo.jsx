
const Logo = function (props) {
    let name = "Dave";
    
    if (props.language === "English") {
        name = "Dave"
    }
    else {
        name = "Davíd"
    }



return (
    <div className="drop-shadow-2xl mx-auto mb-10 mt-8 w-48 font-bold p-2 text-neutral-100">
        <div className="flex justify-evenly">
            <p className="w-full bg-white border border-blue-900 text-xl font-extrabold fon text-center tracking-wide text-slate-600 -rotate-6 shadow-md shadow-slate-800">ELECT</p>
            <p className=" w-full text-center font-black tracking-wider text-2xl rotate">DAVE </p>


        </div>
        <p className="mt-1 text-neutral font-black tracking-wider text-center text-5xl">FOLEY</p>
        <div className="mt-2 flex">
            <div className="w-full  bg-white h-1"></div>
            <div className="text-4xl mx-2 leading-4">**</div>
            <div className=" w-full bg-white h-1"></div>
        </div>
        <p className="text-center text-lg leading-4">Local 509</p>
        <p className="text-center tracking-wider text-2xl" >President</p>
    </div>
)
}

export default Logo; 