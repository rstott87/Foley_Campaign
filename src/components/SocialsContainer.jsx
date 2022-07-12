import SocialsItem from "./UI/SocialsItem";
function SocialsContainer() {
  return (
    <div className="flex w-5/12 justify-evenly p-1">
      <div className=" ">
        <img
          className=""
          src="src/images/icons8-instagram-50.png"
          alt=""
        />
      </div>
      <div className="h-min object-contain">
        <img
          className=""
          src="src/images/icons8-facebook-50.png"
          alt=""
        />
      </div>
      <div className="h-min object-contain">
        <img
          className=""
          src="src/images/icons8-twitter-50.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SocialsContainer;
