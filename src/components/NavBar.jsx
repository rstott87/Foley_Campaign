import MenuButton from "./UI/MenuButton"
import SocialsContainer from "./SocialsContainer";

function NavBar() {
    return (
        <div className="nav-bar flex justify-between p-2 max-w-7xl" >
            <SocialsContainer />
            <MenuButton />
        </div>
    )
}

export default NavBar;