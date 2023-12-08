import React, { useState } from "react";
// import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import styles from "../components/SearchBar/SearchBar.module.css";
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
    <div className={styles.SearchBar}>
      <form className={styles.SearchForm} onSubmit={handleSearch}>
        <input
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />

        <button type="submit" className={styles.SearchForm_button}></button>
      </form>
      <ToastContainer />
    </div>
  );
  //   const [inputValue, setInputValue] = useState("");

  //   return (
  //     <div>
  //       <h1>SearchPage</h1>
  //       <SearchBar />
  //     </div>
  //   );
}

export default SearchPage;

// import React, { useState } from "react";
// // import { SearchIcon } from "../icons/SearchIcon/SearchIcon";
// import { Link, useHistory } from "react-router-dom";
// import styles from "./SearchBar.module.css";

// export default function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");
//   const history = useHistory();

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (query.trim() === "") {
//       return;
//     }

//     history.push(`/weather?query=${query}`);
//   };
//   return (
//     <div className={styles.SearchBar}>
//       <form className={styles.SearchForm} onSubmit={handleSearch}>
//         <input
//           className={styles.SearchForm_input}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search"
//           value={query}
//           onChange={handleInputChange}
//         />

//         <Link
//           to={`/weather?query=${query}`}
//           className={styles.SearchForm_button}
//           onClick={handleSearch}
//         >
//           Search
//         </Link>
//       </form>
//     </div>
//   );
// }
