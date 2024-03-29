import { useState } from "react";
import { Dialog } from "@headlessui/react";
function ContributeDialog(props) {
  return (
    <Dialog
      open={props.openContributeModal}
      onClose={() => props.contributeClick}
    >
      <div className="fixed inset-0 z-40 flex items-center justify-center p-8">
        <div className="fixed h-screen w-screen bg-slate-800 opacity-90 "></div>
        <Dialog.Panel className="fixed mx-8 max-w-sm rounded-xl border-4 border-violet-700 bg-white p-4 text-2xl">
          <Dialog.Title className="text-center">
            {props.dialogMessage}
          </Dialog.Title>
          <div className="flex w-full justify-center">
            <button
              className="mt-10 w-24 rounded-md bg-violet-600 p-2 text-lg font-bold text-white shadow-md shadow-slate-800"
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

export default ContributeDialog;
