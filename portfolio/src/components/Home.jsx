import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion} from "framer-motion"
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {Link} from "react-scroll"



function Home() {
  const links = [
    {
        id:1,
        child:(
            <>
            <FaLinkedin size={30}></FaLinkedin> Linkedin 
            </>
        ),
        href:"https://www.linkedin.com/in/niranjantm/",
        style:"rounded-tr-md"


    },
    {
        id:2,
        child:(
            <>
            <FaGithub size={30}></FaGithub> Github 
            </>
        ),
        href:"https://github.com/niranjantm/projects",
        


    },
    {
        id:4,
        child:(
            <>
            <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill> Resume 
            </>
        ),
        href:"https://drive.google.com/file/d/1eZy8FuHxva6LKUCA0d2Qj1h1fUnFa86V/view?usp=drive_link",
        style:"rounded-br-md"
    }
]
  
  return (
    <div name="home" className="h-screen flex justify-center border-none p-2">
      <motion.div className="max-w-screen-lg mt-14 max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row max-md:mt-24 ">
        
        <div className=" text-white flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm a Full Stack Developer</h2>
          <p className="text-gray-200 py-4  max-w-md">
            As a dedicated MERN Full Stack Developer, I specialize in leveraging
            the MERN stack to create dynamic and user-friendly web applications.
            Proficient in React JS, MongoDB, Express JS, Node JS, HTML/CSS,
            Tailwind CSS, JavaScript, and Git, I am committed to adhering to
            industry best practices and delivering exceptional user experiences.
          </p>
          
          
          <div className="flex gap-4">
            <motion.button  whileTap={{y:20}} className="flex group rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 w-fit p-2 hover:scale-105 transition-all items-center gap-2">
              <Link className="flex items-center gap-2" to={"portfolio"} duration={400} smooth={true} >Portfolio <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight size={18}></FaArrowRight>
              </span></Link>
              
              
            </motion.button>
            <div className="flex gap-2 mb-3 md:hidden px-3 items-center">
              {links.map((item,index)=>{
                return(
                  <a className="text-gray-800" key={index} href={item.href}>{item.child}</a>
                )
              })}
            </div>
            
          </div>
        
        </div>
        <div className="mt-5">
          <img src="https://img.freepik.com/premium-vector/man-guy-flat-style_566661-10603.jpg" alt="profile man" className="rounded-lg w-[300px] md:w-[600px]"></img>
        </div>
      
      </motion.div>
    
    </div>
  );
}

export default Home;
