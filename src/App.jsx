import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mainpage from './Components/Main/Mainpage'
import { Services } from './Components/Services/Services'
import Work from './Components/Work/Work'
import About from './Components/About me/About'
import { Client } from './Components/Client/Client'
import Thoughts from './Components/Thoughts/Thoughts'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Mainpage/>
    <Services/>
    <Work/>
    <About/>
    <Client/>
    <Thoughts/>
    <Form/>
    <Footer/>
    </>
  )
}

export default App
