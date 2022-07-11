import { useState } from "react";

function JoinButton(props) {

    return (
        <div className={`shadow-md shadow-slate-800 rounded-md flex ${props.isDisabled?'bg-blue-400':'bg-blue-800'} justify-center text-white font-semibold`}>
            <button type='submit'>
                JOIN US
            </button>
        </div>
    )
}

export default JoinButton;