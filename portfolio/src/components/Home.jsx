import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion} from "framer-motion"
function Home() {
  
  return (
    <div name="intro" className="h-screen flex justify-center border-none bg-gradient-to-b from-[#7366e6] via-gray-500 to-[#7366e6] max-md:mt-[70px] p-2">
      <motion.div className="max-w-screen-lg  max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        
        <div className=" text-white flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm a Full Stack Developer</h2>
          <p className="text-gray-200 py-4  max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            facilis, vitae perspiciatis optio quisquam quam quis laudantium
            ducimus neque quod praesentium dolores earum voluptas vero, corrupti
            aperiam excepturi debitis adipisci?
          </p>
          
          <div>
            <motion.button  whileTap={{y:20}} className="flex group rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 w-fit p-3 hover:scale-105 transition-all items-center gap-2">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight size={18}></FaArrowRight>
              </span>
              
            </motion.button>
          </div>
        
        </div>
        <div>
          <img src="https://img.freepik.com/premium-vector/man-guy-flat-style_566661-10603.jpg" alt="profile man" className="rounded-lg w-[300px] md:w-[600px]"></img>
        </div>
      
      </motion.div>
    
    </div>
  );
}

export default Home;
