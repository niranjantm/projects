import React, { useRef, useState, useEffect,} from "react";
import { useSelector, useDispatch } from "react-redux";
import { app } from "../components/firebase";
import{
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { userUpdateStart,userUpdateFailure,userUpdateSuccess,deleteSuccess,deleteFailure } from "../redux/userReducer.js";
import DeleteModal from "../components/deleteModal";
import { useNavigate } from "react-router-dom";


function Profile() {
  
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [uploadError, setUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [del,setDel] = useState(false)
  const navigate = useNavigate()

  console.log(filePercentage);
  console.log(formData);
// -----------------------------------------IMAGE UPLOAD FUNCTIONALITY---------------------------------------------
 
useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        setUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, photo: downloadURL });
        });
      }
    );
  };
  // ----------------------------------------------------------------------------------------------------------------
  
  const submitHandler = async (event)=>{
    dispatch(userUpdateStart());
    event.preventDefault();
    try{
       
    const data = await fetch(`api/users/update/${user.currentUser._id}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })

    const res = await data.json();
    if(res.success===false){
      dispatch(userUpdateFailure(res.errorMessage))
    }
    else{
      dispatch(userUpdateSuccess(res))
    }

    }catch(error){
      console.log(error)
    }

  }
  const deleteHandler= async()=>{
   try{
    const res = await fetch(`api/users/delete/${user.currentUser._id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await res.json();
    if(data.success==false){
      dispatch(deleteFailure(data.errorMessage));
    }
    alert(data);
    dispatch(deleteSuccess());
    navigate("/");
   } catch(error){
      dispatch(deleteFailure(error.errorMessage));
   }

  }
  const signOutHandler=async ()=>{
    
    try{
      const res = await fetch("api/auth/sign-out");
    const data = await res.json();
    if(data.success==false){
      dispatch(deleteFailure(data.errorMessage));
    }
    alert(data);
    console.log(data);
    dispatch(deleteSuccess());
    navigate("/");
    }catch(error){
      dispatch(deleteFailure(error.errorMessage));
    }

  }

  // ----------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col gap-3" onSubmit={submitHandler}>
        <input
          type="file"
          accept="image/*"
          ref={imageRef}
          hidden
          onChange={(event) => setFile(event.target.files[0])}
        ></input>
        <img
          src={formData.photo || user.currentUser.photo}
          onClick={() => {
            imageRef.current.click();
          }}
          className="rounded-full cursor-pointer self-center object-cover max-w-[100px] max-h-[100px]"
          alt="profile pic"
        ></img>
        <p className="self-center">
          {uploadError ? (
            <span className="text-red-600 uppercase  text-sm">
              Error while uploading Image
            </span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className=" text-sm">{`Uploading ${filePercentage}%`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-500 uppercase text-sm">
              Successfully uploaded
            </span>
          ) : (
            ""
          )}
        </p>
        <input
          placeholder="Username"
          id="username"
          defaultValue={user.currentUser.username}
          className="bg-slate-300 rounded-lg border placeholder-slate-500 border-gray-600 focus:outline-none p-2"
          onChange={(event)=>setFormData({...formData,username:event.target.value})}
        ></input>
        <input
          placeholder="email"
          id="email"
          defaultValue={user.currentUser.email}
          onChange={(event)=>setFormData({...formData,email:event.target.value})}
          className="bg-slate-300 rounded-lg border placeholder-slate-500 border-gray-600 focus:outline-none p-2"
        ></input>
        <input
          placeholder="password"
          id="password"
          onChange={(event)=>setFormData({...formData,password:event.target.value})}
          className="bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2"
        ></input>
        <button disabled={user.loading} type="submit" className="border border-gray-600 uppercase rounded-lg bg-blue-600 p-2 hover:opacity-90 text-white">
          {user.loading?"Loading...":"Update"}
        </button>
        <button type="button" className="border border-gray-600 rounded-lg uppercase bg-blue-600 p-2 hover:opacity-90 text-white">
          Create listings
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer" onClick={deleteHandler}>Delete account</span>
        <span className="text-red-600 cursor-pointer" onClick={signOutHandler}>Sign-out</span>
      </div>
      <p hidden={!user.error} className="text-red-700 text-center text-lg">{user.error}</p>
    </div>
  );
}

export default Profile;
