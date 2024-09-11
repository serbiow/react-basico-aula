import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Home from './pages/Home'
import Contato from './pages/Contato/Contato'
import Sobre from './pages/Sobre/Sobre'
import Menu from './pages/components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-main">
      <Menu></Menu>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contato />}></Route>
          <Route path='/about' element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
