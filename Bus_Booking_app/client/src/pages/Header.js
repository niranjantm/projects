import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import {VscAccount} from "react-icons/vsc"
import busLogo from "../BookMyBus.png"


function Header() {

  const navigate = useNavigate();
  return (
    <div className='min-w-fit'>
        <header className='h-24 bg-gray-300 flex items-center shadow-lg py-5 justify-between'>
            <div className=''>
            <Link to={"/"}>
            <img src={busLogo} className='h-[100px] w-[300px] max-md:w-[200px] max-md:h-[80px]'></img>
            </Link>
                
            </div>
            
            <div className='flex gap-1 hover:cursor-pointer mr-2' onClick={()=>{navigate("/account")}}>
            <VscAccount className=''size={30}></VscAccount>
            <p>My Account</p>
            </div>
            
        </header>
        <Outlet></Outlet>
    </div>
  )
}

export default Header