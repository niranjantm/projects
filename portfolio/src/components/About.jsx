import React from "react";
import { Element } from "react-scroll";

function About() {
  return (
    <Element
      name="about"
      className="h-screen flex flex-col items-center border-none p-2 py-8"
    >
      <div className="p-4 flex  max-w-screen-lg w-full mt-10 max-md:mt-16">
        <h1 className="text-5xl font-bold underline underline-offset-3 text-slate-100 max-md:text-3xl">
          About
        </h1>
      </div>
      <div className=" p-4 max-w-screen-lg w-full flex justify-between gap-10 max-md:flex-col mt-5 max-md:mt-2 ">
        <div className="w-full">
        <p className="text-lg mb-2 text-slate-100 max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          eligendi, libero saepe necessitatibus, voluptatem nobis sed tempora
          laborum suscipit modi laboriosam perspiciatis explicabo perferendis
          vitae consequuntur quasi rerum magni consequatur nostrum adipisci
          dicta earum alias in! Architecto incidunt laboriosam molestias! Totam
          praesentium molestias laborum sit, labore magni maiores ea sunt.
        </p>
        </div>
        <div className="w-full flex justify-center md:ml-10 ">
          <img src="https://img.freepik.com/premium-vector/successful-business-man-dressed-stylish-suit-with-confidence-pointing-himself-with-fingers-proud-happy-high-self-esteem-concept-illustration_270158-315.jpg?w=740" alt="about-profile" className="rounded-lg w-[400px] max-md:w-[300px] shadow-lg"></img>
        </div>
        
      </div>
    </Element>
  );
}

export default About;
