import React from 'react'
// import {Navbar,Home, About, Program,Contact, Footer, Mentor} from '../'
import {Navbar,Home,About,Courses,Teacher,Contact,Footer} from '../index'

const MainPage = () => {
  return (
    <div   className="font-Poppins bg-Solitude">
        <Navbar/>
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer /> 
    </div>
  )
}

export default MainPage
