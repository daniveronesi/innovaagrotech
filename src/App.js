import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Produtos from './Pages/Produtos/Produto'
import Navbar from './Components/Navbar'



function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Produtos" element={<Produtos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
