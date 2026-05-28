import { useTheme }
from "../context/ThemeContext";

const ThemeToggle = () => {

  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  return (
    <button

      onClick={toggleTheme}

      className="
fixed
bottom-8
right-8
z-50
px-5 py-3
rounded-full
bg-cyan-400
text-black
font-bold
shadow-lg
shadow-cyan-500/40
hover:scale-110
hover:shadow-cyan-400/70
transition
duration-300
"
    >

      {darkMode
        ? "Light Mode"
        : "Dark Mode"}

    </button>
  );
};

export default ThemeToggle;