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
            <div className="grid grid-cols-2 gap-2 p-2">
                <div className="input-holder col-span-2">
                    <input
                        className="min-w-full text-black"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredname}
                        placeholder={"Name*"}
                    />
                </div>
                <div className="input-holder col-span-2">
                    <input type="text"
                        className="min-w-full text-black"
                        onChange={emailChangeHandler}
                        value={enteredEmail}
                        placeholder={"Email*"}
                    />
                </div>
                <div className="input-holder ">
                    <input type="text"
                        className="text-black"
                        onChange={agencyChangeHandler}
                        value={enteredAgency}
                        placeholder={"Agency"}
                    />
                </div>
                <div>
                    <button type='submit'>JOIN US</button>
                </div>
            </div>
        </form>
    )
}

export default EmailForm;