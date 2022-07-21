const Logo = function (props) {
  let name = "Dave";

  if (props.language === "English") {
    name = "Dave";
  } else {
    name = "Davíd";
  }

  return (
    <div className="mx-auto mb-10 mt-8 w-48 p-2 font-bold text-neutral-100 lg:pt-14 lg:mb-1">
      <div className="flex justify-evenly">
        <p className="w-full -rotate-12 border border-blue-900 bg-white text-center text-xl font-extrabold tracking-wide text-slate-600  shadow-md shadow-slate-800">
          ELECT
        </p>
        <p className="w-full text-center text-2xl font-black tracking-wider">
          DAVE{" "}
        </p>
      </div>
      <p className="text-neutral mt-1 text-center text-5xl font-black tracking-wider">
        FOLEY
      </p>
      <div className="mt-2 flex">
        <div className="h-1  w-full bg-white"></div>
        <div className="mx-2 text-4xl leading-4">**</div>
        <div className=" h-1 w-full bg-white"></div>
      </div>
      <p className="text-center text-lg leading-4">Local 509</p>
      <p className="text-center text-2xl tracking-wider">President</p>
    </div>
  );
};

export default Logo;
