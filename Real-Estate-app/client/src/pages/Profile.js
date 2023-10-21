import React from 'react'
import {useSelector,Dispatch} from "react-redux"

function Profile() {
  const user = useSelector(state=>state.user);
  return (
    <div>
      <div> Profile </div>
    <p>
      {user.currentUser.username}
    </p>
    </div>
  )
}

export default Profile