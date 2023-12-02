
import Navbar from './Components/navbar';
import Home from './Components/home'
import About from './Components/About'
import Projects from './Components/projects';
import  Skils from "./Components/skils";
import Contact from "./Components/contact"

function App() {
  return (
    <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black" >
    <Navbar />
    <Home/>
    <About/>
    <Projects/>
    <Skils/>
    <Contact/>
  
       </div>
  );
}

export default App;
