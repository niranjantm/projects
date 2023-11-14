import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import url from "../utils/BackendUrl";

function Home() {
  const [formData, setFormData] = useState({});
  const [locations, setLocations] = useState([]);
  console.log(formData)

  useEffect(() => {
    const fetchDes = async () => {
      const res = await axios.get(
        `${url}/api/locations/get`
      );
      // const data = await res.data.json();
      setLocations(res.data);
    };
    fetchDes();
  }, []);

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
            <div className="flex gap-2 bg-slate-100 p-2 rounded-lg shadow-lg">
              <div className="flex flex-col">
                <p className="text-lg text-black p-2 ">From</p>

                <div className="flex flex-col gap-5 m-3">
                  <select
                    className="w-[150px] max-md:w-28 p-2"
                    id="fromState"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.id]: e.target.value,
                      });
                      
                    }}
                  >
                    <option value="Select State">Select State</option>
                    {locations.length <= 0
                      ? ""
                      : locations.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })}
                  </select>

                  <select
                    id="fromDistrict"
                    className="w-[150px] max-md:w-28 p-2"
                    disabled={
                      !formData.fromState ||
                      formData.fromState === "Select State"
                    }
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.id]: e.target.value,
                      });
                      
                    }}
                  >
                    <option value="Select District">Select District</option>
                    {formData.fromState!==undefined && formData.fromState!=="Select State" &&
                      locations.filter((item,index)=>{
                        return item.state === formData.fromState
                      })[0].districts.map((item,index)=>{
                        return(
                          <option value={item} key={index}>{item}</option>
                        )
                      })
                    }
                   
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-lg text-black p-2 ">From</p>

                <div className="flex flex-col gap-5 m-3">
                  <select
                    className="w-[150px] max-md:w-28 p-2"
                    id="fromState"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.id]: e.target.value,
                      });
                      
                    }}
                  >
                    <option value="Select State">Select State</option>
                    {locations.length <= 0
                      ? ""
                      : locations.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })}
                  </select>

                  <select
                    id="fromDistrict"
                    className="w-[150px] max-md:w-28 p-2"
                    disabled={
                      !formData.fromState ||
                      formData.fromState === "Select State"
                    }
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.id]: e.target.value,
                      });
                      
                    }}
                  >
                    <option value="Select District">Select District</option>
                    {formData.fromState!==undefined &&
                      locations.filter((item,index)=>{
                        return item.state === formData.fromState
                      })[0].districts.map((item,index)=>{
                        return(
                          <option value={item} key={index}>{item}</option>
                        )
                      })
                    }
                   
                  </select>
                </div>
              </div>

              <div>
                <p className="text-lg  text-black ">Date</p>
                <input
                  type="date"
                  id="date"
                  className="bg-transparent  text-sm border-gray-500 outline-none w-40 h-[80px]   max-md:w-28 p-2 max-md:p-0"
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
