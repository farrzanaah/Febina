import { Route, Routes } from 'react-router-dom'
// import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App