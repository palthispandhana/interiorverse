const Projects = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-6">

      <h2 className="text-5xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-[#111111] p-6 rounded-2xl shadow-lg shadow-cyan-500/10">
          <h3 className="text-2xl font-bold mb-4">
            Luxury Living Room
          </h3>

          <p className="text-gray-400">
            Modern cinematic interior experience with realistic lighting and smooth navigation.
          </p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl shadow-lg shadow-cyan-500/10">
          <h3 className="text-2xl font-bold mb-4">
            Smart Bedroom
          </h3>

          <p className="text-gray-400">
            Interactive 3D bedroom design showcasing immersive modern UI experiences.
          </p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl shadow-lg shadow-cyan-500/10">
          <h3 className="text-2xl font-bold mb-4">
            Future Workspace
          </h3>

          <p className="text-gray-400">
            Futuristic workspace concept built with realistic materials and animations.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Projects;