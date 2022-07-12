import SocialsItem from "./UI/SocialsItem";
function SocialsContainer() {
  return (
    <div className="flex w-5/12 justify-evenly p-1">
      <div className=" ">
        <img
          className="h-10 object-scale-down"
          src="src/images/icons8-instagram-50.png"
          alt=""
        />
      </div>
      <div className="h-min object-contain">
        <img
          className="h-10 object-scale-down"
          src="https://github.com/rstott87/Foley_Campaign/blob/64d6a562dbc1c7d307149584f456946f673aa2c6/src/images/icons8-facebook-50.png"
          alt=""
        />
      </div>
      <div className="h-min object-contain">
        <img
          className="h-10 object-scale-down"
          src="src/images/icons8-twitter-50.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SocialsContainer;
