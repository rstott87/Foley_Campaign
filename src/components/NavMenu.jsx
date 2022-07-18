import CloseXButton from "./UI/CloseXButton";

function NavMenu(props) {
  return (
    <div className="fixed right-0 z-50 h-screen w-2/3 border-2 border-violet-600 bg-violet-900 text-center text-3xl font-bold text-white opacity-95 ">
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
