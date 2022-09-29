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
  const [dialogMessage, setDialogMessage] = useState("hello");

  const menuClickHandler = () => {
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
    setMenuOpen(false);
    openContributeModal
      ? setOpenContributeModal(false)
      : setTimeout(function () {
          setOpenContributeModal(true);
        }, 0);
  }

  // opens dialog box that contains options for payment, and will close side menue if its open
  function contributeClick() {
    openCloseDialog();
    setDialogMessage("Donate now through PayPal");
  }

  function voteClick() {
    openCloseDialog();
    setDialogMessage("Visit the Official SEIU website for more info");
  }

  //SideMenu should only render when menuOpen state is true
  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} menuClickHandler={menuClickHandler} />
      <SideMenu
        menuOpen={menuOpen}
        menuClickHandler={menuClickHandler}
        language={language}
        contributeClick={contributeClick}
        voteClick={voteClick}
      />
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

//  <NavBar menuOpen={menuOpen} menuClickHandler={menuClickHandler} />;
//  {
//    menuOpen ? (
//      <SideMenu
//        fixedMenu={fixedMenu}
//        menuClickHandler={menuClickHandler}
//        language={language}
//        contributeClick={contributeClick}
//        voteClick={voteClick}
//      />
//    ) : (
//      false
//    );
//  }
