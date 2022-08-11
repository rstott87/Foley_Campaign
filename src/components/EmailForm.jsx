import axios from "axios";
import { useState } from "react";
import JoinButton from "./UI/JoinButton";
import { send } from "emailjs-com";

function EmailForm(props) {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
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

  const firstNameChangeHandler = (e) => {
    setEnteredFirstName(e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const lastNameChangeHandler = (e) => {
    setEnteredLastName(e.target.value);
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
      first_name: enteredFirstName,
      last_name: enteredLastName,
      personal_email: enteredEmail,
      phone_number: enteredPhone,
      local_chapter: enteredChapter
    };
    // send("service_mr00i87", "template_9n3a95t", toSend, "Lm-3BLvvZtqU2-L81")
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log("FAILED...", err);
    //   });
    axios({
      method: "post",
      url: "https://gentle-refuge-51189.herokuapp.com/user/create",
      data: {
        first_name: voter.first_name,
        last_name: voter.last_name,
        personal_email: voter.personal_email,
        phone_number: voter.phone_number,
        local_chapter: voter.local_chapter
      }
    });
    props.getEmail(voter);
    setEnteredFirstName("");
    setEnteredLastName("");
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

  const textTransition =
    props.language === "English" ? "animate-fade-in" : "animate-fade-in2";

  return (
    <div className="m-auto w-96 lg:w-full lg:px-10 lg:pt-12">
      <form onSubmit={submitHandler}>
        <div className="lg:pb-8">
          <p
            className={`${textTransition} text-center text-2xl font-bold lg:text-3xl`}
          >
            {joinCampaign}
          </p>
          <p className={`${textTransition} text-center text-sm lg:text-lg`}>
            {props.language === "English"
              ? "For info and upates"
              : "Para información y actualizaciones"}
          </p>
        </div>
        <div className="lg:gap- mr-6 grid grid-cols-2 gap-3 p-2">
          <div className="input-holder col-span-2 lg:col-span-1">
            <input
              className="box-border h-11 w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="name"
              type="text"
              onChange={firstNameChangeHandler}
              value={enteredFirstName}
              placeholder={
                props.language === "English" ? "First Name*" : "Nombre*"
              }
              required
            />
            <input
              className="box-border h-11 w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="name"
              type="text"
              onChange={lastNameChangeHandler}
              value={enteredLastName}
              placeholder={
                props.language === "English" ? "Last Name*" : "Nombre*"
              }
              required
            />
          </div>
          <div className="input-holder col-span-2 lg:col-span-1">
            <input
              className="box-border h-11 w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
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
          <div className="input-holder col-span-2 lg:col-span-1">
            <input
              className="box-border h-11 w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
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
