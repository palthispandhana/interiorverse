import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section

      initial={{
        opacity: 0,
        y: 100,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      viewport={{ once: true }}

      className="
      min-h-screen
      flex flex-col
      justify-center items-center
      bg-black
      text-white
      px-6
      "
    >

      <h2 className="text-5xl font-bold mb-6">
        About InteriorVerse
      </h2>

      <p 
      className="
      max-w-3xl
      text-center
      text-lg md:text-xl
      text-gray-300
      leading-relaxed
      px-4
     "
     >
        InteriorVerse is an immersive 3D interior
        design experience built using React,
        Three.js, and React Three Fiber.
      </p>

    </motion.section>
  );
};

export default About;