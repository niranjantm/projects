import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../utils/BackendUrl';

function Booking() {
    const params = useParams()
    const [bus,setBus] = useState("");
    const [bookSeats,setBookSeats] = useState([]);
    let arr = [{L1:"user123"},{L2:"user123"}]
    
    
    
    useEffect(()=>{
        try{
            const fetchTripdetail = async()=>{
                const res = await axios.get(`${url}/api/tripDetail/get?id=${params.id}`)
                setBus(res.data);
                
            }
            fetchTripdetail();
        }
        catch(error){
            console.log(error)
        }
        
        
    },[])
    const clickHandler=(e)=>{
        
        setBookSeats([...bookSeats,{[e.target.id]:"user123"}])
        
    }
  return (
   (!bus?"": <div className='p-6'>
       
       <div className='flex justify-between'>
      
       <div className='flex flex-col gap-3'>
        <p className='text-lg font-medium'>{bus.busName}</p>
        <p className='text-sm'>{bus.category?bus.category:"NON A/C Sleeper (2+1)"}</p>
        </div> 

        <div className='flex flex-col gap-3'>
            <p className='font-medium'>Date : {bus.date}</p>
            <p>Start Time : {bus.startTime}:00:00</p>
        </div>

        <div className=' '>
            <p className='text-lg text-center underline underline-offset-2'>Animeties</p>
            <div className='bg-gray-100 flex flex-wrap gap-2 p-3 rounded-lg'>
            {bus.animeties.map((item,index)=>{
                return(
                    <p>{item}</p>
                )
            })}
            </div>
            
        </div>
       
       </div>

       <div className='flex gap-4 mt-3 p-2 justify-center flex-wrap'>
       {/* Lower deck */}
        <div className='border w-fit h-fit checked:bg-slate-500 rounded-md'>

            <p className='text-center text-sm'>Lower deck</p>

            <div className='flex gap-4 p-4 pb-1'>
                
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L1'>L1</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L2'>L2</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L3'>L3</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L4'>L4</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L5'>L5</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L6'>L6</div>
            </div>
            <div className='flex gap-4 p-4 pt-0'>
                
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L7'>L7</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L8'>L8</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L9'>L9</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L10'>L10</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L11'>L11</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L12'>L12</div>
            </div>
            <div className='flex gap-4 p-4'>
                
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L13'>L13</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L14'>L14</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L15'>L15</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L16'>L16</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L17'>L17</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L18'>L18</div>
                <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='L19'>L19</div>
            </div>

        </div>
        {/* Upper deck */}
        <div className='border w-fit h-fit checked:bg-slate-500 rounded-md'>
        <p className='text-center text-sm'>Upper deck</p>

<div className='flex gap-4 p-4 pb-1'>
    
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U1'>U1</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U2'>U2</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U3'>U3</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U4'>U4</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U5'>U5</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U6'>U6</div>
</div>
<div className='flex gap-4 p-4 pt-0'>
    
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U7'>U7</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U8'>U8</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U9'>U9</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U10'>U10</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U11'>U11</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U12'>U12</div>
</div>
<div className='flex gap-4 p-4'>
    
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U13'>U13</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U14'>U14</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U15'>U15</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U16'>U16</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U17'>U17</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U18'>U18</div>
    <div className='w-12 h-fit p-3 border rounded-md' onClick={clickHandler} id='U19'>U19</div>
</div>

        </div>
       </div>
       
    
    </div>
    ) )
}

export default Booking