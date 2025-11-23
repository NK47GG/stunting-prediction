import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StuntingForm from "./components/FetchApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <StuntingForm />
  </StrictMode>
);
