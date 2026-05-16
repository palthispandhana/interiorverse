import ThreeScene from "./components/ThreeScene";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Hero UI */}
      <Hero />

      {/* 3D Scene */}
      <ThreeScene />

    </div>
  );
}

export default App;