import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSetion'
import MiddleSection from './components/MiddleSection'
import BottomSection from './components/BottomSection'
import Button from './components/UI/Button'
import EmailForm from './components/EmailForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <MiddleSection/>
      <BottomSection />
    </div>
  )
}

export default App
