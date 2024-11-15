import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeatherApp from "./WeatherApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>
);
