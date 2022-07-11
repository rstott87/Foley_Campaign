import { useState } from "react";

const MiddleSection = function (props) {
  let buttonLanguage = "";

  if (props.language === "English") {
    buttonLanguage = "Español";
  } else if (props.language === "Spanish") {
    buttonLanguage = "English";
  }

  return (
    <div className="flex w-full justify-evenly bg-gradient-to-r from-blue-200 to-blue-100 px-8 py-6">
      <button class="w-48 rounded-md bg-violet-600 p-3 font-bold text-white shadow-md shadow-slate-800">
        CONTRIBUTE
      </button>
      <button
        class="ml-3 w-36 rounded-md bg-violet-600 p-3 font-bold text-white shadow-md shadow-slate-800"
        onClick={props.clickHandler}
      >
        {buttonLanguage}
      </button>
    </div>
  );
};

export default MiddleSection;
