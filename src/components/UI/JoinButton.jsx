import { useState } from "react";

function JoinButton(props) {
  return (
    <div
      className={`flex rounded-md shadow-md shadow-slate-800 ${
        props.isDisabled ? "bg-blue-400" : "bg-blue-800"
      } justify-center font-semibold text-white lg:col-span-2 lg:p-3 lg:w-44 lg:m-auto `}
    >
      <button type="submit">JOIN US</button>
    </div>
  );
}

export default JoinButton;
