import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Logbook from './pages/Logbook.jsx'
import Foundations from './pages/Foundations.jsx'

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App