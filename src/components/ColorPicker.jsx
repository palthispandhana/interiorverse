const colors = [
  "#22d3ee",
  "#a855f7",
  "#f43f5e",
  "#10b981",
  "#f59e0b",
  "#ffffff",
];

const ColorPicker = ({ setObjectColor }) => {
  return (
    <div className="absolute top-24 right-10 bg-black/70 backdrop-blur-md p-4 rounded-2xl z-50 border border-cyan-400">

      <h2 className="text-white text-lg font-bold mb-4">
        Customize Color
      </h2>

      <div className="flex gap-3 flex-wrap">

        {colors.map((color) => (
          <button
            key={color}

            onClick={() =>
              setObjectColor(color)
            }

            className="w-10 h-10 rounded-full border-2 border-white"

            style={{
              background: color,
            }}
          />
        ))}

      </div>

    </div>
  );
};

export default ColorPicker;