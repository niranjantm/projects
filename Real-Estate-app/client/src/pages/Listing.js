import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import{Swiper,SwiperSlide} from "swiper/react";
import{Navigation} from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle"
function Listing() {
    
    const params = useParams();
    const [listing,setListing] = useState("");
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    
    useEffect(()=>{
        setError(false);
        setLoading(true);
        
        const fetchListing = async ()=>{
            
           try{
            const res = await fetch(`/api/listing/get/${params.listingId}`,{
                method:"GET"
            })
            const data = await res.json();
            
            if(data.success===false){
                setError(true)
            }else{
                setError(false);
                setLoading(false);
                setListing(data);
             
            }
           }catch(error){
            setError(true);
            setLoading(false);
            console.log(error);
           }
        }
        fetchListing();

    },[])
    
  return (
    <div>
        {loading && <p className='text-center text-lg my-10'>Loading...</p>}
        {error && (<p className='text-center text-lg my-10'>Something went wrong !</p>)}
            <div>
            <Swiper navigation>
                {!listing?"":listing.imageUrl.map((url)=>{
                    return(
                    <SwiperSlide>
                        <div className='h-[550px]' style ={{background: `url(${url}) center no-repeat`,backgroundSize:"cover"}}>   
                        </div>
                    </SwiperSlide>
                )})}
            </Swiper>
            </div>
    </div>
  )
}

export default Listing