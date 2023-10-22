import React from 'react'
import {useSelector,Dispatch} from "react-redux"

function Profile() {
  const user = useSelector(state=>state.user);
  return (
    <div className='max-w-lg mx-auto p-3'>
   <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
   
   <form className='flex flex-col gap-3'>
    <img src={user.currentUser.photo} className='rounded-full self-center max-w-[100px] max-h-[100px]' alt='profile pic'></img>
    <input placeholder="Username" className='bg-slate-300 rounded-lg border placeholder-slate-500 border-gray-600 focus:outline-none p-2'></input>
    <input placeholder="email" className='bg-slate-300 rounded-lg border placeholder-slate-500 border-gray-600 focus:outline-none p-2'></input>
    <input placeholder="password" className='bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2'></input>
    <button className="border border-gray-600 uppercase rounded-lg bg-blue-600 p-2 hover:opacity-90 text-white">Update</button>
    <button className="border border-gray-600 rounded-lg uppercase bg-blue-600 p-2 hover:opacity-90 text-white">Create listings</button>

   </form>
   <div className='flex justify-between mt-5'>
    <span className='text-red-600 cursor-pointer'>Delete account</span>
    <span className='text-red-600 cursor-pointer'>Sign-out</span>
   </div>
   
    </div>
  )
}

export default Profile