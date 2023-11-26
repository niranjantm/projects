import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import url from '../utils/BackendUrl';
import { AiFillGoogleCircle } from "react-icons/ai";
import {useSelector,useDispatch} from "react-redux"
import { signInStart,signInSuccess,signInFailure } from '../store/UserReducer';

function UserSignIn({location}) {
  
const navigate = useNavigate();
const [formData,setFormData] = useState({email:"",password:""});
const dispatch = useDispatch();
const user = useSelector(state=>state.user)


console.log(formData)
const handleChange= (e)=>{
  setFormData({...formData,[e.target.id]:e.target.value})
}
const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    dispatch(signInStart());
    const res = await axios.post(`${url}/api/user/sign-in`,formData,{withCredentials:true})
    console.log(res.data)
    dispatch(signInSuccess(res.data));
    setFormData({email:"",password:""})
    if(!location){
      navigate("/")
    }else{
      navigate(`/${location}`)
    }
  
  }catch(error){
    console.log(error)
    dispatch(signInFailure(error.response.data.message));
  }
 

}

  return (
    <div className='h-screen flex items-center'>
       <form className='max-w-[500px] w-full mx-auto  h-[500px] mb-10 flex flex-col gap-4 p-5 rounded-xl shadow-lg shadow-slate-600 max-md:w-[300px]' onSubmit={handleSubmit}>
      <p className='text-4xl font-bold text-center'>Sign In</p>
      <input onChange={handleChange} value={formData.email} required on type='email' id="email"  className='border-2 w-full p-2 rounded-lg border-gray-800 text-black'placeholder='Email'></input>
      <input onChange={handleChange} value={formData.password} required type='password' id="password" className='border-2 w-full p-2 rounded-lg border-gray-800 text-black'placeholder='Password'></input>
      <button type='submit'  className='text-center w-[100px] bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-2 rounded-lg mx-auto text-lg text-slate-100 font-semibold hover:opacity-80 '>Sign In</button>
      
      <div className='w-full flex flex-col justify-center my-5 gap-2'>
        <p className='text-center'>Or Sign In Using</p>
        <button className='text-red-600 text-center mx-auto'><AiFillGoogleCircle size={50}/></button>
      </div>

      <div className='flex gap-2 justify-center'>
      <p>Already a user ?</p>
      <p onClick={()=>navigate("/signUp")} className='text-red-600 cursor-pointer hover:scale-105 duration-100'> Sign Up</p>
      </div>
    
      </form>
      
    </div>
  )
}

export default UserSignIn