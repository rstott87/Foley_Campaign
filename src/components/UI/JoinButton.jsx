import { useState } from "react";

function JoinButton(props) {
  return (
    <div
      className={`flex rounded-md shadow-md shadow-slate-800 ${
        props.isDisabled ? "bg-blue-400" : "bg-blue-800"
      } justify-center font-semibold text-white`}
    >
      <button type="submit">JOIN US</button>
    </div>
  );
}

export default JoinButton;
