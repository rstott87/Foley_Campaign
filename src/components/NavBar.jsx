import MenuButton from "./UI/MenuButton"
import SocialsContainer from "./SocialsContainer";

function NavBar() {
    return (
        <div className="border-2 border-slate-400 nav-bar sticky top-0 z-50 bg-slate-300 opacity-80 flex justify-between p-2 max-w-7xl" >
            <SocialsContainer />
            <MenuButton />
        </div>
    )
}

export default NavBar;