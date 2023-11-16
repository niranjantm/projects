import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import url from "../utils/BackendUrl";
import { useParams } from "react-router-dom";

function BusDetails() {
  const params = useParams();
  const [buses,setBuses] = useState([]);
  const [animeties,showAnimeties] = useState(false);
  const Aref = useRef([]);
  console.log(animeties)
  useEffect(() => {
    try {
      const fetchBuses = async () => {
        const res = await axios.get(
          `${url}/api/availableBuses/get?from=${params.from}&to=${params.to}&date=${params.date}`
        );
        setBuses(res.data);
      };
      fetchBuses();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const currentDate = new Date()
  const f = new Intl.DateTimeFormat("en-us",{
    dateStyle:"short"
  })
   
  
  
  
  return (
  <div className="p-8 flex flex-col gap-3 justify-center items-end">
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
        <div key={index} className="rounded-lg shadow-lg border w-full h-fit p-2 max-md:w-[300px]">
          
          <div className="bg-gray-300 p-2 border rounded-lg flex gap-2">
          <p className="uppercase text-red-800 text-sm font-semibold">Starts from</p>
          <p className="text-sm font-semibold">{item.from}</p>
          </div>
          
          <div className="flex ">
          
          <div className=" w-fit flex flex-col flex-wrap gap-3 max-md:gap-1 p-2">
            <p className="text-lg font-semibold text-center max-md:text-sm">{item.busName}</p>
            {item.category?<p className="text-xs font-thin text-center">{item.category}</p>:<p className="text-xs font-thin text-center">NON A/C Sleeper (2+1)</p>}
            <p className="text-sm hover:text-red-500 text-center underline-offset-2 hover:underline">Animeties</p>
            
            <ul className="flex flex-wrap w-fit gap-4 border bg-slate-200 justify-center p-2 rounded-md"  >
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
          
          <div className="flex justify-between flex-wrap h-full">
            <p className="text-sm w-16 max-md:w-fit"> From : {item.from}</p>
            <p className="text-sm w-16 max-md:w-fit">To : {item.to}</p>
            </div>

            <p className="text-center">Fare : {item.busFare}</p>
          
          </div>

          <div>
          
          </div>

          </div>
        </div>
      )}
    })}
  </div>
  );
}

export default BusDetails;
