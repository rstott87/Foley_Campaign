import MenuButton from "./UI/MenuButton";
import SocialsContainer from "./SocialsContainer";

function NavBar(props) {
  return (
    <div className="nav-bar sticky top-0 z-50 flex max-w-7xl justify-between bg-slate-200 opacity-95 shadow-lg px-2 py-1 shadow-slate-800">
      <SocialsContainer />
      <MenuButton menuClickHandler={props.menuClickHandler} />
    </div>
  );
}

export default NavBar;
