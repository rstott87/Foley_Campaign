import axios from "axios";
import { useState } from "react";
import JoinButton from "./UI/JoinButton";

function EmailForm(props) {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredChapter, setEnteredChapter] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  // const [isDisabled, setIsDisabled] = useState(true)

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
  // on form submit, voter object is created from the data that was entered as
  //state in the form. the data is then sent to the database using axiox. lastly the voter object is passed to the function that creates a state of voters of as an array in MainSection
  const submitHandler = (e) => {
    e.preventDefault();
    const voter = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      personal_email: enteredEmail,
      phone_number: enteredPhone,
      local_chapter: enteredChapter
    };

    axios({
      method: "post",
      url: "https://gentle-refuge-51189.herokuapp.com/private/user/create",
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
    <div id="join" className="m-auto w-96 pb-8 lg:w-2/3 xl:w-full lg:px-10 lg:pt-12">
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
        <div className="lg:gap grid grid-cols-2 gap-3 p-2">
          <div className="input-holder col-span-2 lg:col-span-1">
            <input
              className="box-border h-11 w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="name"
              type="text"
              onChange={firstNameChangeHandler}
              value={enteredFirstName}
              placeholder={
                props.language === "English" ? "First Name*" : "Primer nombre*"
              }
              required
            />
          </div>
          <div className="input-holder col-span-2 lg:col-span-1">
            <input
              className="box-border h-11 w-full rounded-md border border-slate-400 pl-3 text-lg text-black shadow-md shadow-slate-700"
              name="name"
              type="text"
              onChange={lastNameChangeHandler}
              value={enteredLastName}
              placeholder={
                props.language === "English" ? "Last Name*" : "Appelido*"
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
          <JoinButton language={props.language} />
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
