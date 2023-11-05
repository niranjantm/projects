import React from 'react'

function Search() {
  return (
    <div className='flex-col sm:flex'>
        {/* ------------------------------CONDITIONS------------------------------ */}
        

            <div className='border border-gray-200 p-5 w-fit h-screen flex flex-col gap-6 max-sm:h-fit max-sm:w-screen'>
               <div className='flex gap-2'>
               <span className='text-sm'>Type:</span>
                <input type="checkbox" className="w-6 h-6 " defaultChecked={true} id="type"value="all"></input>
                <span className='text-sm'>Sale & Rent</span>
                
                <input type="checkbox" className="w-6 h-6 " id='type' value="sale"></input>
                <span className='text-sm'>Sale</span>
                
                <input type="checkbox" className="w-6 h-6 " id='type' value="rent"></input>
                <span className='text-sm'>Rent</span>
                
                <input type="checkbox" className="w-6 h-6 " id='offer' ></input>
                <span className='text-sm'>Offer</span>
               </div>
              
               <div className='flex gap-2'>
                <span className='text-sm'>Amenities:</span>
                <input type="checkbox" className="w-6 h-6 " id='parking' defaultChecked={true}></input>
                <span className='text-sm'>Parking</span>
                <input type="checkbox" className="w-6 h-6" id='furnished' defaultChecked={true}></input>
                <span className='text-sm'>Furnished</span>
               </div>

               <div className='flex gap-2'>
                <span className='text-sm'>Sort:</span>
                <select className="w-26   text-lg bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2">
                    <option>Latest</option>
                    <option>Price high to low</option>
                    <option>Price low to high</option>
                    <option>Oldest</option>
                </select>
               </div>
            
            <div>
               <button className="uppercase w-full p-3 bg-blue-700 rounded-lg disabled:opacity-80 text-white shadow-md hover:opacity-90">Search</button> 
            </div>
            
            </div>

        
        {/* --------------------------------RESULTS-------------------------------- */}
        <div>
            <p>RESULTS</p>
        </div>
    </div>
  )
}

export default Search