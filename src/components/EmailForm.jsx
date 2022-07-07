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

    return (
        <form onSubmit={submitHandler}>
            <p className="text-center font-bold text-2xl">Join Our Campaign</p>
            <p className="text-center text-sm">For info and upates</p>
            <div className="grid grid-cols-2 gap-3 p-2">
                <div className="input-holder col-span-2">
                    <input
                        className="pl-3 min-w-full h-11 text-black"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredname}
                        placeholder={"Name*"}
                    />
                </div>
                <div className="input-holder col-span-2">
                    <input
                        className="pl-3 min-w-full h-11 text-black"
                        type="text"
                        onChange={emailChangeHandler}
                        value={enteredEmail}
                        placeholder={"Email*"}
                    />
                </div>
                <div className="input-holder ">
                    <input
                        className="box-border min-w-full pl-2 text-black h-11"
                        type="text"
                        onChange={agencyChangeHandler}
                        value={enteredAgency}
                        placeholder={"Agency"}
                    />
                </div>
                <div className="flex ml-1 bg-red-400 justify-center">
                    <button type='submit'>JOIN US</button>
                </div>
            </div>
        </form>
    )
}

export default EmailForm;