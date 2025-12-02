import React from "react";
// import "./css/Features.css";
import KeyFeatures from "../assets/images/key-features.svg";

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {/* Feature Card 1 - Form Preview */}
        <img src={KeyFeatures} className="feature-img" alt="Key Features" />
        {/* <div className="feature-card">
          <div className="form-preview">
            <div className="form-field">📊 Usia bayi</div>
            <div className="form-field">📏 Body</div>
            <div className="form-field">⚖️ Gender</div>
            <div className="form-field">📐 Tinggi</div>
            <div className="form-field">🏃 Age child</div>
            <div className="form-field">📊 BMI</div>
            <div className="form-field">⚖️ Weight (kg)</div>
            <div className="form-field">📏 Height (M)</div>
            <div className="predict-button">🔍 Predict</div>
          </div>
          <div className="arrow">→</div>
          <div className="result-preview">
            <div className="result-title">Prediction Result</div>
            <div className="result-detail">Status: OK</div>
            <div className="result-detail">Prediction: Fit</div>
          </div>
        </div> */}
        {/* Feature Card 2 - Akurat */}
        <div className="feature-card">
          <div className="feature-icon icon-green">✓</div>
          <h3>Akurat & Terpercaya</h3>
          <p>
            Menggunakan standar WHO untuk memprediksi stunting agar lebih
            akurat.
          </p>
        </div>
        {/* Feature Card 3 - Mudah Digunakan */}
        <div className="feature-card">
          <div className="feature-icon icon-orange">👆</div>
          <h3>Mudah Digunakan</h3>
          <p>
            Prediksi dengan cara memasukkan data anak usia, tinggi, dan berat
            badan anak. Lalu prediksi stunting akan muncul!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
