import { motion } from "framer-motion";

import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}

      animate={{ y: 0 }}

      transition={{ duration: 1 }}

      className="
      fixed top-0 left-0
      w-full
      flex justify-between items-center
      px-6 md:px-10
      py-4 md:py-6
      text-white
      z-50
      bg-black/20
      backdrop-blur-md
      border-b border-white/10
      "
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

      {/* Desktop Links */}
      <ul
        className="
        hidden md:flex
        gap-8
        text-lg
        items-center
        "
      >

        <li className="hover:text-cyan-400 transition">
          Home
        </li>

        <li className="hover:text-cyan-400 transition">
          About
        </li>

        <li className="hover:text-cyan-400 transition">
          Projects
        </li>

        <li className="hover:text-cyan-400 transition">
          Contact
        </li>

      </ul>

      {/* Mobile Button */}
      <button
        onClick={() =>
          setMenuOpen(!menuOpen)
        }

        className="
        md:hidden
        text-3xl
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

          className="
          absolute
          top-20
          right-6
          bg-black/90
          backdrop-blur-md
          border border-cyan-400
          rounded-2xl
          p-6
          flex flex-col
          gap-4
          md:hidden
          "
        >

          <button className="hover:text-cyan-400">
            Home
          </button>

          <button className="hover:text-cyan-400">
            About
          </button>

          <button className="hover:text-cyan-400">
            Projects
          </button>

          <button className="hover:text-cyan-400">
            Contact
          </button>

        </motion.div>

      )}

    </motion.nav>
  );
};

export default Navbar;