import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Modal from './Components/Modal'
// import Modal from './Components/Modal'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Modal />
      <Footer />
    </div>
  )
}

export default App
