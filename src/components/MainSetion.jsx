import EmailForm from "./EmailForm";
import { useState } from "react";
import Logo from "./UI/Logo";

const placeholderUser = [
  {
    name: "John Placeholder Smith",
    email: "Jsmith@placeholder.com",
    agency: "CSE"
  },
  {
    name: "Brian Placeholder Brown",
    email: "Brownh@placeholder.com",
    agency: "DDS"
  }
];

function MainSection(props) {
  const [submittedUser, setSubmittedUser] = useState(placeholderUser);
  //adds user info from form
  const userEmail = (user) => {
    setSubmittedUser((prevUser) => {
      return [user, ...prevUser];
    });
  };

  return (
    <div className="main-section relative bg-gradient-to-br from-slate-800 to-blue-400 p-5 text-neutral-50 ">
      {/* <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern text-bold text-black-100"></div> */}
      <Logo language={props.language} />
      <div className="grid gap-14">
        <EmailForm getEmail={userEmail} language={props.language} />
      </div>
    </div>
  );
}

export default MainSection;
Í