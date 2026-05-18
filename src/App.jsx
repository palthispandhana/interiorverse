import { useEffect, useState } from "react";

import ThreeScene from "./components/ThreeScene";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {loading && <Loader />}

      <Hero />

      <ThreeScene />

    </div>
  );
}

export default App;