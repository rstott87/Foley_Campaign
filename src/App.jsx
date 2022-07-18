import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSetion";
import MiddleSection from "./components/MiddleSection";
import BottomSection from "./components/BottomSection";
import NavMenu from "./components/NavMenu";

function App() {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openContributeModal, setOpenContributeModal] = useState(false);

  //opens side menu, but also closes the "contribute dialog box" if it's open
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

  // opens dialogue box that contains options for payment, and will close side menue if its open
  function contributeClick() {
    openContributeModal
      ? setOpenContributeModal(false)
      : setOpenContributeModal(true);
    setMenuOpen(false);
  }
  return (
    <div className="App">
      <NavBar menuClickHandler={menuClickHandler} />
      {menuOpen ? (
        <NavMenu
          menuClickHandler={menuClickHandler}
          language={language}
          contributeClick={contributeClick}
        />
      ) : (
        false
      )}
      <MainSection language={language} />
      <MiddleSection
        language={language}
        clickHandler={clickHandler}
        contributeClick={contributeClick}
        openContributeModal={openContributeModal}
      />
      <BottomSection />
    </div>
  );
}

export default App;
