import MenuButton from "./UI/MenuButton"
import SocialsContainer from "./SocialsContainer";

function NavBar() {
    return (
        <div className="nav-bar sticky top-0 z-50 bg-slate-100 opacity-80 flex justify-between p-2 max-w-7xl" >
            <SocialsContainer />
            <MenuButton />
        </div>
    )
}

export default NavBar;