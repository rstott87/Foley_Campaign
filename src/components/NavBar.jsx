import MenuButton from "./UI/MenuButton"
import SocialsContainer from "./SocialsContainer";

function NavBar() {
    return (
        <div className=" flex justify-between h-auto p-2 max-w-7xl" >
            <SocialsContainer />
            <MenuButton />
        </div>
    )
}

export default NavBar;