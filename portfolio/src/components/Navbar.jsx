import React, { useState } from 'react'
import {Link} from "react-scroll"
import {FaBars,FaTimes} from "react-icons/fa"
import {motion} from "framer-motion"

function Navbar() {
  const [nav,setNav] = useState(false)

  const links = [
    {id:1,
    link:"home"},
    {id:2,
    link:"about"},
    {id:3,
    link:"projects"},
    {id:4,
    link:"experience"},
    {id:5,
    link:"contact"}
  ]

  return (
    <div className='flex justify-between items-center px-2 h-20 fixed text-white bg-[#423a8c] w-full'>
       <div>
        <p className='font-Rock text-5xl mx-2 uppercase max-md:text-3xl'> Niranjan</p>
       </div>
       <ul className=' hidden md:flex'>
       {
        links.map((item)=>{
          return(
            
        <li key={item.id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>{item.link}</li>
      
          )
        })
       }
       </ul>

       <div className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden' onClick={()=>{setNav(pre=>!pre)}}>
        {nav?<FaTimes size={30}></FaTimes>:
        <FaBars size={30} ></FaBars>
        }
        </div>
        
        {nav && <motion.ul initial={{clipPath:"circle(30px)"}} animate={{clipPath:"circle(1200px)"}} transition={{duration:1}} className='flex flex-col justify-center absolute top-0 left-0 items-center w-full h-screen bg-gradient-to-b from-[#423a8c] to-gray-700 '>
        {links.map((item)=>{
          return(
            <li key={item.id} className='p-2 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 text-2xl'>{item.link}</li>
          )
        })}
        </motion.ul>}
       
    </div>
  )
}

export default Navbar