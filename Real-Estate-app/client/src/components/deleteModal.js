// import React from 'react'
// import { ReactDOM } from 'react-dom';
// import {useSelector,useDispatch} from "react-redux";

// function DeleteModal() {
//     const user = useSelector(state=>state.user)
//     const deleteHandler=async ()=>{
//         const res = await fetch(`/delete/${user.currentUser._id}`,{
//             method:"DELETE",
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         })
//         const data = await res.json();
//         console.log(data);
//     }
//   return ReactDOM.createPortal (
//     <div>
//         <div className='max-w-lg max-h-lg border border-gray-600 shadow-lg rounded-md mx-auto'>
//             <p className='text-lg text-black font-semibold text-center'>Are you sure</p>
//             <div className='flex justify-between'>
//             <span onClick={deleteHandler} className='p-2 border border-gray-500 rounded-md uppercase bg-red-600 text-white'>yes</span>
//             <span className='p-2 border border-gray-500 rounded-md uppercase bg-red-600 text-white'>no</span>
//             </div>
//         </div>
//     </div>,document.getElementById("delete")
//   )
// }

// export default DeleteModal