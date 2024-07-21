import React from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import About from './Component/About'
import LocomotiveScroll from 'locomotive-scroll';
import Project from './Component/Project'
import Contact from './Component/Contact'
import Design from './Component/Design'



export default function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
    
       <About></About>
      <Project></Project>
     
      <Design></Design>
      
    
      <Contact></Contact>
      
      
      

      
    </>
  )
}
