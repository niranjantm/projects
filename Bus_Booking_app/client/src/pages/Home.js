import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import url from "../utils/BackendUrl";
import { useNavigate } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({});
  const [locations, setLocations] = useState([]);
  const [dateError, setDateError] = useState(false);
  const [destinationError,setDestinationError] = useState(false);
  const navigate = useNavigate();
  console.log(formData);
  

  useEffect(() => {
    const fetchDes = async () => {
      const res = await axios.get(`${url}/api/locations/get`);
      // const data = await res.data.json();
      setLocations(res.data);
    };
    fetchDes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.fromDistrict===formData.toDistrict){
      setDestinationError(true)
    }
    else{
      setDestinationError(false)
      navigate(`/busDetails/${formData.date}/${formData.fromDistrict}, ${formData.fromState}/${formData.toDistrict}, ${formData.toState}`)
    }
    
      };
  return (
    <div className="">
      {/* ----------------------------From TO Date------------------------------------------- */}
      <div className="relative flex justify-center max-h-[400px] gap-5 flex-wrap">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/66/42/20/1000_F_166422008_ejLnM5fo8gYjB9sV8swcckv2hpSmLCLq.jpg"
          className="w-full object-fill max-lg:h-[400px] max-md:h-[600px] blur-sm"
        ></img>

        <div className=" m-8 absolute z-10 max-md:m-2  ">
          <p className="text-4xl text-black p-5  max-md:p-2 text-center max-md:text-xl">
            Providing you the best bus booking experience
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex gap-3 w-fit  rounded-xl bg-transparent p-3 items-center flex-wrap justify-center  "
          >
            <div className="flex gap-2 bg-slate-100 opacity-90 p-2 rounded-lg shadow-lg max-md:w-[350px] flex-wrap justify-center">
              <div className="flex flex-col">
                <p className="text-lg text-black p-2 ">From</p>

                <div className="flex flex-col gap-5 m-3">
                  
                    <select
                      className="w-[150px] max-md:w-28 p-2 rounded-lg border shadow-md"
                      id="fromState"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [e.target.id]: e.target.value,
                        });
                      }}
                    >
                      
                      <option hidden={formData.fromState}>Select State</option>
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
                      className="w-[150px] max-md:w-28 p-2 rounded-lg border shadow-md"
                      placeholder="Districts"
                      disabled={!formData.fromState}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [e.target.id]: e.target.value,
                        });
                      }}
                    >
                      <option hidden={formData.fromDistrict}>Select District</option>
                      {!formData.fromState ||
                      formData.fromState === "Select state"
                        ? ""
                        : locations
                            .filter((item, index) => {
                              if (item.state === formData.fromState) {
                                return item;
                              }
                            })[0]
                            .districts.map((item, index) => {
                              return (
                                <option value={item} key={index}>
                                  {item}
                                </option>
                              );
                            })}
                    </select>
                  
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-lg text-black p-2 ">To</p>

                <div className="flex flex-col gap-5 m-3">
                  
                    <select
                      className="w-[150px] max-md:w-28 p-2 rounded-lg border shadow-md"
                      id="toState"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [e.target.id]: e.target.value,
                        });
                      }}
                    >
                      <option hidden={formData.toState}>Select State</option>
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
                      id="toDistrict"
                      className="w-[150px] max-md:w-28 p-2 rounded-lg border shadow-md"
                      disabled={!formData.toState}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [e.target.id]: e.target.value,
                        });
                      }}
                    >
                      <option hidden={formData.toDistrict}>Select District</option>
                      {formData.toState !== undefined &&
                        locations
                          .filter((item, index) => {
                            return item.state === formData.toState;
                          })[0]
                          .districts.map((item, index) => {
                            return (
                              <option value={item} key={index}>
                                {item}
                              </option>
                            );
                          })}
                    </select>
                  
                </div>
                {destinationError && <p className="text-red-500 text-center">Please select valid destinations</p>}
              </div>
              
              <div className="">
                <p className="text-lg  text-black max-md:text-center ">Date</p>
                <div className="h-full mt-8 max-md:mt-2">
                  <input
                    type="date"
                    id="date"
                    defaultValue={"2023-10-03"}
                    required
                    className="bg-transparent my-auto text-sm border-gray-500 outline-none w-40 h-[80px]   max-md:w-28 p-2 max-md:p-0 border rounded-lg shadow-md"
                    onChange={(e) => {
                      
                      let currentDate = new Date();
                      let f = new Intl.DateTimeFormat("en-us", {
                        dateStyle: "short",
                      });

                      let date = new Date(e.target.value);

                      if (Date.parse(date) < Date.parse(currentDate)) {
                        if (f.format(date) === f.format(currentDate)) {
                          setDateError(false);
                          setFormData({
                            ...formData,
                            [e.target.id]: e.target.value,
                          });
                        } else {
                          setDateError(true);
                        }
                      } else {
                        setDateError(false);
                        setFormData({
                          ...formData,
                          [e.target.id]: e.target.value,
                        });
                      }
                    }}
                  ></input>
                  <p hidden={!dateError} className="text-red-500 text-center">
                    Please provide valid date...!
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto md:mt-4">
              <button
                type="submit"
                disabled={
                  !formData.fromState ||
                  !formData.toState ||
                  !formData.toDistrict ||
                  !formData.fromDistrict ||
                  !formData.date ||
                  dateError ||
                  destinationError
                }
                className="uppercase rounded-xl border text-center text-lg text-white w-40 h-[80px] p-2 hover:shadow-lg bg-red-600 disabled:opacity-70 "
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
