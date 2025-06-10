import React from "react";
import Home from "./Home";
import { MangaProvider } from "./context/MangaContext";
import "./App.css";

export default function App() {
  return (
    <MangaProvider>
      <Home />
    </MangaProvider>
  );
}
