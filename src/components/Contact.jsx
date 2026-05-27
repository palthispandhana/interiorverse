import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section

      id="contact"

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
      bg-black
      text-white
      flex flex-col
      justify-center
      items-center
      px-6
      py-24
      "
    >

      {/* Heading */}
      <h2
        className="
        text-4xl md:text-5xl
        font-bold
        mb-8
        text-center
        "
      >
        Contact Me
      </h2>

      {/* Subtitle */}
      <p
        className="
        text-gray-400
        text-lg
        text-center
        max-w-2xl
        mb-12
        "
      >
        Interested in immersive 3D web experiences,
        interior visualizations, or modern frontend
        design projects? Let’s connect.
      </p>

      {/* Contact Card */}
      <div
        className="
bg-[#111111]
border border-white/10
rounded-3xl
p-8
w-full
max-w-2xl
shadow-lg
shadow-cyan-500/10
hover:border-cyan-400
transition
duration-300
"
      >

        <div className="mb-6">

          <h3 className="text-cyan-400 text-xl mb-2">
            Email
          </h3>

          <p className="text-gray-300">
            yourmail@example.com
          </p>

        </div>

        <div className="mb-6">

          <h3 className="text-cyan-400 text-xl mb-2">
            Instagram
          </h3>

          <p className="text-gray-300">
            @interiorverse
          </p>

        </div>

        <div>

          <h3 className="text-cyan-400 text-xl mb-2">
            GitHub
          </h3>

          <p className="text-gray-300">
            github.com/yourprofile
          </p>

        </div>

      </div>

    </motion.section>
  );
};

export default Contact;