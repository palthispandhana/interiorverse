import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Home Owner",
    review:
      "The interior concepts were modern, elegant, and exactly what we wanted.",
  },

  {
    name: "Priya Reddy",
    role: "Apartment Owner",
    review:
      "Amazing visualizations and excellent attention to detail throughout the design process.",
  },

  {
    name: "Arjun Kumar",
    role: "Workspace Client",
    review:
      "The project completely transformed our workspace and improved functionality.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="
      min-h-screen
      bg-[#050505]
      text-white
      px-6
      py-24
      "
    >
      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Client Testimonials
      </h2>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        max-w-6xl
        mx-auto
        "
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}

            viewport={{ once: true }}

            whileHover={{
              scale: 1.05,
            }}

            className="
            bg-[#111111]
            border
            border-white/10
            rounded-2xl
            p-6
            hover:border-cyan-400
            transition
            "
          >
            <p className="text-gray-300 mb-6">
              "{item.review}"
            </p>

            <h3 className="text-xl font-bold text-cyan-400">
              {item.name}
            </h3>

            <p className="text-gray-500">
              {item.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;