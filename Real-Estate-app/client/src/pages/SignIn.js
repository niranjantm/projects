import React from 'react'
import {Link} from "react-router-dom"

function SignIn() {
  return (
    <div>SignIn
      <button><Link to={"/sign-up"}>new here ? SignUp</Link></button>
    </div>
  )
}

export default SignIn