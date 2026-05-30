import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import ThreeScene from "./components/ThreeScene";

import About from "./components/About";

import Projects from "./components/Projects";

import Contact from "./components/Contact";

import Footer from "./components/Footer";

import ThemeToggle from "./components/ThemeToggle";

import { useTheme }
from "./context/ThemeContext";

import Showcase from "./components/Showcase";

function App() {

  const { darkMode } =
    useTheme();

  return (
    <div

      className={`
      overflow-x-hidden
      transition duration-500
      ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }
      `}
    >

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div
        id="home"
        className="relative h-screen"
      >
        <Hero />

        <ThreeScene />
      </div>

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Theme Button */}
      <ThemeToggle />

    </div>
  );
}

export default App;