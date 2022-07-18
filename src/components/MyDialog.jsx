import { useState } from "react";
import { Dialog } from "@headlessui/react";

function MyDialog(props) {

  return (
    <Dialog
      open={props.openContributeModal}
      onClose={() => props.contributeClick}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-xl border-4 border-red-700 bg-white p-4 text-2xl">
          <Dialog.Title className="text-center">Choose a Way to Contribute</Dialog.Title>

          <div className="flex w-full justify-center">
            <button
              className="mt-10 text-lg w-24 rounded-md bg-violet-600 p-2 font-bold text-white shadow-md shadow-slate-800"
              onClick={props.contributeClick}
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default MyDialog;
