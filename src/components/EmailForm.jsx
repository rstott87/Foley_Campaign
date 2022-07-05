import { useState } from "react";
import Button from "./UI/Button";

function EmailForm() {
    const [enteredname, setEnteredName] = useState();
    const [enteredEmail, setEnteredEmail] = useState();
    const [enteredAgency, setEnteredAgency] = useState();

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const agencyChangeHandler = (e) => {
        setEnteredAgency(e.target.value);
    }

    return (
        <form className="">
            <div className="grid grid-cols-2 gap-2 p-2">
                <div className="input-holder col-span-2">
                    <input
                        className="min-w-full"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredname}
                        placeholder={"Name*"}
                    />
                </div>
                <div className="input-holder col-span-2">
                    <input type="text"
                        className="min-w-full"
                        onChange={emailChangeHandler}
                        value={enteredEmail}
                        placeholder={"Email*"}
                    />
                </div>
                <div className="input-holder ">
                    <input type="text"
                        onChange={agencyChangeHandler}
                        value={enteredAgency}
                        placeholder={"Agency"}
                    />
                </div>
                <div>
                    <input type="submit"
                        className="border mid w-full"
                        value="JOIN US"
                    />
                </div>
            </div>
        </form>
    )
}

export default EmailForm;