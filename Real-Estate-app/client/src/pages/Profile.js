import React, { useRef, useState, useEffect } from "react";
import { useSelector, Dispatch } from "react-redux";
import { app } from "../components/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function Profile() {
  const user = useSelector((state) => state.user);
  const imageRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [uploadError, setUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  console.log(filePercentage);
  console.log(formData);

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
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col gap-3">
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
          className="rounded-full cursor-pointer self-center max-w-[100px] max-h-[100px]"
          alt="profile pic"
        ></img>
        <p className="text-center">
          {uploadError ? (
            <span className="text-red-600 uppercase text-center">
              Error while uploading Image
            </span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-center">{`Uploading ${filePercentage}%`}</span>
          ) : filePercentage == 100 ? (
            <span className="text-green-500 uppercase text-center">
              Successfully uploaded
            </span>
          ) : (
            ""
          )}
        </p>
        <input
          placeholder="Username"
          className="bg-slate-300 rounded-lg border placeholder-slate-500 border-gray-600 focus:outline-none p-2"
        ></input>
        <input
          placeholder="email"
          className="bg-slate-300 rounded-lg border placeholder-slate-500 border-gray-600 focus:outline-none p-2"
        ></input>
        <input
          placeholder="password"
          className="bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2"
        ></input>
        <button className="border border-gray-600 uppercase rounded-lg bg-blue-600 p-2 hover:opacity-90 text-white">
          Update
        </button>
        <button className="border border-gray-600 rounded-lg uppercase bg-blue-600 p-2 hover:opacity-90 text-white">
          Create listings
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer">Delete account</span>
        <span className="text-red-600 cursor-pointer">Sign-out</span>
      </div>
    </div>
  );
}

export default Profile;
