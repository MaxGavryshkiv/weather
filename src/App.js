import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./views/SearchPage";
import WeatherPage from "./views/WeatherPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SearchPage />}></Route>
      <Route path="/weather" element={<WeatherPage />}></Route>
    </Routes>
  );
}

export default App;
