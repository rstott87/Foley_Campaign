import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSetion'
import ContributeButton from './components/UI/ContributeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <MainSection/>
    
        <ContributeButton/>

    </div>
  )
}

export default App
