import { useState } from "react";
import ToggleButton from "./UI/ToggleButton";
import MyDialog from "./MyDialog";

const MiddleSection = function (props) {
  const [openContributeModal, setOpenContributeModal] = useState(false) 
  let buttonLanguage = "";

  if (props.language === "English") {
    buttonLanguage = "Español";
  } else if (props.language === "Spanish") {
    buttonLanguage = "English";
  }
  // opens dialogue box that contains options for pyment 
  function contributeClick () {
      openContributeModal?setOpenContributeModal(false):setOpenContributeModal(true);
  }

  return (
    <div className="flex justify-evenly flex-nowrap w-full bg-gradient-to-r from-blue-200 to-blue-100 py-6">
      <div className="">
        <button onClick = {contributeClick} className="w-48 rounded-md bg-violet-600 p-3 font-bold text-white shadow-md shadow-slate-800">
          CONTRIBUTE
        </button>
        <button
          className="ml-3 w-36 rounded-md p-3 bg-violet-600 font-bold text-white shadow-md shadow-slate-800"
          onClick={props.clickHandler}
        >
          {buttonLanguage}
        </button>
      </div>
      {openContributeModal?<MyDialog contributeClick={contributeClick} openContributeModal={openContributeModal}/>:false}
    </div>
  );
};

export default MiddleSection;
