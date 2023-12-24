import "./App.css";
import React from "react";
import {
  BrowserRouter,
  HashRouter,
  createHashRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SearchPage from "./views/SearchPage";
import WeatherPage from "./views/WeatherPage";

function App() {
  const router = createHashRouter([
    {
      path: "/*",
      element: <SearchPage />,
    },
    {
      path: "/weather",
      element: <WeatherPage />,
    },
  ]);

  return (
    <BrowserRouter>
      <HashRouter>
        <RouterProvider router={router} />
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route exact path="/" element={<SearchPage />}></Route>
        <Route path="/weather" element={<WeatherPage />}></Route> */
}
