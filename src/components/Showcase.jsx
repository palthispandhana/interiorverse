const Showcase = () => {
  const projects = [
    "3D Living Room",
    "Interactive Furniture",
    "Color Configurator",
    "Responsive Design",
  ];

  return (
    <section
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
      <h2 className="text-5xl font-bold mb-12">
        Project Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">

        {projects.map((item, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            p-8
            rounded-2xl
            border border-white/10
            "
          >
            <h3 className="text-2xl text-cyan-400 mb-3">
              {item}
            </h3>

            <p className="text-gray-400">
              Feature implemented during development of InteriorVerse.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Showcase;