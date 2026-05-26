import { motion } from "framer-motion";

const Navbar = () => {
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
        text-2xl
        md:text-3xl
        font-extrabold
        tracking-wide
        text-cyan-400
        "
      >
        InteriorVerse
      </h1>

      {/* Navigation Links */}
      <ul
        className="
        hidden md:flex
        gap-8
        text-lg
        items-center
        "
      >

        <li
          className="
          cursor-pointer
          hover:text-cyan-400
          transition
          duration-300
          "
        >
          Home
        </li>

        <li
          className="
          cursor-pointer
          hover:text-cyan-400
          transition
          duration-300
          "
        >
          About
        </li>

        <li
          className="
          cursor-pointer
          hover:text-cyan-400
          transition
          duration-300
          "
        >
          Projects
        </li>

        <li
          className="
          cursor-pointer
          hover:text-cyan-400
          transition
          duration-300
          "
        >
          Contact
        </li>

      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-3xl cursor-pointer">
        ☰
      </div>

    </motion.nav>
  );
};

export default Navbar;