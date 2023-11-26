import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import {VscAccount} from "react-icons/vsc"


function Header() {

  const navigate = useNavigate();
  return (
    <div className='min-w-fit'>
        <header className='h-24 bg-gray-300 flex items-center shadow-lg p-5 justify-between'>
            <div className=''>
            <span className='text-2xl max-sm:text-lg'>
                <Link className='text-blue-500 ' to={"/"}>book</Link>
                <Link className='text-red-500 ' to={"/"}>MY</Link>
                <Link className='text-blue-500 ' to={"/"}>bus.com</Link>
            </span>
            </div>
            
            <div className='flex gap-1 hover:cursor-pointer' onClick={()=>{navigate("/account")}}>
            <VscAccount className=''size={30}></VscAccount>
            <p>My Account</p>
            </div>
            
        </header>
        <Outlet></Outlet>
    </div>
  )
}

export default Header