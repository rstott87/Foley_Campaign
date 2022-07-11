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
        <div className='flex justify-between px-8 py-6 bg-gradient-to-r from-blue-200 to-blue-100'>
            <button class="shadow-md shadow-slate-800 w-full bg-violet-600 text-white font-bold py-4 px-6 rounded-md">
                CONTRIBUTE
            </button>
            <button class="shadow-md shadow-slate-800 w-full ml-2 bg-violet-600 text-white font-bold py-4 px-6 rounded-md"
                onClick={props.clickHandler}>
                {buttonLanguage}
            </button>
        </div>
    )
}

export default MiddleSection;