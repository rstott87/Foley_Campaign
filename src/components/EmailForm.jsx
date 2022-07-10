import { useState } from "react";
import Button from "./UI/Button";
import { send } from 'emailjs-com';

function EmailForm(props) {
    const [enteredname, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredAgency, setEnteredAgency] = useState("");
    const [enteredPhone, setEnteredPhone] = useState("");

    const [toSend, setToSend] = useState({
        from_name: 'Bob',
        to_name: 'Dave',
        message: "The user info is as follows: ",
        reply_to: 'bob',
      });


    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const agencyChangeHandler = (e) => {
        setEnteredAgency(e.target.value);
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const phoneChangeHandler = (e) => {
        setEnteredPhone(e.target.value);
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }


    const submitHandler = (e) => {
        e.preventDefault();
        const voter = {
            name: enteredname,
            email: enteredEmail,
            agency: enteredAgency
        }
        send(
            'service_mr00i87',
            'template_9n3a95t',
            toSend,
            'Lm-3BLvvZtqU2-L81'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        
        props.getEmail(voter);
        setEnteredName("")
        setEnteredEmail("")
        setEnteredAgency("")
        setEnteredPhone("")
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
                        name="name"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredname}
                        placeholder={"Name*"}
                    />
                </div>
                <div className="input-holder col-span-2">
                    <input
                        className="rounded-md box-border border border-slate-400 pl-3 min-w-full h-11 text-black"
                        name="email"
                        type="text"
                        onChange={emailChangeHandler}
                        value={enteredEmail}
                        placeholder={"Email*"}
                    />
                </div>
                <div className="input-holder col-span-2">
                    <input
                        className="rounded-md box-border border border-slate-400 pl-3 min-w-full h-11 text-black"
                        name="phone"
                        type="tel"
                        onChange={phoneChangeHandler}
                        value={enteredPhone}
                        placeholder={"Phone"}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                </div>
                <div className="input-holder ">
                    <input
                        className="rounded-md border border-slate-400 pl-2 w-full text-black h-11"
                        name="chapter"
                        type="text"
                        onChange={agencyChangeHandler}
                        value={enteredAgency}
                        placeholder={"Chapter"}
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