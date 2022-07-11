import SocialsItem from "./UI/SocialsItem";
function SocialsContainer() {
  return (
    <div className="flex w-6/12 justify-evenly py-2 ">
      <div className="h-min object-contain max-h-1">
        <img
          className=""
          src="src/images/icons8-instagram-50.png"
          alt=""
        />
      </div>
      <div className="h-min object-contain">
        <img src="src/images/icons8-facebook-50.png" alt="" />
      </div>
      <div className="h-min object-contain">
        <img src="src/images/icons8-twitter-50.png" alt="" />
      </div>
    </div>
  );
}

export default SocialsContainer;
