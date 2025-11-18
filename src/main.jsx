import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StuntingForm from "./FetchApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <h1>test</h1>
    <StuntingForm />
  </StrictMode>
);
