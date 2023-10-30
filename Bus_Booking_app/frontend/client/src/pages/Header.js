import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div className="">
    <header className='w-[100%] bg-slate-300 h-24 flex items-center p-5'>
        <span className='' >
            <Link className='text-blue-600 text-lg'>book</Link>
            <Link className='text-red-500 text-lg'>My</Link>
            <Link className='text-blue-600 text-lg'>bus.Com</Link>
            </span>

    </header>
    <Outlet></Outlet>
    </div>
  )
}

export default Header