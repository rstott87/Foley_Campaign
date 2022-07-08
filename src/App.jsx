import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSetion'
import MiddleSection from './components/MiddleSection'
import BottomSection from './components/BottomSection'
import Button from './components/UI/Button'
import EmailForm from './components/EmailForm'
import PreviousMap from 'postcss/lib/previous-map'

function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState("English");

  const clickHandler = () => {
    if (language === "English") {
      setLanguage("Spanish")
    }
    else {
      setLanguage("English")
    }
  }

  return (
    <div className="App">
      <NavBar />
      <MainSection language={language} />
      <MiddleSection language={language} clickHandler={clickHandler} />
      <BottomSection />
    </div>
  )
}

export default App
