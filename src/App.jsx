import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSetion'
import MiddleSection from './components/MiddleSection'
import BottomSection from './components/BottomSection'
import Button from './components/UI/Button'
import NavMenu from './components/NavMenu'
import PreviousMap from 'postcss/lib/previous-map'


function App() {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = () => {
    if (menuOpen) {
      setMenuOpen(false)
    }
    else {
      setMenuOpen(true);
    }
  }

  const clickHandler = () => {
    if (language === "English") {
      setTimeout(function(){setLanguage("Spanish")},400)
    }
    else {
      setTimeout(function(){setLanguage("English")},400);
    }
  }
  return (
    <div className="App">
      <NavBar menuClickHandler={menuClickHandler} />
      {menuOpen ? (
        <NavMenu menuClickHandler={menuClickHandler} language={language} />
      ) : (
        false
      )}
      <MainSection language={language} />
      <MiddleSection language={language} clickHandler={clickHandler} />
      <BottomSection />
    </div>
  );
}

export default App
