import EmailForm from "./EmailForm";
import { useState } from "react";
import Logo from "./UI/Logo";
import ToggleButton from "./UI/ToggleButton";

const placeholderUser = [
  {
    first_name: "John",
    last_name: "Placeholder",
    personal_email: "johnP@placeholder.com",
    phone_number: "781-555-3291",
    local_chapter: "DOJ"
  },
  {
    first_name: "Anna",
    last_name: "Brown",
    personal_email: "brownh@placeholder.com",
    phone_number: "781-555-3218",
    local_chapter: "DCG"
  }
];

function MainSection(props) {
  const [submittedUser, setSubmittedUser] = useState(placeholderUser);
  //adds user info from form
  const userEmail = (user) => {
    setSubmittedUser((prevUser) => {
      console.log(user)
      return [user, ...prevUser];
    });
  };

  return (
    <div className="z-0 bg-gradient-to-br from-slate-800 to-blue-400 p-5 text-neutral-50 ">
      {/* <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern text-bold text-black-100"></div> */}
      <Logo language={props.language} />
      <div className="grid gap-14">
        <EmailForm getEmail={userEmail} language={props.language} />
      </div>
    </div>
  );
}

export default MainSection;

