import About from "./components/About";
import Experties from "./components/Experties";
import Home from "./components/Home";
import NavBar from "./components/navBar";
import SocialLinks from "./components/SocialLinks";
import Project from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <SocialLinks />
      <Home />
      <About />
      <Experties />
      <Project />
    </div>
  );
}

export default App;
