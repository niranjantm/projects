import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import url from "../utils/BackendUrl";

function Booking() {
  const params = useParams();
  const [bus, setBus] = useState("");
  const [bookSeats, setBookSeats] = useState([]);
  const [color, setColor] = useState(false);
  let seats = bookSeats;
  console.log(bookSeats);

  useEffect(() => {
    try {
      const fetchTripdetail = async () => {
        const res = await axios.get(
          `${url}/api/tripDetail/get?id=${params.id}`
        );
        setBus(res.data);
        setBookSeats(res.data.seats);
      };
      fetchTripdetail();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return !bus ? (
    ""
  ) : (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-medium">{bus.busName}</p>
          <p className="text-sm">
            {bus.category ? bus.category : "NON A/C Sleeper (2+1)"}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-medium">Date : {bus.date}</p>
          <p>Start Time : {bus.startTime}:00:00</p>
        </div>

        <div className=" ">
          <p className="text-lg text-center underline underline-offset-2 ">
          Amenities
          </p>
          <div className="bg-gray-100 flex flex-wrap gap-2 p-3 rounded-lg">
            {bus.animeties.map((item, index) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>

      <div className="w-full md:flex mt-10">
        {/* Lower deck */}
        <div className="bg-slate-400 w-fit mx-auto p-4 rounded-lg shadow-lg ">
          <p className="text-2xl font-semibold text-center mb-2">Lower Deck</p>
          <ul className="flex gap-3 max-w-[400px]  justify-center mx-auto">
            {!bookSeats
              ? ""
              : bookSeats.map((item, index) => {
                  if (index <= 5) {
                    return (
                      <button
                        key={index}
                        disabled={item.user?true:false}
                        className={`border w-[40px] h-[40px] p-1 rounded-lg capitalize ${item[Object.keys(item)]?'bg-red-500':'bg-transparent'}`}
                        onClick={() => {
                          seats.splice(index, 1, {
                            [Object.keys(item)]: !item[Object.keys(item)],
                            
                          });
                          setBookSeats([...seats]);
                          
                        }}
                      >
                        {Object.keys(item)}
                      </button>
                    );
                  }
                })}
          </ul>
          <ul className="flex gap-3 max-w-[400px]  justify-center mx-auto">
            {!bus
              ? ""
              : bus.seats.map((item, index) => {
                  if (index < 12 && index > 5) {
                    return (
                      <button
                      disabled={item.user?true:false}
                      className={`border w-[40px] h-[40px] p-1 rounded-lg capitalize ${item[Object.keys(item)]?'bg-red-500':'bg-transparent'}`}
                      onClick={() => {
                        seats.splice(index, 1, {
                          [Object.keys(item)]: !item[Object.keys(item)],
                          
                        });
                        setBookSeats([...seats]);
                        
                      }}
                      >
                        {Object.keys(item)}
                      </button>
                    );
                  }
                })}
          </ul>
          <ul className="flex gap-3 max-w-[400px]  justify-center mx-auto mt-10">
            {!bus
              ? ""
              : bus.seats.map((item, index) => {
                  if (index >= 12 && index < 19) {
                    return (
                      <button
                      disabled={item.user?true:false}
                      className={`border w-[40px] h-[40px] p-1 rounded-lg capitalize ${item[Object.keys(item)]?'bg-red-500':'bg-transparent'}`}
                      onClick={() => {
                        seats.splice(index, 1, {
                          [Object.keys(item)]: !item[Object.keys(item)],
                          
                        });
                        setBookSeats([...seats]);
                        
                      }}
                      >
                        {Object.keys(item)}
                      </button>
                    );
                  }
                })}
          </ul>
        </div>

        {/* Upper Deck */}
        <div className="max-md:mt-10 bg-slate-400 w-fit mx-auto p-4 rounded-lg shadow-lg">
          <p className="text-2xl font-semibold text-center mb-2">Upper Deck</p>
          <ul className="flex gap-3 max-w-[400px]  justify-center mx-auto">
            {!bus
              ? ""
              : bus.seats.map((item, index) => {
                  if (index >= 19 && index < 25) {
                    return (
                      <button
                      disabled={item.user?true:false}
                      className={`border w-[40px] h-[40px] p-1 rounded-lg capitalize ${item[Object.keys(item)]?'bg-red-500':'bg-transparent'}`}
                      onClick={() => {
                        seats.splice(index, 1, {
                          [Object.keys(item)]: !item[Object.keys(item)],
                          
                        });
                        setBookSeats([...seats]);
                        
                      }}
                      >
                        {Object.keys(item)}
                      </button>
                    );
                  }
                })}
          </ul>
          <ul className="flex gap-3 max-w-[400px]  justify-center mx-auto">
            {!bus
              ? ""
              : bus.seats.map((item, index) => {
                  if (index >= 25 && index < 31) {
                    return (
                      <button
                      disabled={item.user?true:false}
                      className={`border w-[40px] h-[40px] p-1 rounded-lg capitalize ${Object.keys(bookSeats[index])?'bg-red-500':'bg-transparent'}`}
                      onClick={() => {
                        seats.splice(index, 1, {
                          [Object.keys(item)]: !item[Object.keys(item)],
                          
                        });
                        setBookSeats([...seats]);
                        
                      }}
                      >
                        {Object.keys(item)}
                      </button>
                    );
                  }
                })}
          </ul>
          <ul className="flex gap-3 max-w-[400px] justify-center mx-auto mt-10">
            {!bus
              ? ""
              : bus.seats.map((item, index) => {
                  if (index >= 31) {
                    return (
                      <button
                      disabled={item.user?true:false}
                      className={`border w-[40px] h-[40px] p-1 rounded-lg capitalize ${item[Object.keys(item)]?'bg-red-500':'bg-transparent'}`}
                      onClick={() => {
                        seats.splice(index, 1, {
                          [Object.keys(item)]: !item[Object.keys(item)],
                          
                        });
                        setBookSeats([...seats]);
                        
                      }}
                      >
                        {Object.keys(item)}
                      </button>
                    );
                  }
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Booking;
