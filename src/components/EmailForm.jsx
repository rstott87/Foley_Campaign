import { useState } from "react";
import Button from "./UI/Button";

function EmailForm(props) {
    const [enteredname, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredAgency, setEnteredAgency] = useState("");


    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const agencyChangeHandler = (e) => {
        setEnteredAgency(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const voter = {
            name: enteredname,
            email: enteredEmail,
            agency: enteredAgency
        }
        props.getEmail(voter);
        setEnteredName("")
        setEnteredEmail("")
        setEnteredAgency("")
    }

    let joinCampaign = ""

    if (props.language==="English"){
        joinCampaign = "Join Our Campaign"
    }
    else {
        joinCampaign = "Únete a nuestra campaña"
    }


    return (
        <form onSubmit={submitHandler}>
            <p className="text-center font-bold text-2xl">{joinCampaign}</p>
            <p className="text-center text-sm">For info and upates</p>
            <div className="grid grid-cols-2 gap-2 p-2">
                <div className="input-holder col-span-2">
                    <input
                        className="rounded-md box-border border border-slate-400 pl-3 min-w-full h-11 text-black"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredname}
                        placeholder={"Name*"}
                    />
                </div>
                <div className="input-holder col-span-2">
                    <input
                        className="rounded-md box-border border border-slate-400 pl-3 min-w-full h-11 text-black"
                        type="text"
                        onChange={emailChangeHandler}
                        value={enteredEmail}
                        placeholder={"Email*"}
                    />
                </div>
                <div className="input-holder ">
                    <input
                        className="rounded-md border border-slate-400 pl-2 w-full text-black h-11"
                        type="text"
                        onChange={agencyChangeHandler}
                        value={enteredAgency}
                        placeholder={"Agency"}
                    />
                </div>
                <div className="rounded-md box-border border border-slate-500 flex bg-blue-600 justify-center text-white font-semibold">
                    <button type='submit'>JOIN US</button>
                </div>
            </div>

        </form>
    )
}

export default EmailForm;