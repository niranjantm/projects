import{createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from "./pages/Header";
import Home from "./pages/Home";
import UserSignIn from "./pages/UserSignIn";
import BusDetails from "./pages/BusDetails";
import Booking from "./pages/Booking";
import UserSignUp from "./pages/UserSignUp";
import PrivatePages from "./utils/PrivatePages";
import Account from "./pages/Account";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Header></Header>,children:[
      {index:true,element:<Home></Home>},
      {path:"/signIn",element:<UserSignIn></UserSignIn>},
      {path:"/signUp",element:<UserSignUp></UserSignUp>},
      {path:"/busDetails/:date/:from/:to",element:<BusDetails></BusDetails>},
      {element:<PrivatePages></PrivatePages>,children:[
        {path:"/booking/:id",element:<Booking></Booking>},
        {path:'/account',element:<Account></Account>}

      ]}
      
    ]}
  ])
  return(
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;
