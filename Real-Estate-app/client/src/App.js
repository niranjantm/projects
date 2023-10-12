import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// Using createBrowserRouter,RouterProvider to create routes
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import MainNav from './components/MainNav';

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<MainNav></MainNav>,children:[
    {index:true,element:<Home></Home>},
    {path:"/about",element:<About></About>},
    {path:"/sign-in",element:<SignIn></SignIn>},
    {path:"/sign-up",element:<SignUp></SignUp>},
    {path:"/profile",element:<Profile></Profile>},
    ]},
    
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App