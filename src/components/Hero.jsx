const Hero = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white z-10">

      <h1 className="text-6xl font-bold mb-4 text-center">
        InteriorVerse
      </h1>

      <p className="text-xl text-gray-300 mb-6 text-center">
        Immersive 3D Interior Design Experience
      </p>

      <button className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold hover:scale-110 transition duration-300 shadow-lg shadow-cyan-500/50">
        Explore Now
      </button>

    </div>
  );
};

export default Hero;