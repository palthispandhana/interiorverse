const portfolioItems = [
  {
    title: "Modern Kitchen",
    category: "Kitchen",
  },

  {
    title: "Luxury Bedroom",
    category: "Bedroom",
  },

  {
    title: "Minimal Living Room",
    category: "Living Room",
  },

  {
    title: "Contemporary Workspace",
    category: "Workspace",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="
      min-h-screen
      bg-[#080808]
      text-white
      px-6
      py-24
      "
    >
      <h2
        className="
        text-4xl md:text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Interior Portfolio
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-10">

  <button className="px-4 py-2 rounded-full bg-cyan-400 text-black">
    All
  </button>

  <button className="px-4 py-2 rounded-full bg-[#111111]">
    Kitchen
  </button>

  <button className="px-4 py-2 rounded-full bg-[#111111]">
    Bedroom
  </button>

  <button className="px-4 py-2 rounded-full bg-[#111111]">
    Living Room
  </button>

</div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            rounded-2xl
            p-6
            border
            border-white/10
            hover:border-cyan-400
            transition
            "
          >
            <div
              className="
              h-40
              rounded-xl
              bg-gradient-to-br
              from-cyan-500/20
              to-purple-500/20
              mb-4
              "
            />

            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;