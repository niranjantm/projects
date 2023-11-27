
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Exerience from "./components/Exerience"
import Contact from "./components/Contact"

function App() {
  

  return (
   <div className="bg-gradient-to-b from-[#7366e6] via-gray-500 to-[#7366e6]">

    <Navbar></Navbar>
    <Home></Home>

    <SocialLinks></SocialLinks>
    <About></About>
    <Portfolio></Portfolio>
    <Exerience></Exerience>
    <Contact></Contact>
    
    
    
   </div>
  )
}

export default App
