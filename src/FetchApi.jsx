import { useState } from "react";
// Logo dihapus karena tidak terpakai
// import "./App.css";

// Menggunakan nama StuntingForm
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
      const API_URL = "http://localhost:5000/predict"; // URL API Flask Anda

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
      // Perbaikan syntax template literal
      setError(`Gagal mengambil prediksi: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Prediksi Status Stunting
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input 1: Jenis Kelamin (Dropdown) */}
        <div>
          <label
            htmlFor="jenisKelamin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Jenis Kelamin
          </label>
          <select
            id="jenisKelamin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>

        {/* Input 2: Umur */}
        <div>
          <label
            htmlFor="umur"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Umur (bulan)
          </label>
          <input
            type="number"
            id="umur"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: 24"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
          />
        </div>

        {/* Input 3: Tinggi Badan */}
        <div>
          <label
            htmlFor="tinggi"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tinggi Badan (cm)
          </label>
          <input
            type="number"
            id="tinggi"
            step="any"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: 85.5"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
          />
        </div>

        {/* Input 4: Berat Badan */}
        <div>
          <label
            htmlFor="berat"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Berat Badan (kg)
          </label>
          <input
            type="number"
            id="berat"
            step="any"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: 10.2"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loading-spinner"></div>
          ) : (
            "Prediksi Status Gizi"
          )}
        </button>
      </form>

      {/* Tampilkan hasil prediksi atau error */}
      <div className="mt-6 text-center">
        {prediction !== null && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Hasil Prediksi:</h3>
            <p className="text-2xl font-bold">{prediction}</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Error:</h3>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// PASTIKAN INI DIUBAH
export default StuntingForm;
