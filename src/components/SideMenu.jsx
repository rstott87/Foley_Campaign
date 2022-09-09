import CloseXButton from "./UI/CloseXButton";

function SideMenu(props) {
  //this class should only appear after slide in is complete. Necessary for positioning after slide in
  const right0 = props.fixedMenu ? "right-0" : "";
  return (
    // right-0 property has been delayed after click to only be there after slide in is done.
    <div
      className={`fixed z-50 ${right0} h-screen w-2/3 animate-slide-ltr border-2 border-violet-600 bg-violet-900 text-center text-3xl font-bold text-white opacity-95`}
    >
      <CloseXButton menuClickHandler={props.menuClickHandler} />
      <p className="pt-10">Dave Foley</p>
      <p className="text-lg">
        {props.language === "English"
          ? "For Local President"
          : "Para el presidente local"}
      </p>
      <ul className="pt-10 pl-8 text-left text-2xl leading-loose tracking-wider">
        <a href="#about">
          <li onClick={props.menuClickHandler}>
            {props.language === "English" ? "About" : "Sobre"}
          </li>
        </a>
        <li>{props.language === "English" ? "Issues" : "Problemas"}</li>
        <a href="#contact">
          <li onClick={props.menuClickHandler}>
            {props.language === "English" ? "Contact" : "Contacto"}
          </li>
        </a>
        <li onClick={props.contributeClick}>
          {props.language === "English" ? "Contribute" : "Contribuir"}
        </li>
        <a href="https://www.seiu509.org/2022-union-elections/">
          <li onClick={props.voteClick}>
            {props.language === "English" ? "How To Vote" : "Como Votar"}
          </li>
        </a>
      </ul>
    </div>
  );
}
export default SideMenu;
