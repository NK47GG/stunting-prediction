import React from "react";
// import "./css/Hero.css";
import Phone from "../assets/images/phone.svg";
import IbuAnak from "../assets/images/ibu-anak.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* <div className="hero-illustration">
          <span className="leaves leaf-left">🌿</span>
          <span className="leaves leaf-right">🌿</span>
          <span className="sparkle sparkle-1">✨</span>
          <span className="sparkle sparkle-2">✨</span>
          <span className="sparkle sparkle-3">✨</span>
          <div className="mother-child">👩‍👦</div>
        </div> */}
        <img src={IbuAnak} alt="ibu dan anak" style={{ width: "350px" }} />
        <div className="hero-text">
          <h1>Pastikan Tumbuh Kembang Si Kecil Optimal Sejak Dini</h1>
          <p>
            Website ini menunjukung prediksi dini potensi stunting sesuai
            standar WHO (World Health Organization)
          </p>
          <Link to="/predict">
            <button className="cta-button">TRY TO PREDICT</button>
          </Link>
        </div>
        <img src={Phone} alt="Logo" />
      </div>

      {/* <PhoneMockup /> */}
    </section>
  );
}

export default Hero;
