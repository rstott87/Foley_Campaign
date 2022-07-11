import { useState } from "react";


const MiddleSection = function (props) {
    let buttonLanguage = ""

    if (props.language === "English") {
        buttonLanguage = "Español"
    }
    else if (props.language === "Spanish") {
        buttonLanguage = "English"
    }

    return (
        <div className='flex justify-evenly px-8 py-6 bg-gradient-to-r w-full from-blue-200 to-blue-100'>
            <button class="shadow-md shadow-slate-800 w-48 bg-violet-600 text-white font-bold p-3 rounded-md">
                CONTRIBUTE
            </button>
            <button class="shadow-md shadow-slate-800 ml-3 bg-violet-600 w-36 text-white font-bold p-3 rounded-md"
                onClick={props.clickHandler}>
                {buttonLanguage}
            </button>
        </div>
    )
}

export default MiddleSection;