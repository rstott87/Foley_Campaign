import CloseXButton from "./UI/CloseXButton";

function NavMenu(props) {
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
          <li>{props.language === "English" ? "About" : "Sobre"}</li>
        </a>
        <li>{props.language === "English" ? "Issues" : "Problemas"}</li>
        <li>{props.language === "English" ? "Contact" : "Contacto"}</li>
        <li onClick={props.contributeClick}>
          {props.language === "English" ? "Contribute" : "Contribuir"}
        </li>
        <li>{props.language === "English" ? "Join" : "Unirse"}</li>
      </ul>
    </div>
  );
}
export default NavMenu;
