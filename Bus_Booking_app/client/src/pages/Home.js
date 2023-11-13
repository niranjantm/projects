import React, { useEffect, useState } from "react";
import axios from "axios"
import url from "../utils/BackendUrl";

function Home() {
  const [formData, setFormData] = useState({});
  console.log(formData)
  console.log("url--->",url)

  useEffect(()=>{
    const fetchDes = async ()=>{
      const res = await axios.get("")
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      {/* ----------------------------From TO Date------------------------------------------- */}
      <div className="relative flex justify-center max-h-[400px] gap-5 flex-wrap">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/66/42/20/1000_F_166422008_ejLnM5fo8gYjB9sV8swcckv2hpSmLCLq.jpg"
          className="w-full object-fill max-lg:h-[400px] blur-sm"
        ></img>

        <div className=" m-8 absolute z-10">
          <p className="text-4xl text-black p-5 text-center max-md:text-xl">
            Providing you the best bus booking experience
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex gap-3 w-fit  rounded-xl bg-transparent p-3 items-center flex-wrap  justify-between "
          >
            <div className="flex gap-2">
              <div>
                <p className="text-lg text-white md:text-black  ">From</p>
                <input
                  type="text"
                  id="from"
                  className="bg-transparent border-r border-gray-500 outline-none w-40 h-[80px] max-md:border max-md:rounded-lg p-2 max-md:w-28"
                  onChange={(e) => {
                    setFormData({ ...formData, [e.target.id]: e.target.value });
                  }}
                ></input>
              </div>

              <div>
                <p className="text-lg  text-white md:text-black">To</p>
                <input
                  type="text"
                  id="to"
                  className="bg-transparent border-r border-gray-500 outline-none w-40 h-[80px] max-md:border max-md:rounded-lg max-md:w-28 p-2"
                  onChange={(e) => {
                    setFormData({ ...formData, [e.target.id]: e.target.value });
                  }}
                ></input>
              </div>

              <div>
                <p className="text-lg  text-white md:text-black ">Date</p>
                <input
                  type="date"
                  id="date"
                  className="bg-transparent border-r text-sm  border-gray-500  w-40 h-[80px] max-md:border max-md:rounded-lg  max-md:w-28 p-2 max-md:p-0"
                  onChange={(e) => {
                    setFormData({ ...formData, [e.target.id]: e.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="mx-auto md:mt-4">
              <button
                type="submit"
                className="uppercase rounded-xl border text-center text-lg text-white w-40 h-[80px] p-2 hover:shadow-lg bg-red-400 "
              >
                Search buses
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ----------------------------From TO Date------------------------------------------- */}
    </div>
  );
}

export default Home;
