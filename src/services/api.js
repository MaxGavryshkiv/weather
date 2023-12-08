import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/";
const API_KEY = "e763d5cd470a485ead6172127220606";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const getWeather = async (location) => {
  try {
    const response = await api.get("/forecast.json", {
      params: {
        q: location,
        days: 3,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    console.error(error.response);
    throw new Error(
      JSON.stringify({ message: error.message, status: error.response.status })
    );
  }
};
