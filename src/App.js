import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./views/SearchPage";
import WeatherPage from "./views/WeatherPage";
import { getWeather } from "./services/api";
import { SearchBar } from "./components/SearchBar/SearchBar";
import Spinner from "./components/Spinner/Spinner";

function App() {
  // const [weather, setWeather] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // const handleSearch = (query) => {
  //   setIsLoading(true);
  //   getWeather(query)
  //     .then((data) => {
  //       setWeather(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SearchPage />}></Route>
        <Route path="/weather" element={<WeatherPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* <div className="App">
  <SearchBar onSearch={handleSearch} />
  {(isLoading && <Spinner />) || <p>ok</p>}
</div> */
