import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    desc: "Modern cinematic interior experience.",
  },

  {
    title: "Smart Bedroom",
    desc: "Interactive futuristic bedroom design.",
  },

  {
    title: "Future Workspace",
    desc: "Modern workspace visualization.",
  },
];

const Projects = () => {
  return (
    <section
      className="
      min-h-screen
      bg-[#050505]
      text-white
      flex flex-col
      justify-center items-center
      px-6
      "
    >

      <motion.h2

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{ once: true }}

        className="text-5xl font-bold mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 100,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}

            viewport={{ once: true }}

            whileHover={{
              scale: 1.05,
            }}

            className="
            bg-[#111111]
            p-6
            rounded-2xl
            shadow-lg
            shadow-cyan-500/10
            "
          >

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Projects;