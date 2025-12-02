import { useState } from "react";
import "../App.css";
import Bayi from "../assets/images/bayi.svg";

function StuntingForm() {
  // --- State untuk 4 input ---
  const [jenisKelamin, setJenisKelamin] = useState("Laki-laki");
  const [umur, setUmur] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [berat, setBerat] = useState("");

  // --- State untuk UI ---
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setPrediction(null);
    setIsLoading(true);

    // Validasi input
    if (umur === "" || tinggi === "" || berat === "") {
      setError("Umur, Tinggi, dan Berat harus diisi.");
      setIsLoading(false);
      return;
    }

    const inputData = {
      jenis_kelamin: jenisKelamin,
      umur: parseFloat(umur),
      tinggi: parseFloat(tinggi),
      berat: parseFloat(berat),
    };

    try {
      const API_URL = "https://silvio0-api-stuntify.hf.space/predict";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Network response was not ok");
      }

      setPrediction(result.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setError(`Gagal mengambil prediksi: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "left", marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "32px",
              color: "#1a1a1a",
              marginBottom: "10px",
              fontWeight: "700",
            }}
          >
            Yuk, Kenali Tumbuh Kembang Si Kecil!
          </h1>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Isikan detail si kecil dibawah ini untuk memprediksi stunting!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Bayi}
            alt="bayi"
            style={{
              width: "300px",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Illustration */}
          {/* <div
            style={{
              flexShrink: 0,
              width: "200px",
              height: "200px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                fontSize: "50px",
                top: "10px",
                left: "-10px",
              }}
            >
              🌿
            </span>
            <span
              style={{
                position: "absolute",
                fontSize: "50px",
                top: "30px",
                right: "-10px",
              }}
            >
              🌿
            </span>
            <span
              style={{
                position: "absolute",
                fontSize: "50px",
                bottom: "30px",
                left: "20px",
              }}
            >
              🌿
            </span>
            <div
              style={{
                fontSize: "140px",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              }}
            >
              👶
            </div>
          </div> */}

          {/* Form Container */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Nama */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "#5dade2",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                  }}
                >
                  🎍
                </span>
                Nama
              </label>
              <input
                type="text"
                placeholder="Contoh : John Doe"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  border: "2px solid #e0e0e0",
                  borderRadius: "12px",
                  fontSize: "14px",
                  background: "#f8f9fa",
                  fontFamily: "inherit",
                }}
              />

              {/* Jenis Kelamin */}
              <div style={{ marginBottom: "25px", marginTop: "25px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "#5dade2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    ⚧
                  </span>
                  Jenis Kelamin
                </label>
                <select
                  value={jenisKelamin}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "12px",
                    fontSize: "14px",
                    background: "#f8f9fa",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>

              {/* Umur */}
              <div style={{ marginBottom: "25px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "#5dade2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    📅
                  </span>
                  Umur (bulan)
                </label>
                <input
                  type="number"
                  placeholder="Contoh: 24"
                  value={umur}
                  onChange={(e) => setUmur(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "12px",
                    fontSize: "14px",
                    background: "#f8f9fa",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Row for Tinggi and Berat */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "25px",
                }}
              >
                {/* Tinggi */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#5dade2",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                      }}
                    >
                      📏
                    </span>
                    Tinggi (cm)
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder="Contoh: 85.5"
                    value={tinggi}
                    onChange={(e) => setTinggi(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      border: "2px solid #e0e0e0",
                      borderRadius: "12px",
                      fontSize: "14px",
                      background: "#f8f9fa",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                {/* Berat */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#5dade2",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                      }}
                    >
                      ⚖️
                    </span>
                    Berat (kg)
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder="Contoh: 10.2"
                    value={berat}
                    onChange={(e) => setBerat(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      border: "2px solid #e0e0e0",
                      borderRadius: "12px",
                      fontSize: "14px",
                      background: "#f8f9fa",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: isLoading
                    ? "linear-gradient(135deg, #ccc 0%, #999 100%)"
                    : "linear-gradient(135deg, #ff8a65 0%, #ff7043 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 15px rgba(255, 112, 67, 0.3)",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(255, 112, 67, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(255, 112, 67, 0.3)";
                }}
              >
                {isLoading ? (
                  <>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        border: "3px solid #ffffff",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    ></div>
                    Memproses...
                  </>
                ) : (
                  "PREDIKSI SEKARANG"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Result Section */}
        {(prediction !== null || error) && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              marginTop: "40px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "12px",
              }}
            >
              Hasil Prediksi:
            </div>

            {prediction !== null && (
              <div
                style={{
                  padding: "20px",
                  background: "#e8f5e9",
                  borderRadius: "12px",
                  border: "2px solid #a5d6a7",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#2e7d32",
                    marginBottom: "8px",
                  }}
                >
                  ✓ Prediksi Berhasil
                </h3>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#1b5e20",
                    margin: "0",
                  }}
                >
                  {prediction}
                </p>
              </div>
            )}

            {error && (
              <div
                style={{
                  padding: "20px",
                  background: "#ffebee",
                  borderRadius: "12px",
                  border: "2px solid #ef5350",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#c62828",
                    marginBottom: "8px",
                  }}
                >
                  ⚠️ Terjadi Kesalahan
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#b71c1c",
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  {error}
                </p>
              </div>
            )}
          </div>
        )}

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          input:focus, select:focus {
            outline: none;
            border-color: #5dade2 !important;
            background: white !important;
            box-shadow: 0 0 0 3px rgba(93, 173, 226, 0.1);
          }

          @media (max-width: 768px) {
            .form-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default StuntingForm;
