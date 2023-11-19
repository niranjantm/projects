import{createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from "./pages/Header";
import Home from "./pages/Home";
import Account from "./pages/Account";
import BusDetails from "./pages/BusDetails";
import Booking from "./pages/Booking";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Header></Header>,children:[
      {index:true,element:<Home></Home>},
      {path:"/account",element:<Account></Account>},
      {path:"/busDetails/:date/:from/:to",element:<BusDetails></BusDetails>},
      {path:"/booking/:id",element:<Booking></Booking>}
    ]}
  ])
  return(
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;
