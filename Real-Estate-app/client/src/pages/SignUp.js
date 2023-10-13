import React from 'react'

function SignUp() {
  return (
    <div className=' min-h-screen relative flex items-center justify-center'>
      
      <div className='bg-red-200 w-[600px] max-sm:w-[300px] p-5 rounded-lg shadow-lg ' >
        <form>
          <div className='flex flex-col'>
          <label className=' '>User name</label>
          <input type='text' className='bg-blue-200 rounded-lg focus:outline-none'></input>
          </div>

          <div className='flex flex-col'>
            <label>email</label>
            <input type='email' className='bg-blue-200 rounded-lg focus:outline-none'></input>
          </div>

          <div className='flex flex-col'>
            <label>Password</label>
            <input type='password' className='bg-blue-200 rounded-lg focus:outline-none'></input>
          </div>
          <div className='flex justify-center'>
          <button type='button' className='border border-gray-600 p-2 rounded-xl hover:bg-red-500 bg-slate-200 mt-3'>Sign up</button>
       
          </div>
           </form>
      </div>
    </div>
  )
}

export default SignUp