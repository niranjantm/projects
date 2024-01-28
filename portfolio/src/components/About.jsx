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
        <p className="text-lg mb-1 text-slate-100 max-md:text-sm">
          Hello, I'm Niranjan T M, a devoted MERN Full Stack Developer.
            Proficient in React, HTML/CSS, Tailwind CSS, JavaScript, PostgreSQL
            and MongoDB. my focus is on creating seamless user experiences using
            the MERN stack MongoDB, Express JS, React, and Node JS. 
        </p>
          <p className="text-lg mb-1 text-slate-100 max-md:text-sm">
            During an enriching 8-month internship, I immersed myself in an in-depth
            exploration of MERN stack technologies, gaining valuable insights
            and hands-on experience. I successfully developed impactful projects
            that showcase my proficiency in creating robust applications within
            the MERN stack. Eager to apply this knowledge and contribute to
            innovative solutions in future endeavors.
          </p>
          <p className="text-lg mb-2 text-slate-100 max-md:text-sm">
            Thank you for visiting my portfolio, and I'm excited to collaborate with like-minded
            professionals who share a passion for technology and innovation.
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
