import React from 'react'
import {useSelector} from "react-redux";

function Account() {
const user = useSelector(state=>state.user);
  return (
    <div className='flex justify-center items-center h-screen text-7xl font-bold'>
      {user.currentUser.name}
    </div>
  )
}

export default Account