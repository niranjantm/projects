import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header className='h-24 bg-gray-300 flex items-center p-5'>
            <span className='text-2xl max-sm:text-lg'>
                <Link className='text-blue-500 ' to={"/"}>book</Link>
                <Link className='text-red-500 ' to={"/"}>MY</Link>
                <Link className='text-blue-500 ' to={"/"}>bus.com</Link>
            </span>
        </header>
        <Outlet></Outlet>
    </div>
  )
}

export default Header