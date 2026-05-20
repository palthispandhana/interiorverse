const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-50 bg-black/20 backdrop-blur-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        InteriorVerse
      </h1>

      {/* Links */}
      <ul className="flex gap-8 text-lg">
        <li className="cursor-pointer hover:text-cyan-400 transition">
          Home
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          About
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Projects
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Contact
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;