import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
//Using NavLink to change the route and to highlight the current route
//Using Outlet to accsses the child elements 
import { FaSearch } from "react-icons/fa";

function MainNav() {
  return (
    <Fragment>
      <header className="p-3  bg-blue-200  ">
       
        <div className="flex justify-evenly max-w-full gap-5 ">
          
          <div className="flex items-center">
            <span>
              <NavLink
                className="text-3xl max-sm:text-lg font-mono font-semibold text-red-500"
                to={"/"}
              >
                property
              </NavLink>
            </span>
            <span>
              <NavLink
                className="text-3xl max-sm:text-lg font-mono font-semibold text-gray-700"
                to={"/"}
              >
                .Com
              </NavLink>
            </span>
          </div>
         
          <form className="bg-stone-100 rounded-lg flex items-center p-2 max-sm:w-[170px] max-sm:max-h-[50px] ">
            <input
              placeholder="Search..."
              className=" bg-transparent p-2 border border-transparent max-sm:max-w-[75%] focus:outline-none "
            ></input>
            <button type="button" className="max-sm:max-w-[25%]">
              <FaSearch className="text-stone-600 ml-2 "></FaSearch>
            </button>
          </form>
          
          <ul className=" min-w-fit flex gap-5">
            <li className=" max-sm:hidden items-center flex hover:underline underline-offset-2">
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? "text-red-500" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className=" max-sm:hidden items-center flex hover:underline underline-offset-2">
              <NavLink
                to={"About"}
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="  items-center flex hover:underline underline-offset-2 ">
              <NavLink
                to={"sign-in"}
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                Sign-in
              </NavLink>
            </li>
          </ul>
       
        </div>
      
      </header>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default MainNav;