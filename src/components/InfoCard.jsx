const InfoCard = ({ selected }) => {
  if (!selected) return null;

  return (
    <div className="absolute bottom-10 left-10 bg-black/70 backdrop-blur-md text-white p-6 rounded-2xl z-50 shadow-lg border border-cyan-400">

      <h2 className="text-2xl font-bold mb-2">
        {selected.title}
      </h2>

      <p className="text-gray-300">
        Modern interactive 3D furniture object.
      </p>

    </div>
  );
};

export default InfoCard;