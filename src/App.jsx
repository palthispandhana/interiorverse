import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreeScene from "./components/ThreeScene";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        <Hero />
        <ThreeScene />
      </div>

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />
      <Footer />

    </div>
  );
}

export default App;