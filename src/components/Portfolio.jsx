import { useState } from "react";

const portfolioItems = [
  {
    title: "Modern Kitchen",
    category: "Kitchen",
    image: "/images/kitchen.jpg",
  },

  {
    title: "Luxury Bedroom",
    category: "Bedroom",
    image: "/images/bedroom.jpg",
  },

  {
    title: "Minimal Living Room",
    category: "Living Room",
    image: "/images/livingroom.jpg",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] =
  useState("All");
  const [searchTerm, setSearchTerm] =
  useState("");

  const filteredProjects =
  portfolioItems.filter((item) => {

    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch =
      item.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    return (
      categoryMatch &&
      searchMatch
    );

  });
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
        text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-10
        "
      >
        Interior Portfolio
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">

  <button
    onClick={() => setSelectedCategory("All")}
    className={`px-4 py-2 rounded-full ${
      selectedCategory === "All"
        ? "bg-cyan-400 text-black"
        : "bg-[#111111]"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("Kitchen")}
    className={`px-4 py-2 rounded-full ${
      selectedCategory === "Kitchen"
        ? "bg-cyan-400 text-black"
        : "bg-[#111111]"
    }`}
  >
    Kitchen
  </button>

  <button
    onClick={() => setSelectedCategory("Bedroom")}
    className={`px-4 py-2 rounded-full ${
      selectedCategory === "Bedroom"
        ? "bg-cyan-400 text-black"
        : "bg-[#111111]"
    }`}
  >
    Bedroom
  </button>

  <button
    onClick={() => setSelectedCategory("Living Room")}
    className={`px-4 py-2 rounded-full ${
      selectedCategory === "Living Room"
        ? "bg-cyan-400 text-black"
        : "bg-[#111111]"
    }`}
  >
    Living Room
  </button>

</div>
<div className="flex justify-center mb-8">

  <input
    type="text"

    placeholder="Search projects..."

    value={searchTerm}

    onChange={(e) =>
      setSearchTerm(e.target.value)
    }

    className="
w-full
max-w-md
px-4
py-3
rounded-xl
bg-[#111111]
border
border-white/10
text-white
outline-none
focus:border-cyan-400
focus:shadow-lg
focus:shadow-cyan-500/20
transition
"
  />

</div>

     <p className="text-center text-gray-400 mb-8">
  Showing {filteredProjects.length} project(s)
</p>

     {filteredProjects.length === 0 && (

  <p
    className="
    text-center
    text-red-400
    mb-8
    "
  >
    No projects found.
  </p>

)}

      {/* Portfolio Grid */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >
        {filteredProjects.map((item, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            rounded-2xl
            p-6
            border
            border-white/10
            hover:border-cyan-400
            hover:-translate-y-2
            transition
            duration-300
            "
          >
            <img
              src={item.image}
              alt={item.title}
              onClick={() => setSelectedImage(item.image)}
              className="
              h-40
              w-full
              object-cover
              rounded-xl
              mb-4
              cursor-pointer
              hover:scale-105
              transition
              "
            />

            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 mb-2">
              {item.category}
            </p>

            <p className="text-gray-500 text-sm">
              Interior visualization project
            </p>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
          fixed
          inset-0
          bg-black/80
          flex
          items-center
          justify-center
          z-50
          "
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="
            max-w-[90%]
            max-h-[90%]
            rounded-2xl
            "
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;