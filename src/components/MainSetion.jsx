import EmailForm from "./EmailForm";
import { useState } from "react";
import Logo from "./UI/Logo";
import ToggleButton from "./UI/ToggleButton";
import dave_podium from "../images/Dave_Podium_Resized_2.jpg";
import axios from "axios";



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
  //sets state to be ann array of users. may not be necessary for this project.
  const userEmail = (user) => {
    setSubmittedUser((prevUser) => {
      return [user, ...prevUser];
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-800 to-blue-400  text-neutral-50">
      <div className="absolute z-0 h-full w-auto opacity-30">
        <img src={dave_podium} alt="" className="h-full object-cover" />
      </div>
      <div className="relative z-20">
        {/* <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern text-bold text-black-100"></div> */}
        <Logo language={props.language} />
        <div className="grid gap-14">
          <EmailForm getEmail={userEmail} language={props.language} />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
