import{createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from "./pages/Header";
import Home from "./pages/Home";
import Account from "./pages/Account";
import BusDetails from "./pages/BusDetails";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Header></Header>,children:[
      {index:true,element:<Home></Home>},
      {path:"/account",element:<Account></Account>},
      {path:"/busDetails/:date/:from/:to",element:<BusDetails></BusDetails>}
    ]}
  ])
  return(
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;
