import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/navBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-[#b6c199] bg-opacity-60 text-black md:text-white md:bg-gradient-to-br from-[#abd699] to-[#49a09d] ">
      <NavBar />
      <SocialLinks />
      <Home />
      <About />
      <Experience />
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
