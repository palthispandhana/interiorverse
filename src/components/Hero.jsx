import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="
        text-5xl
        md:text-7xl
        font-extrabold
        text-white
        mb-6
        text-center
        "
      >
        InteriorVerse
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}

        className="
        text-lg
        md:text-2xl
        text-gray-300
        mb-8
        text-center
        max-w-2xl
        px-4
        "
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