import React, { useState } from 'react'
import {Link} from "react-scroll"
import {FaBars,FaTimes} from "react-icons/fa"
import {motion} from "framer-motion"
import NG2 from "../assets/NG2.png"

function Navbar() {
  const [nav,setNav] = useState(false)

  const links = [
    {id:1,
    link:"home"},
    {id:2,
    link:"about",
  offset:30},
    {id:3,
    link:"portfolio",
    offset:5},
    {id:4,
    link:"experience",
    offset:5},
    {id:5,
    link:"contact",
    offset:5}
  ]

  return (
    <div className='flex justify-between items-center px-2 h-20 fixed text-white bg-[#423a8c] w-full top-0 z-10'>
       <div className='mr-10
       '>
        {/* <p className='font-Rock text-5xl mx-2 uppercase max-md:text-3xl'> Niranjan</p> */}
        <img src={NG2} className='w-[500px] h-[80px]'></img>
       </div>
       <ul className=' hidden md:flex'>
       {
        links.map((item)=>{
          return(
            
        <li key={item.id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'><Link to={item.link} smooth={true} duration={500}>{item.link}</Link></li>
      
          )
        })
       }
       </ul>

       <div className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden' onClick={()=>{setNav(pre=>!pre)}}>
        {nav?<FaTimes size={30}></FaTimes>:
        <FaBars size={30} ></FaBars>
        }
        </div>
        
        {nav && <motion.ul initial={{y:0}} animate={{y:60}} transition={{duration:1,type:"spring",stiffness:100}}  className='flex flex-col justify-center absolute top-0 right-0 items-center w-full  bg-gradient-to-b from-[#423a8c]  to-gray-700 '>
        {links.map((item)=>{
          return(
            <li  key={item.id} className='p-2 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 text-2xl md:hidden'><Link onClick={()=>{setNav(pre=>!pre)}} to={item.link} duration={500} smooth={true} offset={item.offset?item.offset:-50}>{item.link}</Link></li>
          )
        })}
        </motion.ul>}
       
    </div>
  )
}

export default Navbar