import React from "react";

function About() {
  return (
    <div
      name="about"
      className="h-screen flex flex-col items-center border-none p-2 bg-gradient-to-b from-[#7366e6] via-gray-500 to-[#7366e6] "
    >
      <div className="p-4 flex  max-w-screen-lg w-full">
        <h1 className="text-5xl font-bold underline underline-offset-3 text-slate-100">
          About
        </h1>
      </div>
      <div className=" p-4 max-w-screen-lg w-full">
        <p className="text-lg mb-2 text-slate-100 max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          eligendi, libero saepe necessitatibus, voluptatem nobis sed tempora
          laborum suscipit modi laboriosam perspiciatis explicabo perferendis
          vitae consequuntur quasi rerum magni consequatur nostrum adipisci
          dicta earum alias in! Architecto incidunt laboriosam molestias! Totam
          praesentium molestias laborum sit, labore magni maiores ea sunt.
        </p>
        <p className="text-lg mb-2 text-slate-100 max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          eligendi, libero saepe necessitatibus, voluptatem nobis sed tempora
          laborum suscipit modi laboriosam perspiciatis explicabo perferendis
          vitae consequuntur quasi rerum magni consequatur nostrum adipisci
          dicta earum alias in! Architecto incidunt laboriosam molestias! Totam
          praesentium molestias laborum sit, labore magni maiores ea sunt.
        </p>
        <p className="text-lg text-slate-100 max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          eligendi, libero saepe necessitatibus, voluptatem nobis sed tempora
          laborum suscipit modi laboriosam perspiciatis explicabo perferendis
          vitae consequuntur quasi rerum magni consequatur nostrum adipisci
          dicta earum alias in! Architecto incidunt laboriosam molestias! Totam
          praesentium molestias laborum sit, labore magni maiores ea sunt.
        </p>
      </div>
    </div>
  );
}

export default About;
