import MenuButton from "./UI/MenuButton";
import SocialsContainer from "./SocialsContainer";

function NavBar(props) {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-slate-200 px-3 py-2 opacity-95 shadow-lg shadow-slate-800">
      <SocialsContainer />
      <MenuButton menuOpen={props.menuOpen} menuClickHandler={props.menuClickHandler} />
    </div>
  );
}

export default NavBar;
