import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`
        fixed top-0 left-0
        w-full
        flex justify-between items-center
        px-6 md:px-10
        py-4 md:py-6
        z-50
        backdrop-blur-md
        border-b
        transition duration-500

        ${
          darkMode
            ? "bg-black/20 border-white/10 text-white"
            : "bg-white/30 border-black/10 text-black"
        }
      `}
    >
      {/* Logo */}
      <h1
        className="
        text-2xl md:text-3xl
        font-extrabold
        tracking-wide
        text-cyan-400
        "
      >
        InteriorVerse
      </h1>

      {/* Desktop Navigation */}
      <ul
        className="
        hidden md:flex
        gap-8
        text-lg
        items-center
        "
      >
        <a href="#home">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Home
          </li>
        </a>

        <a href="#about">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            About
          </li>
        </a>

        <a href="#projects">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Projects
          </li>
        </a>

        <a href="#portfolio">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Portfolio
          </li>
        </a>

        <a href="#testimonials">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Reviews
          </li>
        </a>

        <a href="#faq">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            FAQ
          </li>
        </a>

        <a href="#contact">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </a>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="
        md:hidden
        text-3xl
        hover:text-cyan-400
        transition
        duration-300
        "
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`
            absolute
            top-20
            right-6
            rounded-2xl
            p-6
            flex flex-col
            gap-4
            md:hidden
            border
            backdrop-blur-md

            ${
              darkMode
                ? "bg-black/90 border-cyan-400 text-white"
                : "bg-white/90 border-cyan-500 text-black"
            }
          `}
        >
          <a href="#home">
            <button className="hover:text-cyan-400 transition">
              Home
            </button>
          </a>

          <a href="#about">
            <button className="hover:text-cyan-400 transition">
              About
            </button>
          </a>

          <a href="#projects">
            <button className="hover:text-cyan-400 transition">
              Projects
            </button>
          </a>

          <a href="#portfolio">
            <button className="hover:text-cyan-400 transition">
              Portfolio
            </button>
          </a>

          <a href="#testimonials">
            <button className="hover:text-cyan-400 transition">
              Reviews
            </button>
          </a>

          <a href="#faq">
            <button className="hover:text-cyan-400 transition">
              FAQ
            </button>
          </a>

          <a href="#contact">
            <button className="hover:text-cyan-400 transition">
              Contact
            </button>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;