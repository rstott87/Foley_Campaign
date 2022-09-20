import { useState } from "react";
import ToggleButton from "./UI/ToggleButton";
import ContributeDialog from "./ContributeDialog";

const MiddleSection = function (props) {
  let buttonLanguage = "";
  if (props.language === "English") {
    buttonLanguage = "Español";
  } else if (props.language === "Spanish") {
    buttonLanguage = "English";
  }

  return (
    <div className="flex w-full flex-nowrap justify-evenly bg-gradient-to-r from-blue-200 to-blue-100 py-6">
      <div className="">
        <button
          onClick={props.contributeClick}
          className="w-48 rounded-md bg-violet-600 p-3 font-bold text-white shadow-md shadow-slate-800"
        >
          CONTRIBUTE
        </button>
        <button
          className="ml-3 w-36 rounded-md bg-violet-600 p-3 font-bold text-white shadow-md shadow-slate-800"
          onClick={props.clickHandler}
        >
          {buttonLanguage}
        </button>
      </div>
      {props.openContributeModal ? (
        <ContributeDialog
          dialogMessage = {props.dialogMessage}
          contributeClick={props.contributeClick}
          openContributeModal={props.openContributeModal}
        />
      ) : (
        false
      )}
    </div>
  );
};

export default MiddleSection;
