import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'

const App = () => {
  return (
    <>
      <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/about" element={<AboutUs/>} />
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App;