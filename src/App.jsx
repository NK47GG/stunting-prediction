import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Pastikan path ini sesuai dengan lokasi kamu menyimpan file Nav.jsx
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Predict from "./components/Predict.jsx";

// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Nav diletakkan di sini agar SELALU MUNCUL dan tidak ikut ke-reload */}
        <Nav />

        {/* Bagian ini yang akan berubah-ubah isinya sesuai link */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </div>
    </Router>
    // <>
    //   <div className="app">
    //     <Nav />
    //     <Hero />
    //     <Features />
    //   </div>
    // </>
  );
}

export default App;
