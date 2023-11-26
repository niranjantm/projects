import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {useSelector} from "react-redux"
import UserSignIn from '../pages/UserSignIn';


function PrivatePages() {
    const user = useSelector(state=>state.user);
    console.log(user)
    const location = (window.location.href).split("/").slice(3).join("/")
   

  return (user.currentUser?<Outlet></Outlet>:<UserSignIn location={location}></UserSignIn>)
}

export default PrivatePages