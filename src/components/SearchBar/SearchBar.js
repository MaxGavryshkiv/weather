import React, { useState } from "react";
// import { SearchIcon } from "../icons/SearchIcon/SearchIcon";
// import { Link, useHistory } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  // const history = useHistory();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return;
    }

    // history.push(`/weather?query=${query}`);
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

        {/* <Link
          to={`/weather?query=${query}`}
          className={styles.SearchForm_button}
          onClick={handleSearch}
        >
          Search
        </Link> */}
      </form>
    </div>
  );
}

// <div className={styles.SearchBar}>
// <form className={styles.SearchForm} onSubmit={handleSearch}>
//   <input
//     className={styles.SearchForm_input}
//     type="text"
//     autoComplete="off"
//     autoFocus
//     placeholder="Search"
//     onChange={handleInputChange}
//   />

//   <button
//     className={styles.SearchForm_button}
//     type="submit"
//     //   onClick={this.queryPath}
//   >
//     <span className={styles.SearchForm_button_label}>
//       {/* <SearchIcon /> */}
//     </span>
//   </button>
//   <Link to={`/weather?query=${query}`}>Search</Link>
// </form>
// </div>
