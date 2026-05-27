import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreeScene from "./components/ThreeScene";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
  id="home"
  className="relative h-screen"
></div>

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;