import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ handleSearch, query, handleInputChange }) {
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
    </div>
  );
}
