import React from 'react';
import {BsArrowLeftRight} from "react-icons/bs";

function Home() {
  return (
    <div>
        <p className='text-3xl text-slate-900 text-center'>India's best bus booking platform</p>
        <div className='p-10 bg-red-500 flex justify-between'>
            <div className='border border-gray-500 rounded-2xl p-3 flex-1 bg-slate-100'>
                <p className='text-sm '>From</p>
                <input type='text' id='from' className='focus:outline-none w-full  bg-transparent h-12'></input>
            </div>
            <button type='button' className='rounded p-3 '>
                <BsArrowLeftRight></BsArrowLeftRight>
            </button>
            <div className='border border-gray-500 rounded-2xl flex-1 p-3 bg-slate-100'>
                <p className='text-sm '>To</p>
                <input type='text' id='to' className='focus:outline-none w-full  bg-transparent h-12'></input>
            </div>
            <div className='border border-gray-500 rounded-2xl p-3 flex-1 bg-slate-100'>
                <p className='text-sm '>Date</p>
                <input type='date' onChange={(e)=>{console.log(e.target.value)}} id='date' className='focus:outline-none  w-full bg-transparent h-12'></input>
            </div>
        </div>
    </div>
  )
}

export default Home