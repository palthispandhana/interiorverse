import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-5xl md:text-7xl font-extrabold">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-bold mb-4 text-center"
      >
        InteriorVerse
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-300"
      >
        Immersive 3D Interior Design Experience
      </motion.p>

      {/* Button */}
      <motion.button
  whileHover={{
    scale: 1.1,
    boxShadow: "0px 0px 20px #22d3ee",
  }}

  whileTap={{ scale: 0.95 }}

  className="
  px-8 py-4
  bg-cyan-400
  text-black
  rounded-full
  font-bold
  text-lg
  hover:scale-110
  transition
  duration-300
  shadow-lg
  shadow-cyan-500/50
  "
>
  Explore Now
</motion.button>

    </div>
  );
};

export default Hero;