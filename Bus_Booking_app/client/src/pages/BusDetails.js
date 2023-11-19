import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import url from "../utils/BackendUrl";
import { useParams } from "react-router-dom";
import {BallTriangle} from "react-loader-spinner"
import { useNavigate } from "react-router-dom";


function BusDetails() {
  const params = useParams();
  const [buses,setBuses] = useState([]);
  const [loading,setLoading] = useState(false);
  
  const navigate = useNavigate()
  
  useEffect(() => {
    setLoading(true);
    try {
      const fetchBuses = async () => {

        await axios.post(`${url}/api/trips`, {
        from: params.from,
        to: params.to,
        date:params.date,
      });
        const res = await axios.get(
          `${url}/api/availableBuses/get?from=${params.from}&to=${params.to}&date=${params.date}`
        );
        setLoading(false);
        setBuses(res.data);
      };
      fetchBuses();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBooking=(id)=>{

    navigate(`/booking/${id}`)

  }

  const currentDate = new Date()
  const f = new Intl.DateTimeFormat("en-us",{
    dateStyle:"short"
  })
   
  
  
  
  return (
  (loading?<div className="w-full h-screen flex justify-center mx-auto items-center"><BallTriangle color="red" radius="5"></BallTriangle></div>:
  <div className="p-6 flex flex-col gap-3 flex-wrap bg-red-200 justify-center w-full">
    {buses.map((item,index)=>{
      let d= new Date(item.date)
      if(f.format(d)===f.format(currentDate)){
        if(item.startTime>currentDate.getHours()){
          return(
            <div key={index} className="rounded-lg shadow-lg border w-full h-[150px]">
              
            </div>
          )
        }
      }else{
      
      return(
        <div key={index} className="rounded-lg shadow-lg border w-full h-fit p-2 max-md:w-fit bg-slate-100  mx-auto hover:scale-95 transition-all">
          
          <div className="bg-gray-300 p-2 border rounded-lg flex gap-2">
          <p className="uppercase text-red-800 text-sm font-semibold">Starts from</p>
          <p className="text-sm font-semibold">{item.from}</p>
          </div>
          
          <div className="flex justify-between ">
          
          <div className=" w-fit flex flex-col flex-wrap gap-3 max-md:gap-1 p-2">
            <p className="text-lg font-semibold text-center max-md:text-sm">{item.busName}</p>
            {item.category?<p className="text-xs font-thin text-center">{item.category}</p>:<p className="text-xs font-thin text-center">NON A/C Sleeper (2+1)</p>}
            <p className="text-sm hover:text-red-500 text-center underline-offset-2 hover:underline">Animeties</p>
            
            <ul className="flex flex-wrap w-fit gap-4 border bg-slate-200 justify-center p-2 rounded-md max-md:w-36"  >
            {item.animeties.map((animetie,index)=>{
              return(
                <li className="text-sm list-inside text-center">{animetie}</li>
              )
            })}  
            </ul>
          
          </div>

          <div className="flex flex-col gap-3 p-2 h-full">
          
          <div className="flex justify-between gap-4 h-full">
          <p className="text-sm font-semibold">{item.startTime}:00:00</p>
          <p className="text-sm">{item.endTime-item.startTime}Hrs:00m</p>
          <p className="text-sm">{item.endTime}:00:00</p> 
          </div>
          
          <div className="flex justify-between flex-wrap h-full gap-8 max-md:gap-3">
            <p className="text-sm  max-md:w-fit text-center"> From : {item.from}</p>
            <p className="text-sm  max-md:w-fit text-center">To : {item.to}</p>
            </div>

            <p className="text-center text-lg">Fare : INR {item.busFare} </p>
          
          </div>

          <div className="w-fit">
          <div className="flex">
          <p className="w-fit p-2">Available Seats </p>
          <p className="w-fit p-2">:</p>
          <p className="w-fit p-2 text-sm font-medium">{item.totalSeats-item.SeatBooked.length}</p>
          </div>

          <div className="flex">
          <p className="w-fit p-2">Total Seats</p>
          <p className="w-fit p-2">:</p>
          <p className="w-fit p-2 text-sm font-medium">{item.totalSeats}</p>
            </div>

          <div hidden={item.totalSeats===item.SeatBooked.length}>
          <button disabled={item.totalSeats===item.SeatBooked.length} className="p-4 border bg-red-500 uppercase text-white shadow-lg rounded-lg hover:opacity-90" onClick={()=>{handleBooking(item._id)}}>book Now</button>
          
          </div>
                    
          </div>

          </div>
        </div>
      )}
    })}
  </div>)
  );
}

export default BusDetails;
