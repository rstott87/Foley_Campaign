import { useState } from "react";
import JoinButton from "./UI/JoinButton";
import { send } from "emailjs-com";

function EmailForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredChapter, setEnteredChapter] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  // const [isDisabled, setIsDisabled] = useState(true)

  const [toSend, setToSend] = useState({
    from_name: "Bob",
    to_name: "Dave",
    message: "The following info was submitted by the user ",
    reply_to: "bob"
  });

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const chapterChangeHandler = (e) => {
    setEnteredChapter(e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const voter = {
      name: enteredName,
      email: enteredEmail,
      agency: enteredChapter
    };
    send("service_mr00i87", "template_9n3a95t", toSend, "Lm-3BLvvZtqU2-L81")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    props.getEmail(voter);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredChapter("");
    setEnteredPhone("");
  };

  let joinCampaign = "";

  if (props.language === "English") {
    joinCampaign = "Join Our Campaign";
  } else {
    joinCampaign = "Únete a nuestra campaña";
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p className="text-center text-2xl font-bold">{joinCampaign}</p>
        <p className="text-center text-sm">
          {props.language === "English"
            ? "For info and upates"
            : "Para información y actualizaciones"}
        </p>
        <div className="grid grid-cols-2 gap-3 p-2">
          <div className="input-holder col-span-2">
            <input
              className="box-border h-11 min-w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="name"
              type="text"
              onChange={nameChangeHandler}
              value={enteredName}
              placeholder={props.language === "English" ? "Name*" : "Nombre*"}
              required
            />
          </div>
          <div className="input-holder col-span-2">
            <input
              className="box-border h-11 min-w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="email"
              type="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
              placeholder={
                props.language === "English"
                  ? "Personal Email*"
                  : "Email Personal*"
              }
              required
            />
          </div>
          <div className="input-holder col-span-2">
            <input
              className="box-border h-11 min-w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="phone"
              type="tel"
              onChange={phoneChangeHandler}
              value={enteredPhone}
              placeholder={
                props.language === "English" ? "Phone" : "Número de Teléfono"
              }
            />
          </div>
          <div className="input-holder ">
            <input
              className="h-11 w-full rounded-md border border-slate-400 bg-neutral-100 pl-2 text-lg text-black shadow-md shadow-slate-700"
              name="chapter"
              type="text"
              onChange={chapterChangeHandler}
              value={enteredChapter}
              placeholder={"509 Chapter"}
            />
          </div>
          {/* post restoring last commit*/}
          <JoinButton />
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
