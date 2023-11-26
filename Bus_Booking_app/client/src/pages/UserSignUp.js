import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillGoogleCircle } from "react-icons/ai";
import axios from 'axios';
import url from '../utils/BackendUrl';

function UserSignUp() {
    const navigate=  useNavigate();
    const [formData,setFormData] = useState({name:"",email:"",password:""});
    console.log(formData)

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.id]:e.target.value});
    }

    const handleSubmit= async(e)=>{
      e.preventDefault();
      try{
        const res = await axios.post(`${url}/api/user/sign-up`,formData);
      if(res.data.success===false){
        console.log(res.data.message);
      }
      else{
        console.log(res.data);
        setFormData({name:"",email:"",password:""})
        navigate("/sign-in")
      }
      }catch(error){
        console.log(error)
      }
      

    }

  return (
    <div className='h-screen flex items-center'>
        <form className='max-w-[500px] w-full mx-auto  h-[500px] mb-10 flex flex-col gap-4 p-5 rounded-xl shadow-lg shadow-slate-600 max-md:w-[300px]' onSubmit={handleSubmit}>
        <p className='text-4xl font-bold text-center'>Sign Up</p>
        <input value={formData.name} onChange={handleChange} required type='text' id="name"  className='border-2 w-full p-2 rounded-lg border-gray-800 text-black'placeholder='Name'></input>
      <input value={formData.email} onChange={handleChange} required type='email' id="email"  className='border-2 w-full p-2 rounded-lg border-gray-800 text-black'placeholder='Email'></input>
      <input  value={formData.password} onChange={handleChange} required type='password' id="password" className='border-2 w-full p-2 rounded-lg border-gray-800 text-black'placeholder='Password'></input>
      <button type='submit' className='text-center w-[100px] bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-2 rounded-lg mx-auto text-lg text-slate-100 font-semibold hover:opacity-80 '>Sign Up</button>
      
      
      <div className='flex gap-2 justify-center'>
      
      <p onClick={()=>navigate("/signIn")} className='text-blue-600 cursor-pointer hover:scale-105 duration-100'>Back To Sign In</p>
      </div>
    
      </form>
    </div>
  )
}

export default UserSignUp