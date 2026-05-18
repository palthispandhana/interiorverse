import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white z-10">

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
        className="text-xl text-gray-300 mb-6 text-center"
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

        className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold transition duration-300"
      >
        Explore Now
      </motion.button>

    </div>
  );
};

export default Hero;