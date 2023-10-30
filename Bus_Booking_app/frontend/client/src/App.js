import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Header></Header>,children:[
      {index:true,element:<Home></Home>}
    ]}
  ])
  return(
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App;
