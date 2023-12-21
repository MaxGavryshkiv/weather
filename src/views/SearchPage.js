import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchPage() {
  const notify = (message) => toast.error(message);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      notify("Please enter location");
      return;
    }

    try {
      const weatherData = await getWeather(query);
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
      navigate(`/weather?query=${query}`, { state: weatherData });
    } catch (error) {
      const errorObj = await JSON.parse(error.message);
      if (errorObj.status === 400) {
        notify("Location with this name cannot be found");
      }
    }
  };
  return (
    <>
      <SearchBar
        handleSearch={handleSearch}
        query={query}
        handleInputChange={handleInputChange}
      />

      <ToastContainer />
    </>
  );
}

export default SearchPage;
