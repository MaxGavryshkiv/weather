import "./App.css";
import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import SearchPage from "./views/SearchPage";
import WeatherPage from "./views/WeatherPage";

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Route exact path="/" element={<SearchPage />}></Route>
        <Route path="/weather" element={<WeatherPage />}></Route>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
