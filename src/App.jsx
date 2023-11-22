import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Signin from './Pages/signin'

const App = () => {
  return (
    <>
      <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/about" element={<AboutUs/>} />
             <Route path='*' element={<NotFound/>} />
             <Route path='/signup' element={<Signup/>} />
             <Route path='/login' element={<Signin/>} />
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App;