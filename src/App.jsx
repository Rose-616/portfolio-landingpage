import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Buttons  from './components/Buttons.jsx'
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from './components/Navbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Buttons/>
    </>
  )
}

export default App
