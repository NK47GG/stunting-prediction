import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Pastikan path ini sesuai dengan lokasi kamu menyimpan file Nav.jsx
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
// import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Nav />
        <Hero />
        <Features />
      </div>
    </>
  );
}

export default App;
