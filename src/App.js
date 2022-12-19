import About from "./components/About";
import Experties from "./components/Experties";
import Home from "./components/Home";
import NavBar from "./components/navBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#5f2c82] to-[#49a09d]">
      <NavBar />
      <SocialLinks />
      <Home />
      <About />
      <Experties />
      <Project/>
    </div>
  );
}

export default App;
