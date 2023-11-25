import React from 'react'
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"


function Exerience() {
  const exp = [
    {
      src:html,
      name:"HTML",
      shadow:"shadow-orange-500"
    },
    {
      src:css,
      name:"CSS",
      shadow:"shadow-blue-500"
    },
    {
      src:javascript,
      name:"JavaScript",
      shadow:"shadow-yellow-500"
    },
    {
      src:react,
      name:"React JS",
      shadow:"shadow-sky-400"
    },
    {
      src:node,
      name:"Node JS",
      shadow:"shadow-green-400"
    },
    {
      src:tailwind,
      name:"Tailwind CSS",
      shadow:"shadow-blue-300"
    },
    {
      src:github,
      name:"GitHub",
      shadow:"shadow-slate-400"
    },
  ]
  return (
    <div name="experience" className='min-h-screen bg-gradient-to-b from-[#7366e6] via-gray-500 to-[#7366e6]'>
      <div className='max-w-screen-lg mx-auto mb-3 px-3'>
        <h1 className='text-5xl font-bold underline underline-offset-3 text-slate-100 mb-4 max-md:text-2xl'>Experience</h1>
        <p className='text-lg text-slate-100'>These are the technologies I've worked with</p>
      </div>
      <div className='flex flex-wrap max-w-screen-lg mx-auto gap-5'>
        {exp.map((item,index)=>{
          return(
          <div className={`${item.shadow} shadow-xl w-[310px] rounded-lg bg-gray-800 py-3 mx-auto`}>
          <img src={item.src} alt='experience-profil' className='w-[100px] mx-auto'></img>
          <p className='text-lg text-center mt-5 text-slate-100'>{item.name}</p>
          </div>
          )
          
        })}
      </div>
    </div>
  )
}

export default Exerience