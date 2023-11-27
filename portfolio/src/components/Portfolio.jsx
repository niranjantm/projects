import React from "react";

function Portfolio() {
  const projects = [
    {
      id: 1,
      src: "https://static.vecteezy.com/system/resources/thumbnails/008/123/814/small_2x/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg",
      name: "Property.com",
      description:
        "A full stack web application which uses ReactJS and Tailwind for the frontend and ExpressJS and MongoDB for the backend (MERN-stack).Users can create their account and list their properties for sale or rent",
      deploy: "https://property-com.onrender.com",
      git: "https://github.com/niranjantm/projects/tree/main/Real-Estate-app",
    },
    {
      id: 2,
      src: "https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/4423ddba-8b09-4ff8-8d50-8b4e294ed43a_CI.png",
      name: "FlashCard Generator",
      description:
        "A frontend web application which uses ReactJS, Tailwind, Formik, React-redux, Framer motion to provide best user experience and responsive UI. A user can create multiple flashcards by providing name, despcription and image. These created flashcards are then stored in the browser localstorage to retain the information even after page reload",
      deploy: "https://flashcard-1v48.onrender.com",
      git: "https://github.com/niranjantm/FlashCard_Project",
    },
    {
      id: 3,
      src: "https://5.imimg.com/data5/AE/KE/VR/SELLER-95206069/bus-booking-software-500x500.jpg",
      name: "BookMYBus",
      description:
        "A full stack web application using ReactJS, Tailwind and Framer Motion for the frontend and ExpressJS and MongoDB for the backend (MERN-stack).Users can create their account and book their tickets by selecting the detinations and date.",
      deploy: "",
      git: "https://github.com/niranjantm/projects/tree/main/Bus_Booking_app",
    },
    {
      id: 4,
      src: "https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg",
      name: "BookMyShow",
      description:
        "A web application which ReactJS and Tailwind for the frontend and ExpressJS and MongoDB for the backend (MERN-stack).Users can create booking for the shows they want with ease",
      deploy: "",
      git: "https://github.com/niranjantm/BookingAPI",
    },
  ];
  return (
    <div name="portfolio" className="min-h-screen flex flex-col items-center  gap-3  ">
      <div className="max-w-screen-lg w-full mt-20 p-2  ">
        <h1 className="text-5xl font-bold underline underline-offset-2 text-slate-100 mb-5 max-md:text-3xl">
          Portfolio
        </h1>
        <p className="text-lg text-slate-100">Checkout some of my work right here</p>
      </div>
     
      <div className="flex flex-wrap gap-3 justify-center max-w-screen-lg">
        {projects.map((item)=>{
          return(
            <div className="flex flex-col w-[300px] gap-1 rounded-md h-[400px] shadow-lg shadow-slate-400 p-2 max-md:w-[300px] max-md:h-[300px]">
              <img src={item.src} atl="project-profile" className="rounded-md object-fill w-full h-[200px] hover:scale-105 duration-200 max-md:w-full max-md:h-[100px]"></img>
              <h1 className="text-center text-3xl font-semibold">{item.name}</h1>
              <p className="text-sm text-center line-clamp-3">{item.description}</p>
              <div className="flex justify-center px-5 gap-4 mt-4">
              {item.deploy && <a href={item.deploy} target="_blank" className=" bg-red-600 text-slate-100 hover:scale-105 px-5 py-2 rounded-lg font-medium">Visit</a>} 
              <a href={item.git}  target="_blank" className=" bg-red-600 text-slate-100 hover:scale-105 rounded-lg px-5 py-2 font-medium">Code</a> 
              </div>


            </div>
          )
        })}
      </div>
    
    </div>
  );
}

export default Portfolio;
