import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSetion";
import MiddleSection from "./components/MiddleSection";
import BottomSection from "./components/BottomSection";
import SideMenu from "./components/SideMenu";
import ContactSection from "./components/ContactSection";

function App() {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openContributeModal, setOpenContributeModal] = useState(false);
  const [openVoteModal, setOpenVoteModal] = useState(false);
  const [fixedMenu, setFixedMenu] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("hello");

  //opens side menu, but also closes the "contribute dialog box" if it's open
  //if click happens when menu is open then 'fixedMenu' gets set to false to reset slide feature
  const menuClickHandler = () => {
    menuOpen
      ? setFixedMenu(false)
      : setTimeout(function () {
          setFixedMenu(true);
        }, 400);
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    setOpenContributeModal(false);
  };

  const clickHandler = () => {
    if (language === "English") {
      setTimeout(function () {
        setLanguage("Spanish");
      }, 400);
    } else {
      setTimeout(function () {
        setLanguage("English");
      }, 400);
    }
  };

  //this function will open dialog if its closed, and close if its open.
  // setMenuOpen(false) ensures that side menu is closed if dilaog opens
  function openCloseDialog() {
    openContributeModal
      ? setOpenContributeModal(false)
      : setOpenContributeModal(true);
    setMenuOpen(false);
  }

  // opens dialog box that contains options for payment, and will close side menue if its open
  function contributeClick() {
    openCloseDialog();
    setDialogMessage("contribute");
  }

  function voteClick() {
    openCloseDialog();
    setDialogMessage("Visit the Official SEIU website for more info");
  }

  //SideMenu should only render when menuOpen state is true
  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} menuClickHandler={menuClickHandler} />
      {menuOpen ? (
        <SideMenu
          fixedMenu={fixedMenu}
          menuClickHandler={menuClickHandler}
          language={language}
          contributeClick={contributeClick}
          voteClick={voteClick}
        />
      ) : (
        false
      )}
      <MainSection language={language} />
      <MiddleSection
        dialogMessage={dialogMessage}
        language={language}
        clickHandler={clickHandler}
        contributeClick={contributeClick}
        openContributeModal={openContributeModal}
      />
      <BottomSection />
      <ContactSection />
    </div>
  );
}

export default App;
