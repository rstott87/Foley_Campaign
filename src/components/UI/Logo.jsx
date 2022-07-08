
const Logo = function (props) {
    let name = "Dave";
    
    if (props.language === "English") {
        name = "Dave"
    }
    else {
        name = "Davíd"
    }



return (
    <div className="mx-auto mb-32 mt-8 w-7/12 font-bold p-2 text-neutral-100">
        <div className="flex justify-evenly">
            <p className="w-full bg-white border border-blue-600 text-xl font-extrabold fon text-center tracking-wide text-slate-600 -rotate-6">ELECT</p>
            <p className=" w-full text-center font-black tracking-wide text-2xl rotate">{name} </p>


        </div>
        <p className="text-shadow mt-1 text-neutral font-black tracking-wider text-center text-5xl">FOLEY</p>
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