import CloseXButton from "./UI/CloseXButton";

function SideMenu(props) {
  //this class should only appear after slide in is complete. Necessary for positioning after slide in
  const width0 = props.menuOpen ? "left-1/3" : "left-full";


  return (
    // right-0 property has been delayed after click to only be there after slide in is done.
    <div
      className={`fixed z-50 ${width0} h-screen w-2/3 border-l-2 border-violet-500 bg-violet-900 text-center text-3xl font-bold text-white opacity-95 duration-500`}
    >
      <CloseXButton menuClickHandler={props.menuClickHandler} />
      <p className="pt-10">Dave Foley</p>
      <p className="text-lg">
        {props.language === "English"
          ? "For Local President"
          : "Para el presidente local"}
      </p>
      <ul className="pt-10 pl-8 text-left text-2xl leading-loose tracking-wider">
        <a href="#our_vision">
          <li onClick={props.menuClickHandler}>
            {props.language === "English" ? "Our Vision" : "Nuestra Visión"}
          </li>
        </a>
        <a href="#contact">
          <li onClick={props.menuClickHandler}>
            {props.language === "English" ? "Contact" : "Contacto"}
          </li>
        </a>
        <li onClick={props.contributeClick}>
          {props.language === "English" ? "Contribute" : "Contribuir"}
        </li>
        <a>
          <li onClick={props.voteClick}>
            {props.language === "English" ? "How To Vote" : "Como Votar"}
          </li>
        </a>
      </ul>
    </div>
  );
}
export default SideMenu;
