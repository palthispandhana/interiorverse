const RoomSelector = ({
  currentRoom,
  setCurrentRoom,
}) => {

  const rooms = [
    "Living Room",
    "Bedroom",
    "Workspace",
  ];

  return (
    <div className="absolute top-24 left-10 bg-black/70 backdrop-blur-md p-4 rounded-2xl z-50 border border-cyan-400">

      <h2 className="text-white text-lg font-bold mb-4">
        Select Room
      </h2>

      <div className="flex flex-col gap-3">

        {rooms.map((room) => (
          <button
            key={room}

            onClick={() =>
              setCurrentRoom(room)
            }

            className={`
            px-4 py-2 rounded-lg transition
            ${
              currentRoom === room
                ? "bg-cyan-400 text-black"
                : "bg-[#111111] text-white"
            }
            `}
          >
            {room}
          </button>
        ))}

      </div>

    </div>
  );
};

export default RoomSelector;