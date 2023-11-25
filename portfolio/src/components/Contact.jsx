import React, { useState } from 'react'


function Contact() {

 

  const [formData,setFormData] = useState({name:"",email:"",message:""})

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setFormData({name:"",email:"",message:""})

  }

  return (
    <div className='h-screen bg-gradient-to-b from-[#7366e6] via-gray-500 to-[#7366e6]'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='text-5xl font-bold underline underline-offset-2 text-slate-100 mb-4'>Contact</h1>
        <p className='text-lg text-slate-100'>Submit the form below to get in touch with me</p>
      </div>
      <form className='max-w-screen-lg mx-auto mt-3 flex flex-col items-center gap-4' >
        <input id='name' type="text" onChange={changeHandler} value={formData.name} className=' border-gray-700 rounded-lg bg-transparent border-2 placeholder-slate-100 text-lg p-2 w-[500px] max-md:w-[300px]' placeholder='Enter your name' required>
        </input>
        <input id='email' type='email' onChange={changeHandler} value={formData.email} className=' border-gray-700 rounded-lg bg-transparent border-2 placeholder-slate-100 text-lg p-2 w-[500px] max-md:w-[300px]' placeholder='Enter your name' required>
        </input>
        <textarea id='message' type='text' onChange={changeHandler} value={formData.message} className=' border-gray-700 rounded-lg bg-transparent border-2 placeholder-slate-100 text-lg p-2 w-[500px] h-[300px] max-md:w-[300px] max-md:h-[100px]' placeholder='Enter your name' required>
        </textarea>
        <a  href={`mailto:niranjantm35gmail.com?subject=From portfolio&body=${formData.message}`} className='text-lg w-[150px] h-fit text-center py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-lg shadow-lg'>Send</a>
      </form>
    </div>
  )
}

export default Contact