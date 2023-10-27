import React, { useState } from "react";
import { app } from "../components/firebase.js";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

function CreateListing() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({ imageUrl: [] });
  const [errorImg, setErrorImg] = useState(false);
  const [uploading,setUploading] = useState(false);
  
  console.log(images);
  console.log(formData.imageUrl);

  const handleUploads = () => {
    if (images.length > 0 && images.length + formData.imageUrl.length < 7) {
      setUploading("Uploading....")
      const promises = [];

      for (let i = 0; i < images.length; i++) {
        promises.push(storeImage(images[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          console.log(urls);
          setFormData({
            ...formData,
            imageUrl: formData.imageUrl.concat(urls),
          });
          setUploading(false);
          setErrorImg(false);
        })
        .catch((error) => {
          setErrorImg("Error while uploading (images must be less than 2 mb)");
        });
    } else {
      setErrorImg("Number images should be less than 6");
    }
  };

  const storeImage = async (image) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const imageName = new Date() + image.name;
      const storageRef = ref(storage, imageName);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload progress : ", Math.round(progress));
        },
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  };
  return (
    <div className="max-w-5xl mx-auto p-5">
      <p className="text-2xl font-bold text-center my-7">Create a Listing</p>

      <form className="flex flex-col gap-5 sm:flex-row max-sm:gap-3 ">
        <div className="flex flex-col flex-1 gap-3">
          <input
            name="name"
            type="text"
            id="name"
            required
            placeholder="Name"
            className="bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2"
          ></input>
          <textarea
            name="description"
            id="description"
            type="text"
            placeholder="description"
            required
            className="bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2"
          ></textarea>
          <textarea
            name="address"
            id="address"
            type="text"
            required
            placeholder="address"
            className="bg-slate-300 placeholder-slate-500 rounded-lg border border-gray-600 focus:outline-none p-2"
          ></textarea>

          <div className="flex gap-6 flex-wrap">
            {/* <div className='flex gap-2'>
          <input type='checkbox' id="sale"className='w-5' name='sale'></input>
          <span className='text-lg'>Sell</span>
          </div> */}
            <div className="flex gap-2">
              <select className="w-20 border border-gray-700 p-1 rounded-md text-lg">
                <option id="sale" className="text-lg" default>
                  Sell
                </option>
                <option id="rent" className="text-lg">
                  Rent
                </option>
              </select>
            </div>
            {/* <div className='flex gap-2'>
          <input type='checkbox' className='w-5' id="rent" name='rent'></input>
          <span className='text-lg'>Rent</span>
          </div> */}
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="furnished"
                name="furnished"
              ></input>
              <span className="text-lg">Furnished</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="parking"
                name="parking"
              ></input>
              <span className="text-lg">Parking</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="offer"
                name="offer"
              ></input>
              <span className="text-lg">Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex gap-2">
              <input
                type="number"
                className="w-11 rounded-md p-1"
                id="bedrooms"
                required
                min="1"
              ></input>
              <span className="text-lg">Bedrooms</span>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                className="w-11 rounded-md p-1"
                id="bathrooms"
                required
                min="1"
              ></input>
              <span className="text-lg">Baths</span>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                className=" rounded-md p-1"
                id="regularprice"
                required
              ></input>
              <div>
                <p className="text-lg">Regular price</p>
                <span className="text-sm">(Ruppess / month)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                className=" rounded-md p-1 "
                id="discountedprice"
              ></input>
              <div>
                <p className="text-lg">discounted price</p>
                <span className="text-sm">(Ruppess / month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-6">
          <div className="flex gap-1">
            <p className="text-md font-semibold">Images :</p>
            <span className="text-sm pt-0.5">
              Maximun of 6 photos of the property
            </span>
          </div>
          <div className=" flex gap-2 ">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImages((pre) => [...pre, ...e.target.files])}
              className="border border-gray-600 p-2 rounded "
            ></input>
            <button
              type="button"
              onClick={handleUploads}
              disabled={uploading}
              className="border border-green-400 bg-green-400 disabled:opacity-80 text-black shadow-lg hover:opacity-90 rounded-lg p-3"
            >
              {!uploading?"Upload":uploading}
            </button>
            
          </div>
{/*---------------------- Using map to display each image stored in formData.imageUrl array ---------------------*/}
          <div>
          <p
              hidden={!errorImg}
              className="text-red-600 text-sm text-center p-2"
            >
              {errorImg}
            </p>
            {formData.imageUrl.length == 0
              ? ""
              : formData.imageUrl.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between flex-wrap max-h-[120px] min-h-[120px] border border-gray-400 rounded-lg p-2 m-2"
                    >
                      <img
                        src={item}
                        alt="img"
                        className="w-[150px] max-h-[100px] object-contain rounded-lg"
                      ></img>
                      <button
                        className="text-red-600"
                        type="button"
                        onClick={() => {
          //----------Using filter to delete the specific item in the array------------------------- 
                          setFormData({
                            ...formData,
                            imageUrl: formData.imageUrl.filter((item, id) => {
                              return id !== index;
                            }),
                          });
                          setErrorImg(false)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
          </div>
        
          <div>
            
            <button
              type="submit"
              className="uppercase w-full p-3 bg-blue-700 rounded-lg text-white shadow-md hover:opacity-90"
            >
              Create Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateListing;
