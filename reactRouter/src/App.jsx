import { useState } from 'react'
import './App.css'
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'; 
function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
      <Outlet/>
      
    </>
  )
}

export default App
