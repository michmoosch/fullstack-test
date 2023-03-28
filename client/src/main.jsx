import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PersonaList from "./components/PersonaList";
import Persona from "./components/Persona";
import "./index.css";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personas" element={<PersonaList />} />
        <Route path="/personas/:id" element={<Persona />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
