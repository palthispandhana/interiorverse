import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    desc: "Modern cinematic interior experience with realistic lighting and immersive 3D interactions.",
  },

  {
    title: "Smart Bedroom",
    desc: "Interactive futuristic bedroom design built using React Three Fiber and smooth animations.",
  },

  {
    title: "Future Workspace",
    desc: "Premium workspace visualization with responsive layouts and dynamic UI effects.",
  },
];

const Projects = () => {
  return (
    <section id="projects"
  
    className="
    absolute inset-0
    flex flex-col
    justify-center items-center
    text-white
    z-10
    px-6
   "
    >

      {/* Heading */}
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

        className="
        text-4xl
        md:text-5xl
        font-bold
        mb-16
        text-center
        "
      >
        Featured Projects
      </motion.h2>

      {/* Cards */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        w-full
        max-w-6xl
        "
      >

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
            p-8
            rounded-2xl
            shadow-lg
            shadow-cyan-500/10
            border
            border-white/10
            hover:border-cyan-400
            transition
            duration-300
            "
          >

            {/* Project Title */}
            <h3
              className="
              text-2xl
              font-bold
              mb-4
              text-cyan-400
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="
              text-gray-400
              leading-relaxed
              "
            >
              {project.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Projects;