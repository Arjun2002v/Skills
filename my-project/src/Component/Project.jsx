import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function Project() {
  const container = useRef(null);
  
  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start center','end end']
  })

  const scale =  useTransform(scrollYProgress,[0,1],[.1,4])
  const scale1 =  useTransform(scrollYProgress,[0,1],[0,3])
  const scale2 =  useTransform(scrollYProgress,[0,1],[0,3])
   
  
  
  return (
    
   
    <div  className='Project'>  
    <div   className='pro'>

      <div   className='left'>
        {["Some","Of My "].map((item)=>(
          <h3>{item}</h3>
        ))}
      </div>

      <div className='centre'>
       {[ "Projects"].map((item)=>{
        return(
          <h3>{item}</h3>
        )
        
       })}
       </div>
       <div className='right'>
        {["Web Design","UI/UX Designs"].map((item)=>(
          <h3>{item}</h3>
        ))}
       </div>
      
    </div>
    <div className='m'>
    <div className='Container'>
    <motion.div className='image-container'>
      <motion.div style={{scale:scale}} className='image-div'>
        <div className='div'>
          <div className='img-text'>
            <h3>Edible.</h3>
          </div>
          <img src="./edible.jpg" alt="" />
        </div>
        </motion.div >
      </motion.div>
    </div>
    </div>
    <div className='m'>
    <div className='Container'>
    <motion.div className='image-container'>
      <motion.div style={{scale:scale1}} className='image-div'>
        <div className='div'>
          <div className='img-text'>
            <h3>Luxe.</h3>
          </div>
          <img src="./port.jpg" alt="" />
        </div>
        </motion.div >
      </motion.div>
    </div>
    </div>
    <div className='m'>
    <div className='Container'>
    <div className='image-container'>
      <motion.div style={{scale:scale2}} className='image-div'>
        <div className='div'>
          <div className='img-text'>
            <h3 className='mine'>Mine.</h3>
          </div>
          <img src="./portfolio.jpg" alt="" />
        </div>
        </motion.div >
      </div>
    </div>
    </div>
    
    </div>
    
  
  
   
  )
}
