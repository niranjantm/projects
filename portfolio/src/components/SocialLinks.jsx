import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {motion} from "framer-motion"

function SocialLinks() {
    const links = [
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href:"https://www.linkedin.com/in/niranjantm/",
            style:"rounded-tr-md"


        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}></FaGithub>
                </>
            ),
            href:"https://github.com/niranjantm",
            


        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href:"mailto:niranjantm35gmail.com",
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href:"https://drive.google.com/file/d/1c8_0KThxb4FOLCIhRhvt8VtkvF5DKGjA/view?usp=sharing",
            style:"rounded-br-md"
        }
    ]
  return (
    <div className='hidden fixed top-[35%] lg:flex flex-col left-0 '>
        <ul>
            {links.map((item)=>{
                return(
                    <motion.li key={item.id} whileHover={{x:95,scale:1.1}} transition={{type:"spring",stiffness:100,damping:15}} className={`${item.style} bg-gray-700 flex items-center w-40 h-14 hover:rounded-md ml-[-100px] `}>
                        <a target="_blank" href={item.href} className=' flex items-center  justify-between gap-1 h-full p-4 pl-6 w-full text-fuchsia-100'>
                            {item.child}
                        </a>
                    </motion.li>
                )
            })}
        </ul>
    </div>
  )
}

export default SocialLinks
