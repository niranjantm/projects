import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    
  };

  const submitHandler = async (event) => {
    // let res;
    // setLoading(true);
    // event.preventDefault();
    // try {
    //   res = await axios.post(
    //     "api/auth/sign-up",
    //     formData
    //   );
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err.response.data);
    //   res=err.response.data
    // }
    // if(res.success===false){
    //   setError(res.errorMessage);
    // }else{
    //   setError(null);
    //   setFormData("");
    //   navigate("/sign-in")
    setLoading(true);
      event.preventDefault();
     const res = await fetch("/api/auth/sign-up",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
     })
     const data = await res.json();
     console.log(data);
     if(data.success===false){
      setError(data.errorMessage)
     }else{
      setError(null);
      setFormData("");
      navigate("/sign-in")
     }
    setLoading(false)
    }

   
  //   setLoading(false);
  // };

  return (
    <div className="space-y-5 p-5">
      <div>
        <p className="text-3xl font-semibold text-center">Sign Up</p>
      </div>
      <div className="bg-slate-200 max-w-lg max-sm:w-[300px] p-5 rounded-lg shadow-lg mx-auto ">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Username"
              onChange={changeHandler}
              id="user"
              className="bg-slate-300 rounded-lg border border-gray-600 focus:outline-none p-2"
            ></input>
            <input
              type="email"
              placeholder="email"
              onChange={changeHandler}
              id="email"
              className="bg-slate-300  rounded-lg border border-gray-600 focus:outline-none p-2"
            ></input>
            <input
              type="password"
              placeholder="password"
              onChange={changeHandler}
              id="password"
              className="bg-slate-300 rounded-lg border border-gray-600 focus:outline-none p-2"
            ></input>
          </div>
          <p className="text-center p-1 text-red-500">{error?error:""}</p>
          <div className="flex justify-center">
            
            <button
              type="submit"
              disabled={loading}
              className="border border-gray-600 p-2 rounded-xl hover:opacity-90 text-white bg-slate-700 mt-3 uppercase disabled:opacity-60"
            >
              {!loading ? "sign up" : "loading..."}
            </button>
          </div>
        </form>
        <div className="flex gap-1">
          <p>hava an account ?</p>
          <Link to={"/sign-in"} className="text-red-500 hover:opacity-70">
            {"sign-in"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
