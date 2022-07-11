import MenuButton from "./UI/MenuButton";
import SocialsContainer from "./SocialsContainer";

function NavBar(props) {
  return (
    <div className="nav-bar sticky top-0 z-50 flex max-w-7xl justify-between bg-slate-100 p-2 opacity-95 shadow-lg shadow-slate-800">
      <SocialsContainer />
      <MenuButton menuClickHandler={props.menuClickHandler} />
    </div>
  );
}

export default NavBar;
