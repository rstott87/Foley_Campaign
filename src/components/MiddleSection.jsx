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
        <div className='flex justify-between p-8 bg-gradient-to-r from-blue-300 to-blue-100'>
            <button class="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-md">
                CONTRIBUTE
            </button>
            <button class="w-full ml-2 bg-blue-600 text-white font-bold py-4 px-6 rounded-md"
                onClick={props.clickHandler}>
                {buttonLanguage}
            </button>
        </div>
    )
}

export default MiddleSection;